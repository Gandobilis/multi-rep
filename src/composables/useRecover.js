import {ref} from "vue";
import axios from "/src/interceptors/axios";

export default function useRecover() {
    const email = ref()
    const error = ref()
    const success = ref()

    const recover = async () => {
        error.value = null
        success.value = null
        axios.post('users/password_reset/', {'email': email.value}).then((res) => {
            success.value = res.data.success
        }).catch((err) => {
            console.log(err)
            error.value = 'ანგარიში არ არსებობს';
        });
    };

    return {
        email,
        success,
        error,
        recover
    }
}