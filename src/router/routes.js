export default [
    {
        path: '/auth',
        component: () => import('@/layouts/AuthLayout.vue'),
        children: [
            {
                path: 'login',
                name: 'Login',
                component: () => import('@/views/auth/Login.vue'),
            },
            {
                path: 'register',
                name: 'Register',
                component: () => import('@/views/auth/Register.vue'),
            },
            {
                path: 'recover',
                name: 'Recover',
                component: () => import('@/views/auth/Recover.vue')
            },
        ],
    },
    {
        path: '/',
        component: () => import('@/layouts/MainLayout.vue'),
        children: [
            {
                path: 'statements',
                name: 'Statement',
                component: () => import('@/views/Statements.vue')
            },
            {
                path: 'leaderboard',
                name: 'Leaderboard',
                component: () => import('@/views/Leaderboard.vue')
            },
        ],
    },
];

