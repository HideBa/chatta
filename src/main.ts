import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// MEMO: if I use Vuex I need to update here
createApp(App).use(router).mount("#app");
