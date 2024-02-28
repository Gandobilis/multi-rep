import {ref, watch, watchEffect} from "vue";
import axios from "/src/interceptors/axios/index";
import {useRoute, useRouter} from "vue-router";

export default function useCourses() {
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
        filterCity.value = 'all';
        filterDistrict.value = 'all';
        filterSubject.value = 'all';
        await router.push({query: undefined})
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
        currentPage
    };
}
