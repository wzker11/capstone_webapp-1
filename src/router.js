import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
// import first-session from "./views/components/Hero.vue";
// import subsequent-session from "./views/components/Subsequent.vue";
import Sub_show from "./views/Sub_show.vue";
import Summary from "./views/components/Summary.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
  {
    path: "/",
    redirect: {
      name: "login"
    }
  },
  {
    path: "/",
    name: "components",
    components: {
      header: AppHeader,
      default: Components,
      footer: AppFooter
    }
  },
  {
    path: "/landing",
    name: "landing",
    components: {
      header: AppHeader,
      default: Landing,
      footer: AppFooter
    }
  },
  {
    path: "/register",
    name: "register",
    components: {
      header: AppHeader,
      default: Register,
      footer: AppFooter
    }
  },
  {
    path: "/profile",
    name: "profile",
    components: {
      header: AppHeader,
      default: Profile,
      footer: AppFooter
    }
  },
  {
    path: "/form",
    name: "form",
    components: {
      header: AppHeader,
      default: Components
    }
  },
  {
    path: "/first-session",
    name: "first-session",
    components: {
      header: AppHeader,
      default: Components,
      footer: AppFooter
    }
  },
  {
    path: "/subsequent-session",
    name: "subsequent-session",
    components: {
      header: AppHeader,
      default: Sub_show,
      footer: AppFooter
    }
  },
  {
    path: "/summary",
    name: "summary",
    components: {
      header: AppHeader,
      default: Summary,
      footer: AppFooter
    }
  },
  {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
