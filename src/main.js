/*!

=========================================================
* Vue Argon Design System - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker';
// import firebase from 'firebase/app';

Vue.config.productionTip = false;
Vue.use(Argon);

// const firebaseConfig = {
//   apiKey: "AIzaSyBFB_5bV5Wbbw-7g_Ai6O5rdSGe_kN0py4",
//   authDomain: "scdf-e12e8.firebaseapp.com",
//   databaseURL: "https://scdf-e12e8-default-rtdb.firebaseio.com",
//   projectId: "scdf-e12e8",
//   storageBucket: "scdf-e12e8.appspot.com",
//   messagingSenderId: "220004955204",
//   appId: "1:220004955204:web:2ebf6d6cc2fee5e8bc3811"
// };

// firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");