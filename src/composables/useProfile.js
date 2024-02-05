import {ref} from "vue";
import UserIcon from '/src/assets/icons/profile/user-icon.svg';
import ChangePasswordIcon from '/src/assets/icons/profile/change-password.svg';
import EditUserIcon from '/src/assets/icons/profile/edit-user.svg';
import ExitIcon from '/src/assets/icons/profile/exit.svg';
import MyListingsIcon from '/src/assets/icons/profile/my-listings.svg';
import MyPageIcon from '/src/assets/icons/profile/my-page.svg';
import NotificationIcon from '/src/assets/icons/profile/notification.svg';
import SavedListingsIcon from '/src/assets/icons/profile/saved-listings.svg';

const useProfile = () => {
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
            path: '',
        },
        {
            icon: SavedListingsIcon,
            title: 'შენახული განცხადებები',
            path: '',
        },
        {
            icon: NotificationIcon,
            title: 'შეტყობინებები',
            path: '',
        },
        {
            icon: MyListingsIcon,
            title: 'ჩემი განცხადებები',
            path: '',
        },
        {
            icon: EditUserIcon,
            title: 'ანგარიშის რედაქტირება',
            path: '',
        },
        {
            icon: ChangePasswordIcon,
            title: 'პაროლის შეცვლა',
            path: '',
        },
        {
            icon: ExitIcon,
            title: 'გასვლა',
            path: '',
        },
    ]);

    return {data, links};
};

export default useProfile;
