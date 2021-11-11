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
                        <card type="secondary" shadow header-classes="bg-white pb-5" body-classes="px-lg-5 py-lg-5" class="border-0">
                            <form @submit.prevent="userRegistration">
                                <h6 class="text-center">Sign Up With Your SCDF email</h6>
                                <br>
                                <div class="form-group">
                                    <base-input alternative 
                                                class="mb-3"
                                                placeholder="Email"
                                                type="email"
                                                addon-left-icon="ni ni-email-83"
                                                v-model="user.email">
                                    </base-input>
                                </div>

                                <div class="form-group">
                                    <base-input alternative
                                                type="password"
                                                placeholder="Password"
                                                addon-left-icon="ni ni-lock-circle-open"
                                                v-model="user.password">
                                    </base-input>
                                </div>
                                <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>
                                <br>
                                <p class="forgot-password text-right">
                                    Already registered? 
                                    <router-link :to="{name: 'login'}">sign in</router-link>
                                </p>
                            </form>
                        </card>
                    </div>
                </div>
            </div>
        </div>
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
        password: '',
        password2:''
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
