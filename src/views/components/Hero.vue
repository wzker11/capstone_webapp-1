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
                <div class="container">
                    <card shadow class="card-profile mt--300" no-body>
                        <div class="px-4">
                            <div class="row justify-content-center">
                                <div class="col-lg-4.5 order-lg-3">
                                    <span></span>
                                    <br><br>
                                    <router-link to="/First_session" title="First Session">
                                        <base-button type="default" class="mr-4">First Session</base-button>
                                    </router-link>
                                    <router-link to="/Subsequent_session" title="Subsequent Session">
                                        <base-button type="default" class="mr-4">Subsequent Session</base-button>
                                    </router-link>
                                    <!-- toggle between the sessions -->
                                </div>
                            </div>
                            <!-- form start -->
                            <form id="first-session">
                                <div class="text-center mt-5">
                                    <h2><strong>First Session Form</strong></h2>
                                    <br><br>
                                </div>
                            </form>
                                <div ref="client-information">
                                    <div>
                                        <h2 class="heading-title text-warning mb-0">Client Information</h2>
                                        <p> The client's information can be automatically filled up by entering their NRIC and clicking on "Retrieve".</p>
                                        <br>
                                            <div class="row">
                                                <button v-on:click="retrieveData" style = "margin-left: 15px; color: black; margin-bottom: 10px;">Retrieve</button>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-6 col-sm-6">
                                                    <!-- <base-button v-on:click="retrieveData">Retrieve</base-button> -->
                                                    <base-input label="NRIC" v-model="nric" id="nric"></base-input>
                                                    <base-input label="Rank/Name" v-model="name"></base-input>
                                                    <label class="mb-3" >Age</label>
                                                    <base-input v-model="age"></base-input>
                                                    <base-input label="Unit" v-model="unit"></base-input>
                                                    <base-input label="Enlistment Date (for NSFs)" v-model = "enlistment"></base-input>
                                                </div>
                                                <div class="col-lg-6 col-sm-6">
                                                    <base-input label="Marital Status" v-model="maritalstatus"></base-input>
                                                    <base-input label="Race" v-model="race"></base-input>
                                                    <label class="my-auto">Gender</label>
                                                    <tabs tabNavClasses="nav-fill flex-column flex-sm-row">
                                                        <tab-pane title="Male"></tab-pane>
                                                        <tab-pane title="Female"></tab-pane>
                                                    </tabs>
                                                    <base-input label="Contact No" v-model="contact"></base-input>
                                                    <base-input label="Expected ORD (for NSFs)" v-model = "ord"></base-input>
                                                    <!-- <base-input label="Expected ORD (for NSFs)"><date-pickers></date-pickers></base-input> -->
                                                </div>
                                            </div>
                                            <label>Source of Referral</label>
                                            <div class="row justify-content-left">
                                                <base-checkbox class="my-1 ml-3 col-lg-1">Self</base-checkbox>
                                                <base-checkbox class="my-1 col-lg-1">IMH</base-checkbox>
                                                <base-checkbox class="my-1 ml-1 col-lg-2">Supervisor</base-checkbox>
                                                <base-checkbox class="my-1 col-lg-2">Medical Officer</base-checkbox>
                                                <base-checkbox class="my-1 col-lg-2">Others:</base-checkbox>
                                                <base-input class="col-lg-3.9"></base-input>
                                            </div>
                                            <div>
                                                <label>Reason(s) for Referral</label><br>
                                                <textarea name="reasonsForReferral" row=10 cols=102></textarea>
                                            </div>      
                                        </div>
                                    </div>
                                    <br><br><br>
                                    <div>
                                        <div>
                                            <h2 class="heading-title text-warning mb-0">Session Information</h2>
                                            <br>
                                            <div class="row">
                                                <div class="col-lg-6 col-sm-6">
                                                    <label>Session Date</label><date-pickers></date-pickers>
                                                    <base-input label="Start Time" v-model="time" :placeholder="[[ curren_time() ]]" id="session_date"></base-input>
                                                    <base-input label="End Time"></base-input>
                                                    <vue-timepicker input-class="base-input"></vue-timepicker>
                                                </div>
                                                <div class="col-lg-6 col-sm-6">
                                                    <base-input label="Venue" id="venue">
                                                        <select class="form-control">
                                                            <option>Meeting Room 1</option>
                                                            <option>Meeting Room 2</option>
                                                            <option>Meeting Room 3</option>
                                                            <option>Meeting Room 4</option>
                                                            <option>Meeting Room 5</option>
                                                        </select>
                                                    </base-input>
                                                    <!-- <base-input placeholder="Counsellor(s)"></base-input> -->
                                                    <base-input label= "Counsellor" id="counsellor">
                                                        <select class="form-control">
                                                            <option>Shichao</option>
                                                            <option>Clara</option>
                                                            <option>Keif</option>
                                                            <option>Wang Zi</option>
                                                            <option>Amanda</option>
                                                        </select>
                                                    </base-input>
                                                </div>
                                            </div>
                                            <br><br>
                                            <div>
                                                <h5 class="heading-title text-warning mb-0">Observations of Presentation</h5>
                                                <br>
                                                <p>Click on the annex button to get a guide for this section. </p>
                                                <div id="annex">
                                                    <base-button v-on:click="isAnnex = !isAnnex" >Annex</base-button>
                                                    <br>
                                                    <img v-show="isAnnex" width="930px" src="./ANNEX1.png" />
                                                    <img v-show="isAnnex" width="930px" src="./ANNEX2.png" />
                                                    <img v-show="isAnnex" width="930px" src="./ANNEX3.png" />
                                                    <br>
                                                </div>
                                                <textarea name="obsOfPresentation" row=100 cols=95 id="observations"></textarea>
                                            </div>      
                                        </div>
                                    </div>
                                    <br><br>
                                    <div>
                                        <div>
                                            <div>
                                                <h5 class="heading-title text-warning mb-0">Counselling Goals</h5>
                                                <p>List down client’s counselling/ therapy goals (mutually agreed) to be achieved for counselling and/or during the current session.</p>
                                                <textarea name="counsellingGoals" row=10 cols=95 id="counselling_goals"></textarea>
                                                <br><br>
                                                <h5 class="heading-title text-warning mb-0">Details Of Session</h5>
                                                <p>Details of the issues discussed during the session. Background information should include
                                                    <ul>
                                                        <li>family/ childhood background and issues, </li>
                                                        <li>educational background,</li>
                                                        <li>employment history and issues,</li>
                                                        <li>interpersonal relationships, </li>
                                                        <li>financial issues, </li>
                                                        <li>history of substance use (e.g., alcohol and drugs), </li>
                                                        <li>lifestyle issues,</li>
                                                        <li>medical history,</li>
                                                        <li>mental health history (incl. self-harm and suicide behaviours)</li>
                                                    </ul>
                                                </p>
                                                <textarea name="detailsOfSession" row=10 cols=95 id="details" type="text"></textarea>
                                                <br><br><br>

                                                <h5 class="heading-title text-warning mb-0">Case Conceptualisation</h5>
                                                <p>Your assessment of the client’s key underlying issues, obstacles that prevent him / her from resolving the issues, factors that have contributed to his / her progress, personal strengths that could be leveraged to help client manage his / her issues better, perceived social support network to help client manage presenting problem(s), any suspected psychological conditions that the client may be presenting, etc.</p>
                                                <textarea name="caseConceptualisation" v-model.lazy.trim="textAreaValue" row=10 cols=95 id="conceptualisation"></textarea>
                                                <br><br><br>

                                                <h5 class="heading-title text-warning mb-0">Intervention(s) provided</h5>
                                                <p><em>Brief but clear summary of the intervention work that has been undertaken with the client during the session (e.g., what were the proposed plans that were agreed upon, any homework assigned to the client, etc.). If client expressed suicidal ideation, include suicide safety plan.</em></p>
                                                <textarea name="interventionsProvided" row=10 cols=95 id="interventions"></textarea>
                                                <br><br><br>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 class="heading-title text-warning mb-0">Suicide Risk Considerations (If Relevant)</h5>
                                        <p>Indicate clients’ responses during current session, if applicable.<br>In an event that client presents with active suicidal ideation during the current session, please refer client to a Medical Centre immediately. Please ensure the safety of the client before reaching out to your Parac TL and/or EBSC, if in doubt.</p>
                                        <div><base-button v-on:click="isIntent = !isIntent">1. Intent</base-button></div>
                                        <div id="intent" v-show="isIntent">
                                            <br>
                                            <p>Verbalises thoughts of suicide</p>
                                            <textarea name="intent1" row=20 cols=95></textarea>
                                            <br>
                                            <p>Ambivalence towards suicide</p>
                                            <textarea name="intent2" row=20 cols=95></textarea>
                                            <br><br>
                                        </div>
                                        <br>

                                        <div><base-button v-on:click="isPlans = !isPlans" >2. Plans</base-button></div>
                                        <div id="plans" v-show="isPlans">
                                            <br>
                                            <p>Explore about suicide (e.g., research)</p>
                                            <textarea name="plan1" row=20 cols=95></textarea>
                                            <p>Have concrete plans to attempt suicide</p>
                                            <textarea name="plan2" row=20 cols=95></textarea>
                                            <p>Have access to lethal means for suicide</p>
                                            <textarea name="plan3" row=20 cols=95></textarea>
                                            <br><br>
                                        </div>
                                        <br>

                                        <div><base-button v-on:click="isResources = !isResources">3. Resources</base-button></div>
                                        <div id="resources" v-show="isResources">
                                            <br>
                                            <p>Strength of social support</p>
                                            <textarea name="resources1" row=20 cols=95></textarea>
                                            <p>Problem solving skills</p>
                                            <textarea name="resources2" row=20 cols=95></textarea>
                                            <br><br>
                                        </div>
                                        <br>

                                        <div><base-button v-on:click="isPastAttempt = !isPastAttempt">4. Past Attempt</base-button></div>
                                        <div id="pastAttempts" v-show="isPastAttempt">
                                            <br>
                                            <p>History of past suicide attempts</p>
                                            <textarea name="pastAttempt" row=20 cols=95></textarea>
                                            <br><br>
                                        </div>
                                        <br>

                                        <div><base-button v-on:click="isMentalHealth = !isMentalHealth">5. Mental Health</base-button></div>
                                        <div id="mentalHealth" v-show="isMentalHealth">
                                            <br>
                                            <p>Presence of mental health illness</p>
                                            <textarea name="mentalHealth" row=20 cols=95></textarea>
                                            <br><br>
                                        </div>
                                        <br><br>
                                        <h5>Overall Risk Level</h5>
                                        <tabs class='ma-0' tabNavClasses="nav-fill flex-column flex-sm-row" id="risk_level">
                                            <tab-pane title="Low"></tab-pane>
                                            <tab-pane title="Moderate"></tab-pane>
                                            <tab-pane title="High"></tab-pane>
                                        </tabs>
                                        <card shadow>
                                            <p class="small mb-1">It is recommended that suicide risk is managed during and immediately after the session. If there is a high risk of suicide, attending aracounsellors/ counsellors should inform and discuss with the unit supervisor on the safety plan. <br>The safety plan can include seeking medical attention from the SCDF Medical Centre, conveyance to IMH or the nearest A&E or a restructured hospital. <br>When in doubt, please reach out to EBSC or the SCDF Counselling Helpline (1800 286 6666).</p>
                                        </card>
                                    </div>
                                    <br><br>
                                    <div>
                                        <h5 class="heading-title text-warning mb-0">Follow-up Plans</h5>
                                        <small>Indicate your follow-up plans for the case.</small>
                                        <br><br>
                                        <h2 class="heading mb-2">Case management</h2>
                                        <small>To update or reach out to the following:</small>
                                        <br><br>
                                        <div class="row justify-content-center">
                                            <div class="col-lg-3" id="case_management">
                                                <base-checkbox class="mb-3 flex-column flex-md-row">Client’s supervisors</base-checkbox>
                                                <base-checkbox class="mb-3 flex-column flex-md-row">Unit Paracounsellor to monitor</base-checkbox>
                                                <base-checkbox class="mb-3 flex-column flex-md-row">Medical Officer</base-checkbox>
                                                <base-checkbox class="mb-3 flex-column flex-md-row">Other agencies</base-checkbox>
                                            </div>

                                            <div class="col-lg-9 mt-5 mt-lg-0">
                                                <card shadow>
                                                    <p class="small mb-1">Apart from suicide risk, the following are common areas of update (subjected to client’s consent):</p>
                                                    <p class="small mb-1">- Mental health condition</p>
                                                    <p class="small mb-1">- Coping strategies</p>
                                                    <p class="small mb-1">- Recommended work arrangements</p>
                                                    <p class="small mb-1">Note: Advocacy for posting is discouraged during counselling sessions. Please contact EBSC for further discussion prior to updating supervisors if a change in posting is recommended.</p>
                                                </card>
                                            </div>
                                        </div>
                                        <br>
                                        <br>
                                        <h2 class="heading mb-2">Follow-up Plans</h2>
                                        <p class="small">Include next date of session, if applicable. <br>If no follow up is required, state reasons for closure. <br>If case is required for handover, please append handover form upon submission of case notes.</p>
                                        <base-input class="row justify-content-left col-lg-4" label="Next Session Date"><date-pickers></date-pickers></base-input>
                                        <label>Reason(s) for Closure</label><br>
                                        <textarea name="followUpPlans" row=100 cols=102></textarea>
                                    </div>
                                    <br><br><br>
                                    <div>
                                        <h5 class="heading-title text-warning mb-0">Summary</h5><br>
                                        <label>Report Prepared By</label>
                                        <tabs class='ma-0' tabNavClasses="nav-fill flex-column flex-sm-row">
                                            <tab-pane title="EBSC staff"></tab-pane>
                                            <tab-pane title="Paracounsellor"></tab-pane>
                                        </tabs>
                                        <base-input label="Rank/Name"></base-input>
                                        <base-input label="Signature"></base-input>
                                        <base-input label="Date of Report"><date-pickers></date-pickers></base-input>
                                    </div>
                                </div>
                                <div>
                                    <!-- <a href="#">Submit</a> -->
                                    <!-- <modals class="row justify-content-center"></modals> -->
                                    <button v-on:click="saveDraft" style = "margin-left: 15px; color: black; margin-bottom: 10px;">Save Draft</button>
                                </div> 
                        <br>
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
import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue';
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";
import Card from '../../components/Card.vue';
import firebase from 'firebase'
import 'firebase/firestore'
import database from '../../firebase.js'

export default {
    data() {
        return {    
            isAnnex: false,
            isIntent: false,
            isPlans: false,
            isResources: false,
            isPastAttempt: false,
            isMentalHealth: false,
            radio: {
              radio1: "radio1",
              radio2: "radio3"
          },
          race: '',
          name: '',
          age: '',
          maritalstatus:'',
          unit: '',
          contact: '',
          enlistment: '',
          ord : ''
        }
    },
    components: {
        DatePickers,
        TabPane,
        Tabs,
        TabsSection,
        Modals,
        VueTimepicker,
        BaseNav,
        CloseButton,
        Card
    },
    methods: {
        curren_time() {
            const current = new Date();
            const time = current.getHours() + ":" + current.getMinutes(); // + ":" + current.getSeconds();
            return time;
        },
        retrieveData() {    
            console.log(this.nric) 
            if (!this.nric) {
                alert("Please enter NRIC")
            }
            else {
                var info = firebase.database().ref("/S9614554C")
                info.on('value', (snapshot) => {
                    const data = snapshot.val()
                    this.race = data['Race']
                    this.name = data['Name']
                    this.maritalstatus = data['Marital Status']
                    this.unit = data['Unit']
                    this.contact = data['Contact Number']
                    this.enlistment = data['Enlistment Date']
                    this.age = data['Age']
                    this.ord = data['ORD Date']
                })
            }
        },
        saveDraft: function() {
            const session_num = 1;
            database.collection("forms").add({
                session_num: session_num,
            }).then(function(docRef) {
                console.log("First Session Draft Successfully Saved");
            }).catch(function(error) {
                console.error("Error Saving Draft: ", error);
            });
        },
    }
};
</script>
<style>

    #outer
    {
        width:100%;
        text-align: center;
    }
    .inner
    {
        display: inline-block;
    }
</style>
