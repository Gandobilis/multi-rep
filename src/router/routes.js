export default [
    {
        path: '/auth',
        component: () => import('@/layouts/AuthLayout.vue'),
        children: [
            {
                path: 'login',
                name: 'Login',
                component: () => import('@/views/auth/login/LoginView.vue'),
            },
            {
                path: 'registration-step-one',
                name: 'RegistrationStepOne',
                component: () => import('@/views/auth/register/RegistrationStepOneView.vue'),
            },
            {
                path: 'registration-step-two',
                name: 'RegistrationStepTwo',
                component: () => import('@/views/auth/register/RegistrationStepTwoView.vue'),
            },
            {
                path: 'registration-step-three',
                name: 'RegistrationStepThree',
                component: () => import('@/views/auth/register/RegistrationStepThreeView.vue'),
            },
            {
                path: 'registration-step-four',
                name: 'RegistrationStepFour',
                component: () => import('@/views/auth/register/RegistrationStepFourView.vue'),
            },
            {
                path: 'recover-password-step-one',
                name: 'RecoverPasswordStepOne',
                component: () => import('@/views/auth/recover-password/RecoverPasswordStepOneView.vue'),
            },
            {
                path: 'recover-password-step-two',
                name: 'RecoverPasswordStepTwo',
                component: () => import('@/views/auth/recover-password/RecoverPasswordStepTwoView.vue'),
            },
            {
                path: 'recover-password-step-three',
                name: 'RecoverPasswordStepThree',
                component: () => import('@/views/auth/recover-password/RecoverPasswordStepThreeView.vue'),
            },
        ],
    },
    {
        path: '/',
        component: () => import('@/layouts/MainLayout.vue'),
        children: [
            {
                path: 'statement',
                name: 'Statement',
                component: () => import('@/views/pages/StatementPage.vue'),
            },
            {
                path: '/courses',
                name: 'CoursesView',
                component: () => import('../views/CoursesView.vue')
            },
            {
                path: '/report',
                name: '/Report',
                component: () => import('../views/auth/Report.vue')
            },
            {
                path: '/addpost',
                name: '/AddPost',
                component: () => import('../views/auth/AddPost.vue')
            },
            {
                path: '/leaderboard',
                name: '/Leaderboard',
                component: () => import('@/views/LiderBoard.vue')
            }
        ],
    },
];

