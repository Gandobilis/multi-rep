import {ref} from "vue";

const useReport = () => {
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

    return {reportTypes, _hoverIndex, hoveredIndex, _clickedIndex, clickedIndex, clearIndex, report}
}

export default useReport