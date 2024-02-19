import axios from "/src/interceptors/axios";
import cookies from "vue-cookies";

export default function useLogout() {
    const logOut = async () => {
        try {
            const refreshToken = cookies.get('refresh_token');  // Assuming you store the refresh token in a cookie
            const accessToken = cookies.get('access_token');  // Assuming you store the refresh token in a cookie


            await axios.post('/users/auth/logout', {

                refresh_token: refreshToken


            });

            // Clear any stored tokens or user information after successful logout


            console.log('Successfully logged out');
        } catch (error) {
            // Handle errors
            console.error('Error logging out:', error);
        }
    };

    return { logOut };
}
