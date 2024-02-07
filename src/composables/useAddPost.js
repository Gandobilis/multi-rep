import {ref} from 'vue'

const useAddPost = () => {
    const show = ref(true) // ნაგულისხმევად false უნდა დაყენდეს

    const data = ref({
        title: '',
        description: '',
        price: '',
        price_unit: 'თვე',
        time: '',
        time_unit: 'თვე',
        date: '',
        date_unit: 'თვე',
        is_online: true,
        city: '',
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

    return {show, data, dropdowns, options, toggle, close}
}

export default useAddPost