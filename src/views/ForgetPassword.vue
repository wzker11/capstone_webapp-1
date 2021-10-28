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
            <div class="vue-tempalte">
                <div class="container pt-lg-md">
                    <div class="row justify-content-center">
                        <div class="col-lg-5">
                            <card type="secondary" shadow header-classes="bg-white pb-5" body-classes="px-lg-5 py-lg-5" class="border-0">
                                <form @submit.prevent="forgetPassword">
                                    <h6 class="text-center">Send a password reset email</h6>
                                    <br>
                                    <div class="form-group">
                                        <base-input alternative class="mb-3" placeholder="Email" type="email" addon-left-icon="ni ni-email-83" v-model="user.email"></base-input>
                                    </div>

                                    <div class="row justify-content-center">
                                        <button type="submit" class="btn btn-dark btn-lg btn-block">Reset password</button>
                                    </div>
                                    <br>
                                    <div class="row justify-content-center"><router-link :to="{name: 'login'}">Sign in</router-link></div>
                                </form>
                            </card>
                        </div>
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
        email: ''
      }
    };
  },
  methods: {
    forgetPassword() {
        firebase
        .auth()
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
            alert('Check your registered email to reset the password!')
            this.user = {   
              email: ''
            }
            this.$router.push('login')
        })
        .catch((error) => {
          alert(error)
        })
    }
  }
};
</script>