import {ref} from "vue";
import axios from "/src/interceptors/axios";

export default function useRecover() {
    const email = ref('')
    const error = ref(null)
    const success = ref(null)
    const password = ref(null)

    const recover = async () => {
        error.value = null
        success.value = null
        axios.post('users/password_reset/', {'email': email.value}).then((res) => {
            success.value = res.data.success
        }).catch((err) => {
            error.value = 'ანგარიში არ არსებობს';
        });
    };

    const recover2 = async () => {
        console.log(password.value)
    }

    return {
        email,
        success,
        error,
        password,
        recover,
        recover2
    };
}