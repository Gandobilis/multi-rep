import {ref, watch, watchEffect} from "vue";
import axios from "/src/interceptors/axios/index";
import { useRoute } from "vue-router";
import cookies from "vue-cookies";

export default function useCourses() {
    const favoriteListings = ref(null)


    const addToFavorites = () => {
        try {
            axios.post(`/users/add_to_favorites`).then(res => console.log(res))


        } catch (error) {
            console.error(error);
        }
    };

    const removeFromFavorites = () => {
        try {
            axios.post(`/users/remove_from_favorites`).then(res => console.log(res))


        } catch (error) {
            console.error(error);
        }
    };
    const getFavoriteListings = async () => {
        try {
            const accessToken = cookies.get('access_token');

            const res = await axios.get(`/users/get_all_favorites`,{
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            favoriteListings.value = res.data;
            console.log(favoriteListings.value)

        } catch (error) {
            console.error(error);
        }
    };


    return {getFavoriteListings,removeFromFavorites, addToFavorites ,favoriteListings};
}
