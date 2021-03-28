import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { authStore, authStoreKey } from "./store";
import PrimeVue from "primevue/config";

// MEMO: if I use Vuex I need to update here
createApp(App)
  .use(router)
  .use(PrimeVue)
  .provide(authStoreKey, authStore())
  .mount("#app");
