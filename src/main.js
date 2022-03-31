import { createApp } from "vue";
// Pinia replaces Vuex
import { createPinia } from "pinia";
import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());

app.mount("#app");
