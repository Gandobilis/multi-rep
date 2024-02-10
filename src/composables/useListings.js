import {ref} from "vue";

export default function useCourses() {
    const courses = ref(Array(11).fill({
        icon: 'https://i.guim.co.uk/img/static/sys-images/Media/Pix/pictures/2013/1/14/1358150745448/Java-logo-008.jpg?width=465&dpr=1&s=none',
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