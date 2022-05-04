import { createApp } from 'vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import store from './store';
import router from './router';
import App from './App.vue'

createApp(App)
.use(router)
.use(store)
.mount('#app')
