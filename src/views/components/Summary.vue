<template>
    <div class="scroll">
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
                            <h2><strong>Summary</strong></h2>
                        </div>
                        <div class="grid-container">
                            <p id="SgenericNames">NRIC</p> <p id="SgenericNames">Name</p> <p id="SgenericNames">Status</p> <p id="SgenericNames">Type of Form</p>
                        </div>
                        <div v-for="(form, index) in forms" :key="index">
                           <div class="grid-container">
                             <p id="genericNames">{{form.id}}</p> <p id="genericNames">{{form.name}}</p> <p id="genericNames"></p>
                             <p v-if="form.session_num == 1" id = "genericNames">First Session</p>
                             <p v-if="form.session_num == 0" id = "genericNames">Subsequent Session</p>
                          </div>
                        </div>
                        <br><br>
                    </div>
                </card>
            </div>
        </section>
        </div>
    </section>
    <br><br><br><br><br><br><br><br><br><br><br>
    </div>
</template>

<script>

const DatePickers = () => import("./JavascriptComponents/DatePickers");
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import TabsSection from "./JavascriptComponents/TabsSection";
import Modals from "./JavascriptComponents/Modals";
import database from '../../firebase.js';

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
      forms:[],
    };
  },
  components: {
    DatePickers,
    TabPane,
    Tabs,
    TabsSection,
    Modals
  },
  methods: {
    signOut() {
      this.$router.push("login");
    },
    retrieveData() {
      var input_nric = this.nric;
      var patients = ["S9596412E", "S9614554C"];
      if (!patients.includes(input_nric)) {
        alert("Please enter a valid NRIC number");
        return;
      }
      var info = firebase.database().ref("/" + input_nric);
      info.on("value", (snapshot) => {
        const data = snapshot.val();
        this.race = data["Race"];
        this.name = data["Name"];
        this.maritalstatus = data["Marital Status"];
        this.unit = data["Unit"];
        this.contact = data["Contact Number"];
        this.enlistment = data["Enlistment Date"];
        this.age = data["Age"];
        this.ord = data["ORD Date"];
      });
    },
    clearFields() {
      this.race = "";
      this.name = "";
      this.maritalstatus = "";
      this.unit = "";
      this.contact = "";
      this.enlistment = "";
      this.age = "";
      this.ord = "";
      this.nric = "";
    },
    current_time() {
      const current = new Date();
      const minute =
        current.getMinutes() < 9
          ? "0" + current.getMinutes()
          : current.getMinutes();
      const time = current.getHours() + ":" + minute; // + ":" + current.getSeconds();
      return time;
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
    fetchItems:function() {
        database.collection('forms').get().then(snapshot => {
            let form = {}
            snapshot.docs.forEach(doc => {
             form = doc.data()
             form.id = doc.id
             this.forms.push(form)})
             })
    },
    route:function(name) {
        this.$router.push({name: 'indivform', params: {name: name}})
      }

  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  },
  mounted() {
    console.log("this is current quill instance object", this.editor);
  },
  created:function() {
    this.fetchItems();
    } 
};

</script>

<style scoped>
.scroll{
  overflow: scroll;
}
.grid-container {
    display: grid;
    column-gap: 20px;
    row-gap: 5px;
    grid-template-columns: repeat(4, 1fr);
    position: relative;
    z-index: 2;
    top: 20px;
}
.each-grid {
    border-radius: 0% 0% 0% 0% / 0% 0% 0% 0% ;
    transition: all .4s ease;
    box-shadow: 0px 0px white;
}
.each-grid:hover {
  border-radius: 0% 0% 50% 50% / 0% 0% 0% 0% ;
  box-shadow: 5px 5px lightgray;
}
#statusText {
    position: relative;
    max-height: 100%;
    max-width: 100%;
    font-family: Serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
     text-align: center;
    color: white;
    margin: 0;
    padding-top: 0;
    position: relative;
    
}
#homeAnimalPic {
    width: 200px;
    height: 200px; 
    border-radius: 30%;
    object-fit:cover;
}
#genericNames {
    position: relative;
    width: auto;
    height: auto;
    font-family: Sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: #191970;
    margin-bottom: 10px;
}
#SgenericNames {
    position: relative;
    width: auto;
    height: auto;
    font-family: Sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    color: black;
    margin-bottom: 20px;
    background: lightgray;
}

</style>

