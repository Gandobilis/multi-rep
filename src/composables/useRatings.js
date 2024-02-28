import {ref} from "vue";
import axios from "../interceptors/axios/index.js";

const useRatings = () => {
    const ratings = ref()

    const getRatings = async () => {
        await axios.get('/listings?sortBy=_score&order=desc&quantity=10').then(res => {
            ratings.value = res.data.data
            console.log(ratings.value)
        })
    }

    return {ratings, getRatings}
}

export default useRatings