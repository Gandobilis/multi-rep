import { ref } from "vue";
import { markRaw } from 'vue';
import javaimg from "../assets/images/Java.png"
import Profileimg from "../assets/images/Profile.png"
import number from "../assets/icons/statement/Number.vue"
import email from "../assets/icons/statement/Email.vue"
import vector from "../assets/icons/statement/Vector.vue"
import axios from "/src/interceptors/axios/index";

export default (function useStatement() {

    const dataForSpecificPage = ref(null)
    const userForSpecificListing = ref(null)
    const similarListingsForSpecificListing = ref(null)

    const getFilteredListing = async (city,subject) =>{
        await axios.get(`/listings?subject=${subject}&city=${city}`).then(res => {
            similarListingsForSpecificListing.value = res.data.data
            console.log(similarListingsForSpecificListing)
        })
    }
    const getDataForSpecificListing = (id) =>{
        axios.post('/listings/get_specific_listing', {
            "listing_id": id
        }).then(res => {
            dataForSpecificPage.value = res.data.data
            getFilteredListing(dataForSpecificPage.value._city, dataForSpecificPage?.value._subject,)
        })
        axios.post('/users/get_data_for_specific_user/', {
            "listing_id": id
        }).then(res => {
            userForSpecificListing.value = res.data.data
        })



    }


    let instance = {similarListingsForSpecificListing, userForSpecificListing, dataForSpecificPage,getDataForSpecificListing  };

    return () => {
        return instance;
    };
})();