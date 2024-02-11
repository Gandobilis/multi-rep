import {ref} from "vue";
import axios from "/src/interceptors/axios/index";

export default function useCourses() {
    const topTenTeachers = ref(null)


    const getTopTenTeachers = async () =>{
       await axios.get('/users/top_ten_teacher').then(res => {
            topTenTeachers.value = res.data.data
            console.log(topTenTeachers.value)
        })
    }





    return {topTenTeachers, getTopTenTeachers}
}