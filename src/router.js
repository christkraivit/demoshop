import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/downloads",
      name: "download",
      component: () => import(/* webpackChunkName: "download" */ "./views/Downloads.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import(/* webpackChunkName: "Contact" */ "./views/Contact.vue")
    }
  ]
});
