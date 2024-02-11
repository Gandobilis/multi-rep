import {ref} from "vue";
import axios from "/src/interceptors/axios/index";

export default function useCourses() {
    const courses = ref(null)
    const data = ref(null)
    const isLoading = ref(true)

    const getListingsForMainPage = async (quantity) => {
        await axios.post('/listings/getLast8Listings', {
            "quantity": quantity
        }).then(res => {
            courses.value = res.data.data
        })
    }

    const getListings = async (user_id) => {
        await axios.get(`/listings?teacher=${user_id}`).then(res => {
            data.value = res.data.data
            isLoading.value = false
        });
    }


    return {courses, data, isLoading, getListings, getListingsForMainPage}
}