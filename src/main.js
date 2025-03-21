import Vue from "vue";
import router from "@/router";
import App from "./App";
import Antd from "ant-design-vue";

import "ant-design-vue/dist/antd.less";
import "@/assets/css/variable.scss";
import "@/assets/css/index.scss";

Vue.config.productionTip = false;
Vue.use(Antd);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
