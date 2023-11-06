import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import App2 from "./App2.vue";
import App3 from "./App3.vue";

createApp(App).mount("#app");
createApp(App3).mount("#app3");

const app2 = createApp(App2);

app2.mount("#app2");
