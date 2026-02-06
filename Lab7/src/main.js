import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createApp(App).use(router).mount("#app");
