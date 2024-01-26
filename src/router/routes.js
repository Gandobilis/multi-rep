import AuthLayout from "../layouts/AuthLayout.vue"
import MainLayout from "../layouts/MainLayout.vue"

const routes = [
    {
        path: '/auth',
        component: AuthLayout,
        children: [
            {
                path: '/login',
                name: 'Login',
                component: () => import('../views/auth/login/LoginView.vue')
            },
            {
                path: '/registration-step-one',
                name: 'RegistrationStepOne',
                component: () => import('../views/auth/register/RegistrationStepOneView.vue')
            },
            {
                path: '/registration-step-two',
                name: 'RegistrationStepTwo',
                component: () => import('../views/auth/register/RegistrationStepTwoView.vue')
            },
            {
                path: '/registration-step-three',
                name: 'RegistrationStepThree',
                component: () => import('../views/auth/register/RegistrationStepThreeView.vue')
            },
            {
                path: '/registration-step-four',
                name: 'RegistrationStepFour',
                component: () => import('../views/auth/register/RegistrationStepFourView.vue')
            },
            {
                path: '/recover-password-step-one',
                name: 'RecoverPasswordStepOne',
                component: () => import('../views/auth/recover-password/RecoverPasswordStepOneView.vue')
            },
            {
                path: '/recover-password-step-two',
                name: 'RecoverPasswordStepTwo',
                component: () => import('../views/auth/recover-password/RecoverPasswordStepTwoView.vue')
            },
            {
                path: '/recover-password-step-three',
                name: 'RecoverPasswordStepThree',
                component: () => import('../views/auth/recover-password/RecoverPasswordStepThreeView.vue')
            }
        ]
    },
    {
        path: '/',
        component: MainLayout,
        children: []
    }
]

export default routes