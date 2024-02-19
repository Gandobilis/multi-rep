import {ref} from "vue";
import axios from "/src/interceptors/axios/index";
import cookies from "vue-cookies";

export default function useCourses() {
    const accessToken = cookies.get('access_token');
    const headers = {
        Authorization: `Bearer ${accessToken}`,
        // Add other headers if needed
    };
    const favoriteListings = ref(null)


    const addToFavorites = async (id) => {
        try {
            const response = await axios.post(`/users/add_to_favorites`, {
                'listing_id': id
            }, {headers});

            console.log(response)

        } catch (error) {
            console.error(error);
        }
    };

    const removeFromFavorites = async (id) => {
        try {
            const response = await axios.post(`/users/remove_from_favorites`, {
                'listing_id': id
            }, {headers});

            console.log(response)

        } catch (error) {
            console.error(error);
        }
    };
    const getFavoriteListings = async () => {
        try {

            const response = await axios.get(`/users/get_all_favorites`, {
                headers: headers  // Pass headers in the configuration options
            });

            favoriteListings.value = response.data;


        } catch (error) {
            console.error(error);
        }
    };


    return {getFavoriteListings,removeFromFavorites, addToFavorites ,favoriteListings};
}
