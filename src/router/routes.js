export default [
    {
        path: '/auth',
        component: () => import('/src/layouts/AuthLayout.vue'),
        children: [
            {
                path: 'login',
                component: () => import('/src/views/auth/Login.vue')
            },
            {
                path: 'register',
                component: () => import('/src/views/auth/Register.vue')
            },
            {
                path: 'recover',
                component: () => import('/src/views/auth/Recover.vue')
            }
        ]
    },
    {
        path: '/',
        component: () => import('/src/layouts/MainLayout.vue'),
        children: [
            {
                path: '',
                component: () => import('/src/views/main/Listings.vue')
            },
            {
                path: 'leaderboard',
                component: () => import('/src/views/main/Leaderboard.vue')
            },
            {
                path: 'user/listings/:user_id',
                component: () => import('/src/views/main/UserListings.vue')
            },
            {
                path: 'user/listings/:user_id/:listing_id',
                component: () => import('../views/main/UserListing.vue')
            },
            {
                path: 'searchresults',
                component: () => import('../views/main/SearchResultsPage.vue')
            }
        ],
    },
    {
        path: '/user',
        component: () => import('/src/layouts/UserLayout.vue'),
        children: [
            {
                path: '',
                component: () => import('/src/views/user/MyPage.vue')
            },
            {
                path: 'saved-listings',
                component: () => import('/src/views/user/SavedListings.vue')
            },
            {
                path: 'notifications',
                component: () => import('/src/views/user/Notifications.vue')
            },
            {
                path: 'my-listings',
                component: () => import('/src/views/user/MyListings.vue')
            },
            {
                path: 'edit-account',
                component: () => import('/src/views/user/EditAccount.vue')
            },
            {
                path: 'change-password',
                component: () => import('/src/views/user/ChangePassword.vue')
            }
        ]
    }
]

