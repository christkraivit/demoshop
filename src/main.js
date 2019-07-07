import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./mixins";

Vue.config.productionTip = false;

//Progressbar
import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '3px'
})


// String Tpy
Vue.prototype.$line = "@christvit";
Vue.prototype.$phone = "088-553-0057";


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
