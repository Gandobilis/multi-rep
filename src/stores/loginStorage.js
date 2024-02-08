import {defineStore} from "pinia";
import {ref} from "vue";

export const useLoginStore = defineStore('login', () => {
    const token = ref(null);

    function setToken(payload) {
        token.value = payload;
    }

    return {token, setToken};
})