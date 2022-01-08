import { createApp } from 'vue'
import router from '@/router/main.js'

import App from './App.vue'
import '@/main.css'




createApp(App).use(router).mount('#app')
