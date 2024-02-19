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
            const {data} = await axios.post("users/auth/login", _data);

            cookies.set("access_token", data.access, {
                httpOnly: true,
                secure: true,
                sameSite: "strict",
            });


            cookies.set("refresh_token", data.refresh, {
                httpOnly: true,
                secure: true,
                sameSite: "strict",
            });

            cookies.set("user_id", data.user_id, {
                httpOnly: true,
                secure: true,
                sameSite: "strict",
            });

            await router.push("/");
        } catch (err) {
            console.log(err)
            error.value = err.response.data.error;
        }
    };

    return {data, error, getRememberIcon, toggleRemember, login};
}
