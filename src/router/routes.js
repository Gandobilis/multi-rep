export default [
    {
        path: '/auth',
        component: () => import('/src/layouts/AuthLayout.vue'),
        children: [
            {
                path: 'login',
                name: 'Login',
                component: () => import('/src/views/auth/Login.vue'),
            },
            {
                path: 'register',
                name: 'Register',
                component: () => import('/src/views/auth/Register.vue'),
            },
            {
                path: 'recover',
                name: 'Recover',
                component: () => import('/src/views/auth/Recover.vue')
            },
        ],
    },
    {
        path: '/',
        component: () => import('/src/layouts/MainLayout.vue'),
        children: [
            {
                path: '',
                name: 'Courses',
                component: () => import('/src/views/main/Courses.vue')
            },
            {
                path: 'leaderboard',
                name: 'Leaderboard',
                component: () => import('/src/views/main/Leaderboard.vue')
            },
            {
                path: 'statement',
                name: 'Statement',
                component: () => import('../views/main/statementPage.vue'),
            },
            {
                path: 'searchresults',
                name: 'SearchResults',
                component: () => import('../views/main/SearchResultsPage.vue'),
            },
        ],
    },
];

