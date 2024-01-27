import { ref } from "vue";

export function useLiderBoard() {

    const userInformation = ref([
        { type: 'image', path: 'src/assets/images/profile.png' },
        'გიორგი',
        'გიორგაძე',
        'ჯავა დეველოპერი',
        '551-11-12-22',
        { type: 'image', path: 'src/assets/images/star.png' },
        '4.9/5.0'
    ]);

    const headerItems = ref([
        { text: 'სახელი', margin: '70px' },
        { text: 'გვარი', margin: '122px' },
        { text: 'პროფესია', margin: '88px' },
        { text: 'ტელ. ნომერი', margin: '40px' },
        { text: 'შეფასება' },
      ]);

      return { headerItems, userInformation };
}