import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./assets/global.scss";
import "./assets/app.scss";
import "./assets/page.scss";
createApp(App).use(router).mount("#app");
