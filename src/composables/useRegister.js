import {ref} from "vue";
import {useRouter} from "vue-router";
import axios from "/src/interceptors/axios/index";
import {useRegisterStore} from '/src/stores/registerStore.js';
import cookies from "vue-cookies";
import useHelpers from "../helpers";

export default function useRegister() {
    const router = useRouter();
    const error = ref();
    const store = useRegisterStore();

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
        store.setData(step1Data.value)

        if (store.data.is_teacher) {
            await router.push('/auth/register2');
        } else {
            await router.push('/auth/register3');
        }
    }

    const step2 = async () => {
        store.setData(step2Data.value)

        await router.push('/auth/register3')
    }

    const step3 = () => {
        store.setData(step3Data.value)
    }

    const register = async () => {
        step3()
        try {
            await axios.post('users/auth/register', store.data);
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

            await router.push("/");
        } catch (err) {
            error.value = err.response.data.error;
        }
    };

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
    };
};