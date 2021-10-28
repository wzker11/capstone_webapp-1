<script src="https://cdn.jsdelivr.net/npm/vue"></script>

<template> 
  <section class="section section-shaped section-lg my-0">
    <div class="shape shape-style-1 bg-gradient-default">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <card type="secondary" shadow header-classes="bg-white pb-5" body-classes="px-lg-5 py-lg-5" class="border-0">
            <template>
              <form role="form" ref="form" @submit.prevent="userLogin">
                <h6 class="text-center">Log In With Your SCDF email</h6>
                <br>
                <base-input
                  alternative
                  class="mb-3"
                  placeholder="Email"
                  addon-left-icon="ni ni-email-83"
                  name="email"
                  v-model="user.email"
                >
                </base-input>
                <base-input
                  alternative
                  type="password"
                  placeholder="Password"
                  addon-left-icon="ni ni-lock-circle-open"
                  name="password"
                  v-model="user.password"
                >
                </base-input>
                <br>
                <div class="text-center" id="signin-button">
                  <!-- <router-link to='/form' :key="$route.form"> -->
                  <input
                    class="btn btn-success"
                    type="submit"
                    value="Sign In"
                  />
                </div>
                <br>
              <div class="row">
                <router-link :to="{name: 'register'}" style="width:200px">Register</router-link>
                <router-link :to="{name: 'forgetPassword'}">Forgot Password?</router-link>
              </div>
              </form>
            </template>
          </card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase";
require('firebase/auth')

Vue.use(VueRouter);

export default {
  name: "signin-button",
  data() {
    return {
      user: {   
        email: '',
        password: ''
      }
    };
  },
  methods: {
    // authenticate() {
    //   var email = this.$refs.form.email.value;
    //   var password = this.$refs.form.password.value;
    //   if (email != '1') {
    //       alert("Email not registered")
    //   } else if (password != '2') {
    //       alert("Incorrect password")
    //   }
    //   else {
    //       console.log("Login successful")
    //       //Change landing page
    //       this.$router.push('first-session')
    //   }
    // },
    userLogin() {
        firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
            this.$router.push('first-session')
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }
};
</script>
