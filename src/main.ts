import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from 'vue3-cookies'

const app: any = createApp(App)
app.use(store)
app.use(router)
app.use(VueCookies)
app.use(VueCookies, {
    expireTimes: "30d",
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None"
})
app.mount('#app')
