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
            }
        ],
    },
    {
        path: '/',
        component: () => import('@/layouts/MainLayout.vue'),
        children: [],
    },
];

