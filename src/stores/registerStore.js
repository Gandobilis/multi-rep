import {defineStore} from 'pinia';

export const useRegisterStore = defineStore('register', {
    state: () => ({
        data: {
            first_name: null,
            last_name: null,
            phone_number: null,
            email: null,
            is_teacher: false,
            city: null,
            profession: null,
            password: null,
            password2: null,
        },
    }),
    getters: {
        getData: {
            getData: (state) => state.data
        },
    },
    actions: {
        setData(payload) {
            for (const key in payload) {
                this.data[key] = payload[key];
            }
        },
    },
});
