import { markRaw, ref} from "vue";
import ChangePasswordIcon from '/src/assets/icons/user/ChangePassword.vue';
import EditUserIcon from '/src/assets/icons/user/EditUser.vue';
import MyListingsIcon from '/src/assets/icons/user/MyListings.vue';
import MyPageIcon from '/src/assets/icons/user/MyPage.vue';
import SavedListingsIcon from '/src/assets/icons/user/SavedListings.vue';
import cookies from "vue-cookies";
import axios from "../interceptors/axios/index.js";

const useUser = () => {
    const accessToken = cookies.get('access_token');
    const myUserData = ref(null)


    let listingFilterType = ref('ყველა');


    const filterListings = (type) => {
        listingFilterType.value = type;
    }

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
                console.log(myUserData.value)
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
        listingFilterType,
        filterListings,
        links,
        getUserProfileInfo,
        myUserData
    };
};

export default useUser;
