import {defineStore} from 'pinia';

export const useRegisterStore = defineStore('register', {
    state: () => ({
        data: {
            first_name: '',
            last_name: '',
            phone_number: '',
            email: '',
            is_teacher: false,
            city: '',
            profession: '',
            password: '',
            password2: '',
        },
    }),
    getters: {
        getAllData: (state) => state.data,
    },
    actions: {
        setData(payload) {
            for (const key in payload) {
                this.data[key] = payload[key];
            }
        },
    },
});
