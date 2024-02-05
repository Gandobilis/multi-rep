import {ref} from "vue";

const usePayment = () => {
    const show = ref(true); // ნაგულისხმევად false უნდა დაყენდეს
    const data = ref({
        price: 15,
        card: {
            number: '',
            date: '',
            cvc_cvv: '',
        },
    });

    return {show, data};
};

export default usePayment;