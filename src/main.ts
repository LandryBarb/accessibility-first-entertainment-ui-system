import { createApp } from 'vue'
import './styles/main.scss'
import App from './App.vue'
import { router } from "./router";



const app = createApp(App);

app.use(router); // 🔴 THIS WAS MISSING
app.mount("#app");
