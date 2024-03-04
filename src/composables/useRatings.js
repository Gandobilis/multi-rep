import {ref} from "vue"
import axios from "/src/interceptors/axios"

export default function useRatings() {
    const ratings = ref()
    const isLoading = ref(true)
    const error = ref()

    const getRatings = async () => {
        await axios.get('/listings?sortBy=_score&order=desc&quantity=10').then(res => {
            ratings.value = res.data.data
        }).catch(() => {
            error.value = 'შეცდომა განცხადებების ჩატვირთვისას, სცადეთ მოგვიანებით.'
        }).finally(() => {
            isLoading.value = false
        })
    }

    return {ratings, isLoading, error, getRatings}
}