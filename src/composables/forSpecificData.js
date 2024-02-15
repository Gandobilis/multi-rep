import {ref} from "vue";
import axios from "/src/interceptors/axios/index";

export default function useCourses() {
    const topTenTeachers = ref(null)
    const citiesData = ref(null)
    const subjects = ref(null)

    const getTopTenTeachers = async () =>{
       await axios.get('/users/top_ten_teacher').then(res => {
            topTenTeachers.value = res.data.data
        })
    }

    const getCitiesAndDistricts = async () =>{
        await axios.get('/listings/get_cities_with_districts').then(res => {citiesData.value = res.data

        })
    }

    const getSubjects = async () =>{
        await axios.get('/listings/get_subjects').then(res => {
            subjects.value = res.data

        })
    }




    return {topTenTeachers, getTopTenTeachers, getCitiesAndDistricts, citiesData, getSubjects, subjects}
}