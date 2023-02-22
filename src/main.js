import { createApp } from 'vue'
import App from './App.vue'
import Router from './Utils/router'
import Store from './Utils/store'
import './Assets/sass/_style.scss'

createApp(App)
    .use(Router)
    .use(Store)
    .mount('#app')
