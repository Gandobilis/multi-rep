import {ref} from "vue";
import icon from '@/assets/icons/courses/statement-icon.svg';

export default function useCourses() {
    const courses = ref(Array(33).fill({
        icon,
        title: 'ჯავას ახალი კურსი',
        publishDate: 'დღეს 19:57',
        price: '300 ₾',
        payType: 'თვიურად',
        duration: '6 თვე',
        rating: 4.9,
        author: 'გიორგი გიორგაძე',
        phoneNumber: '(+995) 599-111-222'
    }));

    return {courses}
}