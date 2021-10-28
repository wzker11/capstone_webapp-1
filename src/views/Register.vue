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
        <div class="vue-tempalte">
            <div class="container pt-lg-md">
            <div class="row justify-content-center">
            <div class="col-lg-5">
            <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
            <form @submit.prevent="userRegistration">
                <h3>Sign Up</h3>

                <div class="form-group">
                    <label>Email</label>
                    <!-- <input type="email" class="form-control form-control-lg" v-model="user.email" /> -->
                    <base-input alternative class="mb-3"
                                            placeholder="Email"
                                            type="email"
                                            addon-left-icon="ni ni-email-83"
                                            v-model="user.email"></base-input>
                </div>

                <div class="form-group">
                    <label>Password</label>
                    <!-- <input type="password" class="form-control form-control-lg" v-model="user.password" /> -->
                    <base-input alternative
                                            type="password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open"
                                            v-model="user.password">
                                </base-input>
                </div>

                <button type="submit" class="btn btn-dark btn-lg btn-block">
                Sign Up
                </button>

                <p class="forgot-password text-right">
                    Already registered 
                    <router-link :to="{name: 'login'}">sign in?</router-link>
                </p>
            </form>
            </card>
            </div>
            </div>
            </div>
        </div>
        <!-- <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <form role="form" @submit.prevent="userRegistration">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            type="email"
                                            addon-left-icon="ni ni-email-83"
                                            v-model="user.email">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open"
                                            v-model="user.password">
                                </base-input>
                                <div class="text-center">
                                    <base-button type="submit" class="my-4">Create account</base-button>
                                </div>
                                <br>
                                <p class="text-center forgot-password">
                                    Already registered 
                                    <router-link :to="{name: 'login'}">sign in?</router-link>
                                </p>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div> -->
    </section>
</template>
<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    userRegistration() {
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.user.email, this.user.password)
      .then((res) => {
        res.user
          .updateProfile({
            displayName: this.user.name
          })
          .then(() => {
            this.$router.push('login')
          });
      })
      .catch((error) => {
         alert(error.message);
      });
    }
  }
};
</script>
<style>
</style>
