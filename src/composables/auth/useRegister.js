import {ref} from "vue";
import {useRouter} from "vue-router";
import axios from "/src/interceptors/axios";
import {useRegisterStore} from '/src/stores/registerStore.js';
import cookies from "vue-cookies";
import useHelpers from "../../helpers/index.js";
import {data} from "autoprefixer";

export default function useRegister() {
    const router = useRouter();
    const error = ref();
    const success = ref();

    const store = useRegisterStore();
    const otp = ref(null)

    const step1Models = [
        {placeholder: "სახელი", model: "first_name"},
        {placeholder: "გვარი", model: "last_name"},
        {placeholder: "ტელეფონი", model: "phone_number"},
        {placeholder: "ელ. ფოსტა", model: "email"},
        {model: "is_teacher"},
    ];

    const step1Data = ref({
        first_name: null,
        last_name: null,
        phone_number: null,
        email: null,
        is_teacher: false,
    });

    const step2Models = [
        {placeholder: "ქალაქი", model: "city"},
        {placeholder: "პროფესია", model: "profession"},
    ];

    const step2Data = ref({
        city: null,
        profession: null,
    });

    const step3Models = [
        {placeholder: "პაროლი", model: "password", showToggle: true},
        {placeholder: "გაიმეორეთ", model: "password2", showToggle: true},
    ];

    const step3Data = ref({
        password: null,
        password2: null,
    });

    const step1 = async () => {
        error.value = null

        if (Object.values(step1Data.value).includes(null)) {
            error.value = 'შეავსეთ ყველა ველი'
        } else {

            const data = await axios.post('users/check_email/', {
                "email": step1Data.value.email
            }).then(res => res.data)

            if (data) {
                error.value = "იმეილი გამოყენებულია"
                return
            }

            store.setData(step1Data.value)
            if (store.data.is_teacher) {
                await router.push('/auth/register2');
            } else {
                await router.push('/auth/register3');
            }
        }
    }

    const step2 = async () => {
        error.value = null
        if (Object.values(step2Data.value).includes(null)) {
            error.value = 'შეავსეთ ყველა ველი'
        } else {
            store.setData(step2Data.value)
            await router.push('/auth/register3')
        }
    }

    const step3 = () => {
        error.value = null

        if (Object.values(step3Data.value).includes(null)) {
            error.value = 'შეავსეთ ყველა ველი'
        }
        else if(step3Data.value.password !== step3Data.value.password2){
            error.value = "პაროლები არ ემთხვევა"
        }
        else {
            store.setData(step3Data.value)
        }

    }

    const register = async () => {
        step3()
        if(error.value){
            return
        }
        try {
            await axios.post('users/auth/register', store.data);

            await router.push("/auth/confirm_otp");
        } catch (err) {
            error.value = err.response.data.error;
        }
    };

    const cotasMeiparavCotasGaaketeb = async () =>{
        success.value = null
        error.value = null
        axios.post('/users/verify', {
            'email': store.data.email,
            'otp': otp.value
        }).then(async () => {
            success.value = 'თქვენ წარმადებით გაიარეთ ვერიფიკაცია'
            const {mapObjectKeys} = useHelpers()
            const _data = mapObjectKeys(store.data, ['email', 'password']);
            const {data} = await axios.post('users/auth/login', _data)

            cookies.set("access_token", data.access, {
                httpOnly: true,
                secure: true,
                sameSite: "strict",
                expires: "1d",
            });

            cookies.set("user_id", data.user_id, {
                httpOnly: true,
                secure: true,
                sameSite: "strict",
                expires: "1d",
            });
            setTimeout(()=>{
                router.push('/')
            }, 1000)
        }).catch(() => {
            error.value = 'კოდი არასწორია'
        })
    }
    return {
        step1Models,
        step1Data,
        step1,
        step2Models,
        step2Data,
        step2,
        step3Models,
        step3Data,
        error,
        register,
        otp,
        cotasMeiparavCotasGaaketeb

    };
};