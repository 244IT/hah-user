import Vue from "vue";
import router from "@/router";
import App from "./App";
import { registerCpns } from "@/global";

import "@/assets/css/index.scss";
registerCpns(Vue);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
