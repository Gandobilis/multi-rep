import {ref} from "vue"
import axios from "/src/interceptors/axios/index"

export default function useContact() {
    const data = ref({
        name: '',
        surname: '',
        email: '',
        issue: ''
    })
    const success = ref('')
    const error = ref('')

    const sendReport = async () => {
        data.value['listing_id'] = -1; // არგუმენტად უნდა ჩამოეწოდოს.

        await axios.post('/report/send_report', data.value).then(() => {
            success.value = 'რეპორტი გაიგზავნა წარმატებით.'
        }).catch(() => {
            error.value = 'შეცდომა რეპორტის გაგზავნისას.'
        }).finally(() => {
            delete data.value['listing_id']
            setTimeout(() => {
                if (success.value) {
                    error.value = ''
                    success.value = ''
                    delete data.value['listing_id']
                    Object.keys(data.value).forEach(key => data.value[key] = null)
                }
            }, 3500)
        })
    }

    return {data, success, error, sendReport}
}