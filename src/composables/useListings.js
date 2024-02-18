import {ref, watch, watchEffect} from "vue";
import axios from "/src/interceptors/axios/index";
import { useRoute } from "vue-router";

export default function useCourses() {
    const route = useRoute();
    const courses = ref(null);
    const data = ref(null);
    const isLoading = ref(true);
    const params = ref(route.query);
    const dataForMainPage = ref(null)


    const filterListings = async () => {
        try {
            const queryParams = new URLSearchParams(params.value)

            const res = await axios.get(`/listings?${queryParams.toString()}`);

            courses.value = res.data;

        } catch (error) {
            console.error("Error fetching listings:", error);
        }
    };

    const getListingsForMainPage = async () => {
        try {
            const res = await axios.get(`/listings/getListingsForMainPage`);
            courses.value = res.data.data;
            isLoading.value = false;
        } catch (error) {
            console.error("Error fetching listings:", error);
        }
    };

    const getListings = async (user_id) => {
        try {
            const res = await axios.get(`/listings?teacher=${user_id}`);
            dataForMainPage.value = res.data.data;
            isLoading.value = false;
        } catch (error) {
            console.error("Error fetching listings:", error);
        }
    };

    watchEffect(() => {
        params.value = route.query;
        filterListings()
        console.log(courses.value)


    });

    return { courses, data, isLoading, getListings, filterListings, params, dataForMainPage, getListingsForMainPage };
}
