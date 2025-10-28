import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/main.css'
import './assets/css/style.css'
import './assets/css/main.media.css'
import './assets/css/swiper.css'
import './assets/css/cleaned_styles.css'
import './assets/css/DPlayer.css'



const app = createApp(App)
app.use(router)
app.mount('#app')
