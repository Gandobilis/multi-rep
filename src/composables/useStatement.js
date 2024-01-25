import { ref } from "vue";
import { markRaw } from 'vue';
import javaimg from "../assets/Images/Java.png"
import Profileimg from "../assets/Images/Profile.png"
import date from "../assets/Icons/Date.vue"
import time from "../assets/Icons/Time.vue"
import view from "../assets/Icons/Views.vue"
import number from "../assets/Icons/Number.vue"
import email from "../assets/Icons/Email.vue"
import save from "../assets/Icons/Save.vue"
import close from "../assets/Icons/Close.vue"

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


    let instance = { Statementinfo,  };

    return () => {
        return instance;
    };
})();