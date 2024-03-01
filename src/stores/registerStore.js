import {defineStore} from 'pinia';
import {ref} from "vue";

export const useRegisterStore = defineStore('register', () => {
    const data = ref({
        first_name: null,
        last_name: null,
        phone: null,
        email: null,
        is_teacher: false,
        password: null,
        password2: null,
        bio: null,
        cv: null,
        profile_pic: null
    });

    function setData(payload) {
        for (const key in payload) {
            this.data[key] = payload[key];
        }
    }


    return {data, setData};
});

