import {ref} from "vue";
import {markRaw} from 'vue';
import javaimg from "../assets/images/Java.png"
import Profileimg from "../assets/images/Profile.png"
import date from "../assets/icons/Date.vue"
import time from "../assets/icons/Time.vue"
import view from "../assets/icons/Views.vue"
import number from "../assets/icons/Number.vue"
import email from "../assets/icons/Email.vue"
import save from "../assets/icons/Save.vue"
import close from "../assets/icons/Close.vue"

export default (function useStatement() {
    const Statementinfo = ref([
        {
            Statement: {
                img: javaimg,
                img2: Profileimg,
                datesvg: markRaw(date),
                timesvg: markRaw(time),
                viewsvg: markRaw(view),
                numbersvg: markRaw(number),
                emailsvg: markRaw(email),
                savesvg: markRaw(save),
                closesvg: markRaw(close),
            },
        },

    ]);


    let instance = {Statementinfo,};

    return () => {
        return instance;
    };
})();