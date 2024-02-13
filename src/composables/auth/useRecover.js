import {ref} from "vue";
import axios from "/src/interceptors/axios";

export default function useRecover() {
    const email = ref('')
    const error = ref(null)
    const success = ref(null)
    const password = ref(null)
    const token_id = ref(null)

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
        error.value = null
        success.value = null
        axios.post(`users/set_new_password/`, {'password': password.value, 'token':token_id.value}).then(res => {
        success.value = 'პაროლი წარმატებით შეიცვალა'
        }).catch(err => {
            error.value = 'შეცდომა პაროლის შეცვლისას, სცადეთ თავიდან'
        })
    }

    return {
        email,
        success,
        error,
        password,
        token_id,
        recover,
        recover2
    };
}