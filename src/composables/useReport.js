import {ref} from "vue";
import axios from "/src/interceptors/axios/index";

const useReport = () => {


    const sendReport = (name,surname,email,issue) =>{
        axios.post('/report/send_report', {
            "name": name,
            "surname": surname,
            "issue": issue,
            "email": email,
            "listing_id": "ზოგადი"
        })
    }

    const reportTypes = ref([
        [
            'შევიწროვება',
            'არასწორი ინფორმაცია',
            'ყალბი ანგარიში'
        ],
        [
            'თვითზიანი',
            'თაღლითობა',
            'სპამი',
            'ძალადობა'
        ],
        [
            'უკანონო მომსახურება',
            'ცილისწამება',
            'ბავშვის ექსპლუატაცია'
        ]
    ])

    const _hoverIndex = ref('')
    const _clickedIndex = ref('')

    const hoveredIndex = (i, j) => {
        _hoverIndex.value = i.toString() + j.toString()
    }

    const clickedIndex = (i, j) => {
        const newIndex = i.toString() + j.toString()
        _clickedIndex.value = newIndex === _clickedIndex.value ? '' : newIndex
    }

    const clearIndex = () => _hoverIndex.value = ''

    const report = async () => {
        if (_clickedIndex.value) {
            const indices = _clickedIndex.value.split('')
            const reason = reportTypes.value[indices[0]][indices[1]]
            console.log(reason)
        }
    }



    return {sendReport, reportTypes, _hoverIndex, hoveredIndex, _clickedIndex, clickedIndex, clearIndex, report}
}

export default useReport