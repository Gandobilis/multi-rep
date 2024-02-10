import {ref} from "vue";
import axios from "/src/interceptors/axios/index";

export default function useCourses() {
    const courses = ref(null)

    const getListingsForMainPage = async () => {
        await axios.post('/listings/getLast8Listings', {
            "quantity": 8
        }).then(res => {
            courses.value = res.data.data
        })
    }

    return {courses, getListingsForMainPage}
}