import AuthLayout from "../layouts/AuthLayout.vue"
import MainLayout from "../layouts/MainLayout.vue"

const routes = [
    {
        path: '/auth',
        component: AuthLayout,
        children: [
            {
                path: '/',
                name: 'Login',
                component: () => import('../views/auth/LoginView.vue')
            },
            {
                path: '/registration-step-one',
                name: 'RegistrationStepOne',
                component: () => import('../views/auth/RegistrationStepOneView.vue')
            },
            {
                path: '/registration-step-two',
                name: 'RegistrationStepTwo',
                component: () => import('../views/auth/RegistrationStepTwoView.vue')
            },
            {
                path: '/registration-step-three',
                name: 'RegistrationStepThree',
                component: () => import('../views/auth/RegistrationStepThreeView.vue')
            },
            {
                path: '/registration-step-four',
                name: 'RegistrationStepFour',
                component: () => import('../views/auth/RegistrationStepFourView.vue')
            }
        ]
    },
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path:'/report',
                name:'/Report',
                component: () => import('../layouts/Report.vue')
            }
        ]
    },
    
]

export default routes