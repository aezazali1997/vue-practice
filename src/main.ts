import { createApp } from "vue";
import App from "./App.vue";
import { key, store } from "@/store/index";
import router from "./router";

createApp(App).use(store, key).use(router).mount("#app");
