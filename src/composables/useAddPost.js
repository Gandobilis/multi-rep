import {ref} from 'vue'
import axios from "../interceptors/axios/index.js";
import cookies from "vue-cookies";
import useListings from "./useListings.js";


const useAddPost = () => {
    const {filterCities, filterSubjects, fetchCities, fetchSubjects} = useListings();
    const show = ref(true) // ნაგულისხმევად false უნდა დაყენდეს

    const data = ref({
        title: '',
        description: '',
        subject: '',
        // price_unit: 'თვე',
        // time: '',
        // time_unit: 'თვე',
        // date: '',
        // date_unit: 'თვე',
        // is_online: true,
        price: '',
        city: '',
        distinct: '',
        is_teacher: true
    })

    const options = ref([
        ['თვე', 'ერთჯერადი'],
        ['დღე', 'კვირა', 'თვე', 'წელი'],
        ['დღე', 'კვირა', 'თვე', 'წელი'],
    ])
    const dropdowns = ref([false, false, false])

    const toggle = (index) => {
        dropdowns.value = dropdowns.value.map((isOpen, i) =>
            i === index ? !isOpen : false
        )
    }

    const close = (index) => {
        dropdowns.value[index] = false
    }

    const add_post = async () => {
        console.log(data.value);

        await fetchCities();
        data.value.city = filterCities.value.find(city => city.name === data.value.city).id
        await fetchSubjects();
        data.value.subject = filterSubjects.value.find(subject => subject.name === data.value.subject).id

        console.log(data.value);
        await axios.post('/listings/ManageListing', data.value, {
            headers: {
                Authorization: `Bearer ${cookies.get('access_token')}`,
            }
        });
    }

    return {show, data, dropdowns, options, toggle, close, add_post}
}

export default useAddPost