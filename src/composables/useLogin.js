import useHelpers from "/src/helpers";
import {useRouter} from "vue-router";
import {ref} from "vue";
import axios from "/src/interceptors/axios";
import cookies from "vue-cookies";

export default function useLogin() {
    const {mapObjectKeys} = useHelpers();
    const router = useRouter();

    const data = ref({
        email: "",
        password: "",
        remember: false,
    });
    const error = ref("");

    const toggleRemember = () => {
        data.value.remember = !data.value.remember;
    };

    const getRememberIcon = () =>
        data.value.remember
            ? "/src/assets/icons/auth/remember-checked.svg"
            : "/src/assets/icons/auth/remember-unchecked.svg";

    const login = async () => {
        const _data = mapObjectKeys(data.value, ["email", "password"]);

        try {
            const res = await axios.post("users/auth/login", _data);
            const data = res.data;

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

    return {data, getRememberIcon, toggleRemember, login};
}
