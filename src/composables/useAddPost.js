
import axios from '../interceptors/axios'
import {ref} from "vue";
import cookies from "vue-cookies";
export default (function useHome () {

    const show = ref(true); // ნაგულისხმევად false უნდა დაყენდეს
    const selectedCityId = ref("default");
    const selectedDistrictId = ref("default");
    const selectedSubject = ref("default")
    const errorMessage = ref([])
    const successMessage = ref()
    const data = ref({
        title: null,
        description: null,
        price: null,
        photo: null,
        time_unit: 'საათში',
        currency: 'GEL'

    });


    const dropdowns = ref([false, false, false]);

    const toggle = (index) => {
        dropdowns.value = dropdowns.value.map((isOpen, i) =>
            i === index ? !isOpen : false
        );
    };

    const close = (index) => {
        dropdowns.value[index] = false;
    };

    const add_post = async () => {
        errorMessage.value = []
        try {
            const formData = new FormData();

            // Check if title is not null
            if (data.value.title !== null) {
                formData.append('title', data.value.title);
            } else {
                errorMessage.value.push("შეიყვანეთ სათაური");
            }


            if (data.value.description !== null) {
                formData.append('description', data.value.description);
            } else {
                errorMessage.value.push("შეიყვანეთ აღწერა");
            }

            // Check if subject is not null
            if (selectedSubject.value !== null) {
                formData.append('subject', selectedSubject.value);
            } else {
                errorMessage.value.push("მიუთითეთ საგანი");
            }

            // Check if price is not null and is a valid number
            if (data.value.price !== null && !isNaN(data.value.price)) {
                formData.append('price', data.value.price);
            } else {
                errorMessage.value.push("ფასი უნდა იყოს რიცხვი");
            }

            // Check if selectedCityId is not null and not the default value
            if (selectedCityId.value !== null && selectedCityId.value !== "default") {
                console.log(selectedCityId.value)

                formData.append('city', selectedCityId.value);
            } else {
                errorMessage.value.push("მიუთითეთ ქალაქი");
            }

            if(selectedDistrictId.value!=="default"){
                formData.append('district', selectedDistrictId.value);
            }


            // Check if photo is not null
            if (data.value.photo !== null) {
                formData.append('photo', data.value.photo);
            } else {
                errorMessage.value.push("ატვირთეთ კურსის შესაბამისი ფოტო");
            }
            formData.append('currency', data.value.currency);
            formData.append('time_unit', data.value.time_unit);



            // Check if there are no validation errors before making the POST request
            if (errorMessage.value.length === 0) {


                await axios.post('/listings/ManageListing', formData, {
                    headers: {
                        Authorization: `Bearer ${cookies.get('access_token')}`,
                        'Content-Type': 'multipart/form-data',
                    },
                }).then(res =>{
                    successMessage.value = res.data.success
                    console.log(formData)
                })

                // Reset form values after successful post
                data.value = {
                    title: null,
                    description: null,
                    price: null,
                    photo: null,
                };
            }
        } catch (error) {
            console.log(error.response.data.message)
            errorMessage.value.push(error.response.data.message)
        }
    };

    let instance = {selectedDistrictId,errorMessage,successMessage, selectedSubject, show, data, dropdowns, toggle, close, add_post ,selectedCityId }

    return () => {
        return instance
    }
})()