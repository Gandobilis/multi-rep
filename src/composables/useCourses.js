import java from '../image/java.png'
import python from '../image/python.png'
import fotograp from '../image/fotograp.png'
import uiUx from '../image/uiUx.png'
import {ref} from "vue";

function getRandomRating() {
    return Math.floor(Math.random() * 5) + 1;
}

function getRandomDate() {
    const today = new Date();
    const lastYear = today.getFullYear() - 1;
    const randomMonth = Math.floor(Math.random() * 12);
    const randomDay = Math.floor(Math.random() * 28) + 1;
    return new Date(lastYear, randomMonth, randomDay);
}

export default function useCourses() {
    const chosenAttributeIndex = ref(0);

    const courses = ref([
        {
            price: 300,
            title: 'ჯავას ახალი კურსი',
            image: java,
            isFavourite: false,
            rating: getRandomRating(),
            publishingDate: getRandomDate()
        },
        {
            price: 400,
            title: 'ჯავას ახალი კურსი',
            image: python,
            isFavourite: false,
            rating: getRandomRating(),
            publishingDate: getRandomDate()
        },
        {
            price: 600,
            title: 'ჯავას ახალი კურსი',
            image: fotograp,
            isFavourite: false,
            rating: getRandomRating(),
            publishingDate: getRandomDate()
        },
        {
            price: 500,
            title: 'ჯავას ახალი კურსი',
            image: uiUx,
            isFavourite: false,
            rating: getRandomRating(),
            publishingDate: getRandomDate()
        },
        {
            price: 1000,
            title: 'ჯავას ახალი კურსი',
            image: uiUx,
            isFavourite: false,
            rating: getRandomRating(),
            publishingDate: getRandomDate()
        },
        {
            price: 50,
            title: 'ჯავას ახალი კურსი',
            image: uiUx,
            isFavourite: false,
            rating: getRandomRating(),
            publishingDate: getRandomDate()
        }
    ]);

    return {courses, chosenAttributeIndex}
}