import {ref} from "vue"
import axios from "/src/interceptors/axios"
import cookies from 'vue-cookies'
import {useRouter} from "vue-router"
import useHelpers from "/src/helpers"

export default function useLogin() {
    const {mapObjectKeys} = useHelpers()
    const router = useRouter()

    const data = ref({
        email: '',
        password: '',
        remember: false
    })
    const error = ref('')

    const login = async () => {
        const _data = mapObjectKeys(data.value, ['email', 'password'])

        axios.post('users/auth/login', _data).then((response) => {
            const data = response.data

            cookies.set('access_token', data.access, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict',
                expires: '1d'
            })

            cookies.set('user_id', data.user_id, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict',
                expires: '1d'
            })

            router.push('/')
        }).catch((err) => {
            error.value = err.response.data.error
        })
    }

    return {data, login}
}