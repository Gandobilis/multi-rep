import {ref} from "vue";
import axios from "@/interceptors/axios";
import cookies from 'vue-cookies';
import {useRouter} from "vue-router";

export default function useLogin() {
    const router = useRouter();
    const email = ref();
    const password = ref();
    const remember = ref();
    const error = ref();

    const login = async () => {
        axios.post('users/auth/login', {
            'email': email.value,
            'password': password.value
        }).then((res) => {
            cookies.set('access_token', res.data.access, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict',
                expires: '1d',
            });
            cookies.set('user_id', res.data.user_id, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict',
                expires: '1d',
            });
            router.push('/')
        }).catch((err) => {
            error.value = err.response.data.error;
        });
    };

    return {
        email,
        password,
        remember,
        error,
        login,
    };
};