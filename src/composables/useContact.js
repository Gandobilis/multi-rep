import {ref} from "vue"
import axios from "/src/interceptors/axios/index"

export default function useContact() {
    const data = ref({
        name: null,
        surname: null,
        email: null,
        issue: null
    })

    const sendReport = async () => {
        data.value['listing_id'] = -1; // არგუმენტად უნდა ჩამოეწოდოს.
        await axios.post('/report/send_report', data.value).then((res) => {
            Object.keys(data.value).forEach(key => data.value[key] = null)
        }).catch((err) => {
        }).finally(() => {
        })
    }

    return {data, sendReport}
}