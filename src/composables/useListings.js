import {ref, watch, watchEffect} from "vue";
import axios from "/src/interceptors/axios/index";
import {useRoute, useRouter} from "vue-router";
import cookies from "vue-cookies";

export default function useListings() {
    const route = useRoute();
    const router = useRouter();
    const listings = ref(null);
    const data = ref(null);
    const isLoading = ref(true);
    const params = ref(route.query);
    const dataForMainPage = ref(null);
    const listingsForMainPage = ref(null)
    const filterCities = ref([]);
    const filterSubjects = ref([]);
    const filterCity = ref('all')
    const filterSubject = ref('all')
    const filterDistrict = ref('all')
    const currentPage = ref(1);
    const currencies = ref(null)
    const timeUnits = ref(null)
    const accessToken = cookies.get('access_token');
    const myListings = ref()
    const showPostDelete = ref(false)
    const fetchCities = async () => {
        await axios.get('/listings/get_cities_with_districts').then((res) => {
            filterCities.value = res.data.cities;
        }).catch(err => console.log(err));
    };

    const fetchSubjects = async () => {
        await axios.get('/listings/get_subjects').then((res) => {
            filterSubjects.value = res.data.subjects;
        }).catch(err => console.log(err));
    };

    const handleFilter = async (filterKey, filterValue) => {
        const query = {
            ...router.currentRoute.value.query
        };

        if (filterValue !== 'all') {
            query[filterKey] = filterValue;
        } else {
            delete query[filterKey];
        }

        if (filterKey !== 'page') {
            currentPage.value = 1;
        }

        await router.push({query});
    };

    const handleCityFilter = async () => {
        await handleFilter('city', filterCity.value);
        filterDistrict.value = 'all';
    };

    const handleSubjectFilter = async () => {
        await handleFilter('subject', filterSubject.value);
    };

    const handleDistrictFilter = async () => {
        await handleFilter('district', filterDistrict.value);
    };
    const getCurrencies = async () =>{
        try {

            await axios.get(`/listings/currency_options`).then(res =>{
                currencies.value = Object.keys(res.data.currency_options)
            })
        } catch (error) {
            console.error("Error fetching currencies:", error);
        }
    }

    const getTimeUnits = async () =>{
        try {

            await axios.get(`/listings/time_unit_option`).then(res =>{
                timeUnits.value = Object.keys(res.data.time_options)
            })
        } catch (error) {
            console.error("Error fetching currencies:", error);
        }
    }

    watch(filterCity, async () => {
        await handleCityFilter();
    });

    watch(filterSubject, async () => {
        await handleSubjectFilter();
    });

    watch(filterDistrict, async () => {
        await handleDistrictFilter();
    });

    watch(currentPage, async () => {
        await handleFilter('page', currentPage.value)
    })


    const filterListings = async () => {
        try {
            const queryParams = new URLSearchParams(params.value)

            const res = await axios.get(`/listings?${queryParams.toString()}`);

            listings.value = res.data;
        } catch (error) {
            console.error("Error fetching listings:", error);
        }
    };

    const deleteListing = async (id) => {
        try {
            await axios.delete(`/listings/ManageListing?id=${id}`,{
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }).then(res =>{
                getMyListings()

            })
        } catch (error) {
            console.error("Error fetching listings:", error);
        }
    };


    const getMyListings = async () => {
        console.log(cookies.get('user_id'))
        try {
            await axios.get(`/listings?teacher_id=${cookies.get('user_id')}`).then(res =>{
                myListings.value = res.data.data
            })


        } catch (error) {
            console.error("Error fetching listings:", error);
        }
    };

    const getListingsForMainPage = async () => {
        try {
            const res = await axios.get(`/listings/getListingsForMainPage`);
            listingsForMainPage.value = res.data.data;
            isLoading.value = false;
        } catch (error) {
            console.error("Error fetching listings:", error);
        }
    };

    const getListings = async (user_id) => {
        data.value = null
        try {
            const res = await axios.get(`/listings?teacher_id=${user_id}`);
            data.value = res.data.data;
            isLoading.value = false;
        } catch (error) {
            console.error("Error fetching listings:", error);
        }
    };

    const clearFilters = async () => {
        await router.push('/listings')
        currentPage.value = 1

         filterCity.value = 'all'
        filterSubject.value = 'all'
        filterDistrict.value = 'all'

        await filterListings();
    }

    watchEffect(async () => {
        params.value = route.query;
        await filterListings();
    });

    return {
        listingsForMainPage,
        filterCity,
        filterCities,
        filterSubject,
        filterSubjects,
        filterDistrict,
        fetchCities,
        fetchSubjects,
        listings,
        data,
        isLoading,
        getListings,
        filterListings,
        params,
        dataForMainPage,
        getListingsForMainPage,
        handleCityFilter,
        handleSubjectFilter,
        clearFilters,
        currentPage,
        getCurrencies,
        currencies,
        getTimeUnits,
        timeUnits,
        getMyListings,
        myListings,
        deleteListing,
        showPostDelete,

    };
}
