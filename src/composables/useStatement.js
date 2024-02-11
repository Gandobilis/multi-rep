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

    const getDataForSpecificListing = (id) =>{
        axios.post('/listings/get_specific_listing', {
            "listing_id": id
        }).then(res => {
            dataForSpecificPage.value = res.data.data

        })

        axios.post('/users/get_data_for_specific_user/', {
            "listing_id": id
        }).then(res => {
            userForSpecificListing.value = res.data.data
            console.log(userForSpecificListing.value)
        })


    }



    let instance = {userForSpecificListing, dataForSpecificPage,getDataForSpecificListing  };

    return () => {
        return instance;
    };
})();