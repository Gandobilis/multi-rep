import {ref} from "vue";
import UserIcon from '/src/assets/icons/user/UserIcon.vue';
import ChangePasswordIcon from '/src/assets/icons/user/ChangePassword.vue';
import EditUserIcon from '/src/assets/icons/user/EditUser.vue';
import ExitIcon from '/src/assets/icons/user/Logout.vue';
import MyListingsIcon from '/src/assets/icons/user/MyListings.vue';
import MyPageIcon from '/src/assets/icons/user/MyPage.vue';
import NotificationIcon from '/src/assets/icons/user/Notification.vue';
import SavedListingsIcon from '/src/assets/icons/user/SavedListings.vue';

const useUser = () => {
    const data = ref({
        image: UserIcon,
        username: 'გიორგი გიორგაძე',
        id: '123456',
        email: 'baratashvilivaxo@gmail.com',
        phone: '(+995) 599-111-222',
        profession: 'ჯავა დეველოპერი, მენტორი'
    });

    const links = ref([
        {
            icon: MyPageIcon,
            title: 'ჩემი გვერდი',
            path: '/user',
        },
        {
            icon: SavedListingsIcon,
            title: 'შენახული განცხადებები',
            path: '/user/saved-listings',
        },
        {
            icon: NotificationIcon,
            title: 'შეტყობინებები',
            path: '/user/notifications',
        },
        {
            icon: MyListingsIcon,
            title: 'ჩემი განცხადებები',
            path: '/user/my-listings',
        },
        {
            icon: EditUserIcon,
            title: 'ანგარიშის რედაქტირება',
            path: '/user/edit-account',
        },
        {
            icon: ChangePasswordIcon,
            title: 'პაროლის შეცვლა',
            path: '/user/change-password',
        },
        {
            icon: ExitIcon,
            title: 'გასვლა',
            path: '',
        },
    ]);

    return {data, links};
};

export default useUser;
