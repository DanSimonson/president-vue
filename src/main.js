// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueResource from "vue-resource";
import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader
import Vuetify from "vuetify";

Vue.use(Vuetify);
Vue.use(VueResource);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
