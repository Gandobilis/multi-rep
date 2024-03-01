import {ref} from "vue";


export default (function forWarning () {

    const isToggled = ref(false)

    const scrollToTop = () => {
        window.scrollTo({
            top:'300',
            behavior: 'smooth'
        });
    }
    const toggle = (value) =>{
        scrollToTop()
        isToggled.value = value
    }

    let instance = {toggle, isToggled }

    return () => {
        return instance
    }
})()