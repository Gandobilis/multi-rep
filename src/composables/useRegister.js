import {ref} from "vue";
import {useRouter} from "vue-router";
import axios from "/src/interceptors/axios/index";


export default function useRegister() {
    const router = useRouter();
    const error = ref();

    const formFields = [
        {placeholder: "სახელი", model: "first_name"},
        {placeholder: "გვარი", model: "last_name"},
        {placeholder: "ტელეფონი", model: "email"},
        {placeholder: "პაროლი", model: "password", showToggle: true},
        {placeholder: "გაიმეორეთ", model: "password2", showToggle: true},
        {model: "is_teacher"},
    ];

    const formData = ref({
        first_name: null,
        last_name: null,
        phone_number: null,
        email: null,
        is_teacher: false,
        password: null,
        password2: null
    });

    const register = async () => {
        axios.post('users/auth/register', formData.value).then((res) => {
            router.push('/')
        }).catch((err) => {
            console.log(err)
            error.value = 'შეამოწმეთ მონაცემები';
        });
    };

    return {
        formFields,
        formData,
        error,
        register,
    };
};