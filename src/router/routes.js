import AuthLayout from "../layouts/AuthLayout.vue";
import MainLayout from "../layouts/MainLayout.vue";

const lazyLoad = (path) => () => import(`/src/views/${path}.vue`);

const routes = [
    {
        path: '/auth',
        component: AuthLayout,
        children: [
            {
                path: 'login',
                name: 'Login',
                component: lazyLoad('auth/login/LoginView')
            },
            {
                path: 'registration-step-one',
                name: 'RegistrationStepOne',
                component: lazyLoad('auth/register/RegistrationStepOneView')
            },
            {
                path: 'registration-step-two',
                name: 'RegistrationStepTwo',
                component: lazyLoad('auth/register/RegistrationStepTwoView')
            },
            {
                path: 'registration-step-three',
                name: 'RegistrationStepThree',
                component: lazyLoad('auth/register/RegistrationStepThreeView')
            },
            {
                path: 'registration-step-four',
                name: 'RegistrationStepFour',
                component: lazyLoad('auth/register/RegistrationStepFourView')
            },
            {
                path: 'recover-password-step-one',
                name: 'RecoverPasswordStepOne',
                component: lazyLoad('auth/recover-password/RecoverPasswordStepOneView')
            },
            {
                path: 'recover-password-step-two',
                name: 'RecoverPasswordStepTwo',
                component: lazyLoad('auth/recover-password/RecoverPasswordStepTwoView')
            },
            {
                path: 'recover-password-step-three',
                name: 'RecoverPasswordStepThree',
                component: lazyLoad('auth/recover-password/RecoverPasswordStepThreeView')
            }
        ]
    },
    {
        path: '/',
        component: MainLayout,
        children: []
    }
];

export default routes;
