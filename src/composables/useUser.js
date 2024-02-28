import {computed, markRaw, ref} from "vue";
import UserIcon from '/src/assets/icons/user/UserIcon.vue';
import ChangePasswordIcon from '/src/assets/icons/user/ChangePassword.vue';
import EditUserIcon from '/src/assets/icons/user/EditUser.vue';
import MyListingsIcon from '/src/assets/icons/user/MyListings.vue';
import MyPageIcon from '/src/assets/icons/user/MyPage.vue';
import NotificationIcon from '/src/assets/icons/user/Notification.vue';
import SavedListingsIcon from '/src/assets/icons/user/SavedListings.vue';
import cookies from "vue-cookies";
import axios from "../interceptors/axios/index.js";

const useUser = () => {
    const accessToken = cookies.get('access_token');
    const myUserData = ref(null)

    const data = ref({
        image: markRaw(UserIcon),
        username: 'გიორგი გიორგაძე',
        id: '123456',
        email: 'baratashvilivaxo@gmail.com',
        phone: '(+995) 599-111-222',
        profession: 'ჯავა დეველოპერი, მენტორი'
    });

    const myPage = ref({
        image: '/src/assets/images/user.svg',
        username: 'გიორგი გიორგაძე',
        bio: 'გამარჯობა, მე ვარ გიორგი გიორგაძე, ჯავა სენიორ დეველოპერი და მიხარია, რომ აქ ვარ',
        cv: '/src/assets/images/cv.svg',
        rating: 4.9
    })

    const savedListings = ref(Array(5).fill({
        image: '/src/assets/images/listing.svg',
        title: 'ჯავას ახალი კურსი',
        rating: 4.9,
        price: 300,
        time_unit: 'თვიურად',
        publish_date: '7 იან. 16:31',
        author: 'გიორგი გიორგაძე',
        phone: '(+995) 599-111-222',
    }));

    const myListings = ref([
        {
            image: '/src/assets/images/listing.svg',
            title: 'ჯავას ახალი კურსი',
            rating: 4.9,
            price: 300,
            time_unit: 'თვიურად',
            publish_date: '7 იან. 16:31',
            active: true,
            author: 'გიორგი გიორგაძე',
            phone: '(+995) 599-111-222',
        },
        {
            image: '/src/assets/images/listing.svg',
            title: 'ჯავას ახალი კურსი',
            rating: 4.9,
            price: 300,
            time_unit: 'თვიურად',
            publish_date: '7 იან. 16:31',
            active: false,
            author: 'გიორგი გიორგაძე',
            phone: '(+995) 599-111-222',
        },
        {
            image: '/src/assets/images/listing.svg',
            title: 'ჯავას ახალი კურსი',
            rating: 4.9,
            price: 300,
            time_unit: 'თვიურად',
            publish_date: '7 იან. 16:31',
            active: true,
            author: 'გიორგი გიორგაძე',
            phone: '(+995) 599-111-222',
        },
        {
            image: '/src/assets/images/listing.svg',
            title: 'ჯავას ახალი კურსი',
            rating: 4.9,
            price: 300,
            time_unit: 'თვიურად',
            publish_date: '7 იან. 16:31',
            active: false,
            author: 'გიორგი გიორგაძე',
            phone: '(+995) 599-111-222',
        }
    ]);

    const listingFilters = ref([
        '', 'ყველა', 'აქტიური', 'ვადაგასული', ''
    ]);

    let listingFilterType = ref('ყველა');

    const filteredListings = computed(() => {
        if (listingFilterType.value === 'აქტიური') {
            return myListings.value.filter(item => item.active);
        } else if (listingFilterType.value === 'ვადაგასული') {
            return myListings.value.filter(item => !item.active);
        } else {
            return myListings.value;
        }
    });

    const filterListings = (type) => {
        listingFilterType.value = type;
    }

    const editAccount = ref({
        first_name: 'გიორგი',
        last_name: 'გიორგაძე',
        phone: '599-111-222',
        city: 'თბილისი',
        profession: 'ჯავა დეველოპერი'
    });

    const links = ref([
        {
            icon: markRaw(MyPageIcon),
            title: 'ჩემი გვერდი',
            path: '/user',
        },
        {
            icon: markRaw(SavedListingsIcon),
            title: 'შენახული განცხადებები',
            path: '/user/saved-listings',
        },
        // {
        //     icon: markRaw(NotificationIcon),
        //     title: 'შეტყობინებები',
        //     path: '/user/notifications',
        // },
        {
            icon: markRaw(MyListingsIcon),
            title: 'ჩემი განცხადებები',
            path: '/user/my-listings',
        },
        {
            icon: markRaw(EditUserIcon),
            title: 'ანგარიშის რედაქტირება',
            path: '/user/edit-account',
        },
        {
            icon: markRaw(ChangePasswordIcon),
            title: 'პაროლის შეცვლა',
            path: '/user/change-password',
        }
    ]);



    const getUserProfileInfo = async () =>{
        try {
            await axios.get('users/myInfo', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }).then(res => {
                myUserData.value = res.data.data
            })
        } catch (error) {
            console.error(error);
        }

    }


    const isAuthenticated = ref();

    const checkIfAuthenticated = async () => {
        try {
            await axios.get('users/check_token_validity', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            isAuthenticated.value = true

        } catch (error) {
            console.error(error);
            isAuthenticated.value = false

        }
    };

    return {
        isAuthenticated,
        checkIfAuthenticated,
        data,
        myPage,
        savedListings,
        listingFilters,
        listingFilterType,
        filteredListings,
        filterListings,
        editAccount,
        links,
        getUserProfileInfo,
        myUserData
    };
};

export default useUser;
