import {ref} from "vue";
import axios from "/src/interceptors/axios/index";

export default function useCourses() {
    const courses = ref(null)

    const getListingsForMainPage = async (quantity) => {
         await axios.post('/listings/getLast8Listings', {
            "quantity": quantity
        }).then(res => {
            courses.value = res.data.data
        })
    }



    return {courses, getListingsForMainPage}
}