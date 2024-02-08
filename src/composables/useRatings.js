import {ref} from "vue";

const useRatings = () => {
    const ratings = ref(Array(5).fill({
        user_id: 0,
        image: '/src/assets/icons/leaderboard/user-icon.svg',
        firstName: 'გიორგი',
        lastName: 'გიორგაძე',
        profession: 'ჯავა დეველოპერი',
        phoneNumber: '551-11-12-22',
        rating: '4.9'
    }))

    return {ratings}
}

export default useRatings