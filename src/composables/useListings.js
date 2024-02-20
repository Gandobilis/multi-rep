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

    const fetchCities = async () => {
       await axios.get('/listings/cities').then((res) => {
            filterCities.value = res.data.data;
        }).catch(err => console.log(err));
    };

    const fetchSubjects = async () => {
        await axios.get('/listings/get_subjects').then((res) => {
            filterSubjects.value = res.data.subjects;
        }).catch(err => console.log(err));
    };

    const handleCityFilter = async () => {
        await router.push({
            query: {
                ...router.currentRoute.value.query,
                city: filterCity.value
            }
        });
    };

    const handleSubjectFilter = async () => {
        await router.push({
            query: {
                ...router.currentRoute.value.query,
                subject: filterSubject.value
            }
        });
    };

    watch(filterCity, async () => {
        await handleCityFilter();
    });

    watch(filterSubject, async () => {
        await handleSubjectFilter();
    });

    const filterListings = async () => {
        try {
            const _params = params.value
            if (filterCity.value === 'all' && _params.hasOwnProperty('city')) delete _params.city
            if (filterSubject.value === 'all' && _params.hasOwnProperty('subject')) delete _params.subject

            const queryParams = new URLSearchParams(_params)

            const res = await axios.get(`/listings?${queryParams.toString()}`);

            listings.value = res.data.data;
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
        try {
            const res = await axios.get(`/listings?teacher=${user_id}`);
            dataForMainPage.value = res.data.data;
            data.value = res.data.data;
            isLoading.value = false;
        } catch (error) {
            console.error("Error fetching listings:", error);
        }
    };

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
        handleSubjectFilter
    };
}
