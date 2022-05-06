import { createApp } from 'vue'
import App from './App.vue'
// import store from '../store/state-counter.js'
import store from '../store'

createApp(App).use(store).mount('#app')
