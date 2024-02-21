import axios from "/src/interceptors/axios";
import cookies from "vue-cookies";
import {useRouter} from "vue-router";

export default function useLogout() {
    const router = useRouter()
    const logOut = async () => {
        try {
            const refreshToken = cookies.get('refresh_token');  // Assuming you store the refresh token in a cookie
            const accessToken = cookies.get('access_token');  // Assuming you store the refresh token in a cookie


            await axios.post('/users/auth/logout', {
                refresh_token: refreshToken
            });

            cookies.remove('access_token');
            cookies.remove('user_id');

            await router.push('/')

            // Clear any stored tokens or user information after successful logout


            console.log('Successfully logged out');
        } catch (error) {
            // Handle errors
            console.error('Error logging out:', error);
        }
    };

    return { logOut };
}
