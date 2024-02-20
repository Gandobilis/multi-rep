import {createApp} from 'vue';
import './assets/main.css';
import App from './App.vue';
import router from './router';
import {createPinia} from 'pinia';
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

createApp(App)
    .use(router)
    .use(createPinia())
    .use(VueAwesomePaginate)
    .mount('#app');
