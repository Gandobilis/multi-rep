import {ref} from "vue"
import axios from "/src/interceptors/axios/index"

export default function useContact() {
    const data = ref({
        name: '',
        surname: '',
        email: '',
        issue: ''
    })
    const error = ref('')
    const success = ref('')

    const sendReport = async () => {
        data.value['listing_id'] = -1; // არგუმენტად უნდა ჩამოეწოდოს.

        await axios.post('/report/send_report', data.value).then((res) => {
            success.value = 'რეპორტი გაიგზავნა წარმატებით.'
        }).catch((err) => {
            error.value = 'შეცდომა რეპორტის გაგზავნისას.'
        }).finally(() => {
            delete data.value['listing_id']
            Object.keys(data.value).forEach(key => data.value[key] = null)
        })
    }

    return {data, sendReport}
}