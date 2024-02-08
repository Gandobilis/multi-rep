import {ref} from "vue"

export default function useListings() {
    const courses = ref(Array(3).fill({
        id: 0,
        icon: '/src/assets/icons/courses/statement-icon.svg',
        title: 'ჯავას ახალი კურსი',
        publishDate: 'დღეს 19:57',
        price: '300 ₾',
        payType: 'თვიურად',
        duration: '6 თვე',
        rating: 4.9,
        author: 'გიორგი გიორგაძე',
        phoneNumber: '(+995) 599-111-222'
    }))

    const getListings = (user_id) => {
        const listings = courses.value.filter(course => course.id == user_id)
        return {
            username: 'გიორგი გიორგაძის',
            listings
        }
    }

    return {courses, getListings}
}