<template>
    <section class="section-hero section-shaped my-0">
        <div class="shape shape-style-1 shape-primary">
            <span class="span-150"></span>
            <span class="span-50"></span>
            <span class="span-50"></span>
            <span class="span-75"></span>
            <span class="span-100"></span>
            <span class="span-75"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
        </div>
        <div class="container shape-container d-flex align-items-center">
            <div class="col px-0">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-7 text-center pt-lg">
                        <h1 class="text-white mt-5 mb-6"><span>Session Case Notes</span></h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container" style = "margin-top: -32.8%;">
                <card shadow class="card-profile mt--300" no-body>
                <div>
                    <base-button size="sm " type="primary" style = "height:30px; width:90px; margin-top:31px; margin-left: 90%" v-on:click="signOut">Sign Out</base-button>
                </div>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-4.5 order-lg-3">
                                <span></span>
                                    <br><br>
                                    <router-link to="/first-session" title="First Session">
                                        <base-button type="default" class="mr-4">First Session</base-button>
                                    </router-link>
                                    <router-link to="/subsequent-session" title="Subsequent Session">
                                        <base-button type="default" class="mr-4">Subsequent Session</base-button>
                                    </router-link>
                                    <router-link to="/summary" title="Summary">
                                        <base-button type="default" class="mr-4">Summary</base-button>
                                    </router-link>
                                    <!-- toggle between the sessions -->
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h2><strong>Summary Page</strong></h2>
                            <br><br>
                        </div>
                    </div>
                </card>
            </div>
        </section>
        </div>
    </section>
</template>

<script>
const DatePickers = () => import("./JavascriptComponents/DatePickers");
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import TabsSection from "./JavascriptComponents/TabsSection";
import Modals from "./JavascriptComponents/Modals";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";

export default {
  data() {
    return {
      isAnnex: false,
      isIntent: false,
      isPlans: false,
      isResources: false,
      isPastAttempt: false,
      isMentalHealth: false,
      nric: "",
      name: "",
      obsOfPresentation: "",
      counsellingGoals: "",
      detailsOfSession: "",
      comments: "",
      interventionsProvided: "",
      reasonsForClosure: "",
      editorOption: {
        // Some Quill options...
      },
    };
  },
  components: {
    DatePickers,
    TabPane,
    Tabs,
    TabsSection,
    Modals,
    quillEditor,
  },
  methods: {
    signOut() {
      this.$router.push("login");
    },
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.content = html;
    },
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  },
  mounted() {
    console.log("this is current quill instance object", this.editor);
  },
};
</script>

<style>
#outer {
  width: 100%;
  text-align: center;
}
.inner {
  display: inline-block;
}
</style>

