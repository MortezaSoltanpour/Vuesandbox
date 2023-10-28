import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import App2 from "./App2.vue";

createApp(App).mount("#app");

const app2 = createApp(App2);

app2.mount("#app2");
