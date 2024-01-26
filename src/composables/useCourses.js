import java from '../image/java.png'
import python from '../image/python.png'
import fotograp from '../image/fotograp.png'
import uiUx from '../image/uiUx.png'
import {ref} from "vue";

export default function useCourses() {
    return ref([
        {
            price: '300 ₾',
            title: 'ჯავას ახალი კურსი',
            image: java,
            isFavourite: false
        },
        {
            price: '300 ₾',
            title: 'ჯავას ახალი კურსი',
            image: python,
            isFavourite: false
        },
        {
            price: '300 ₾',
            title: 'ჯავას ახალი კურსი',
            image: fotograp,
            isFavourite: false
        },
        {
            price: '300 ₾',
            title: 'ჯავას ახალი კურსი',
            image: uiUx,
            isFavourite: false
        },
        {
            price: '300 ₾',
            title: 'ჯავას ახალი კურსი',
            image: uiUx,
            isFavourite: false
        },
        {
            price: '300 ₾',
            title: 'ჯავას ახალი კურსი',
            image: uiUx,
            isFavourite: false
        }
    ])
}