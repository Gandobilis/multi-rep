import { ref } from "vue";
import { markRaw } from 'vue';
import javaimg from "../assets/Images/Java.png"
import Profileimg from "../assets/Images/Profile.png"
import date from "../assets/Icons/statement/Date.vue"
import time from "../assets/Icons/statement/Time.vue"
import view from "../assets/Icons/statement/Views.vue"
import number from "../assets/Icons/statement/Number.vue"
import email from "../assets/Icons/statement/Email.vue"
import vector from "../assets/icons/statement/Vector.vue"

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
                vectorsvg: markRaw(vector),
                title:"ჯავას ახალი კურსი",
                star:"4.9",
                description:"მოგესალმებით, მინდა გაცნობოთ, რომ 2024 წლის 25 აპრილს იწყება ჯავა პროგრამირების ახალი კურსი, რომელიც არის 6 თვიანი და ღირს თვეში 300 ლარი, რეგისტრაცია გაგრძელდება 2024 წლის 1 აპრილიდან 20 აპრილამდე. იჩქარეთ, ადგილების რაოდენობა შეზღუდულია",
                title2:"დისტანციურად",
                time:"დღეს 00:23",
                views:"128",
                money:"300 ",
                time2:"თვე",
                time3:"6 თვე",
                name:"გიორგი გიორგაძე",
                status:"ჯავა დეველოპერი",
                gancxadeba:"ყველა განცხადება(3)",
                number:"551-22-23-33",
                mail:"giorgigiorgadze@gmail.com",
            },
        },
        
    ]);


    let instance = { Statementinfo,  };

    return () => {
        return instance;
    };
})();