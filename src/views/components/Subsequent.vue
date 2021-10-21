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
                        <div class="text-center mt-5">
                            <h2><strong>Subsequent Session Form</strong></h2>
                            <br><br>
                        </div>
                        
                        <div ref="client-information">
                                <h2 class="heading-title text-warning mb-0">Client Information</h2>
                                <p> The client's information can be automatically filled up by entering their NRIC and clicking on "Retrieve".</p>
                                <br>
                                <!-- <form class="tr" method="post" action="blah.html"> -->
                                <div class="row">
                                    <base-input class="col-sm-6" label="NRIC" v-model="nric"></base-input>
                                    <base-button size="sm " type="primary" style = "height:45px; width:105px; margin-top:31px" v-on:click="retrieveData">Retrieve</base-button>
                                    <!-- <button v-on:click="retrieveData" style = "margin-left: 15px; color: black; margin-bottom: 10px;">Retrieve</button> -->
                                </div>
                            <div>
                                <!-- <form class="tr" method="post" action="blah.html"> -->
                                <div class="row">
                                    <div class="col-lg-6 col-sm-6">
                                        <!-- <base-input label="NRIC" v-model="nric"></base-input> -->
                                        <base-input label="Rank/Name" v-model="name"></base-input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br>
                        <div>
                                <h2 class="heading-title text-warning mb-0">Session Information</h2>
                                <br>
                                <!-- <form class="tr" method="post" action="blah.html"> -->
                                <div class="row">
                                    <div class="col-lg-6 col-sm-6">
                                        <label>Session Date</label><date-pickers></date-pickers>
                                        <base-input label="Start Time" v-model="time" :placeholder="[[ curren_time() ]]"></base-input>
                                        <base-input label="End Time"></base-input>
                                    </div>
                                    <div class="col-lg-6 col-sm-6">
                                        <base-input label="Venue">
                                            <select class="form-control">
                                                <option>Meeting Room 1</option>
                                                <option>Meeting Room 2</option>
                                                <option>Meeting Room 3</option>
                                                <option>Meeting Room 4</option>
                                                <option>Meeting Room 5</option>
                                            </select>
                                        </base-input>
                                        <!-- <base-input placeholder="Counsellor(s)"></base-input> -->
                                        <base-input label= "Counsellor">
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
                                    <h2 class="heading-title text-warning mb-0">Observations of Presentation</h2>
                                    <br>
                                    <div class="row justify-content-left">
                                        <p class="ml-3">Click on the annex button to get a guide for this section. </p>
                                        <base-button class="ml-4" size="sm" style="height:30px" v-on:click="isAnnex = !isAnnex" >Annex</base-button>
                                    </div>
                                    <div id="annex">
                                        <br>
                                        <img v-show="isAnnex" width="930px" src="./ANNEX1.png" />
                                        <img v-show="isAnnex" width="930px" src="./ANNEX2.png" />
                                        <img v-show="isAnnex" width="930px" src="./ANNEX3.png" />
                                    </div>
                                    <!-- <textarea name="obsOfPresentation_S" row=100 cols=95></textarea> -->
                                    <quill-editor
                                    ref="myQuillEditor"
                                    style="height:150px"
                                    theme="snow"
                                    v-model="obsOfPresentation"
                                    :options="editorOption"
                                    @blur="onEditorBlur($event)"
                                    @focus="onEditorFocus($event)"
                                    @ready="onEditorReady($event)"/>
                                </div>      
                            </div>
                            <br><br><br><br>

                        <div>
                            <div>
                                <div>
                                    <h2 class="heading-title text-warning mb-0">Counselling Goals</h2>
                                    <br>
                                    <p>List down client’s counselling/ therapy goals (mutually agreed) to be achieved for counselling and/or during the current session.</p>
                                    <!-- <textarea name="counsellingGoals_S" row=10 cols=95></textarea> -->
                                    <quill-editor
                                              ref="myQuillEditor"
                                              style="height:150px"
                                              theme="snow"
                                              v-model="counsellingGoals"
                                              :options="editorOption"
                                              @blur="onEditorBlur($event)"
                                              @focus="onEditorFocus($event)"
                                              @ready="onEditorReady($event)"/>
                                    <br><br><br><br>

                                    <h2 class="heading-title text-warning mb-0">Details Of Session</h2>
                                    <br>
                                    <p>Details of the issues discussed during the session. This can include
                                        <ul>
                                            <li>General well-being between sessions</li>
                                            <li>Severity of presenting problems</li>
                                            <li>'New' issues that have arisen between sessions</li>
                                            <li>Insight into presenting issues</li>
                                            <li>Effectiveness of coping strategies</li>
                                            <li>Effectiveness of personal resources</li>
                                            <li>Feedback on assigned practices/exercises</li>
                                        </ul>
                                    </p>
                                    <!-- <textarea name="detailsOfSession_S" row=10 cols=95></textarea> -->
                                    <quill-editor
                                              ref="myQuillEditor"
                                              style="height:150px"
                                              theme="snow"
                                              v-model="detailsOfSession"
                                              :options="editorOption"
                                              @blur="onEditorBlur($event)"
                                              @focus="onEditorFocus($event)"
                                              @ready="onEditorReady($event)"/>
                                    <br><br><br><br>

                                    <h2 class="heading-title text-warning mb-0">Intervention(s) provided</h2>
                                    <br>
                                    <p><em>Brief but clear summary of the intervention work that has been undertaken with the client during the session (e.g., what were the proposed plans that were agreed upon, any homework assigned to the client, etc.). If client expressed suicidal ideation, include suicide safety plan.</em></p>
                                    <!-- <textarea name="interventionsProvided_S" row=10 cols=95></textarea> -->
                                    <quill-editor
                                              ref="myQuillEditor"
                                              style="height:150px"
                                              theme="snow"
                                              v-model="interventionsProvided"
                                              :options="editorOption"
                                              @blur="onEditorBlur($event)"
                                              @focus="onEditorFocus($event)"
                                              @ready="onEditorReady($event)"/>
                                    <br><br><br><br>

                                    <h2 class="heading-title text-warning mb-0">Comments</h2>
                                    <br>
                                    <p>Your assessment of the factors that have contributed to his / her progress, effectiveness of the intervention(s) provided, etc.</p>
                                    <!-- <textarea name="Comments" row=10 cols=95></textarea> -->
                                    <quill-editor
                                              ref="myQuillEditor"
                                              style="height:150px"
                                              theme="snow"
                                              v-model="comments"
                                              :options="editorOption"
                                              @blur="onEditorBlur($event)"
                                              @focus="onEditorFocus($event)"
                                              @ready="onEditorReady($event)"/>
                                    <br><br><br><br>

                                </div>
                            </div>
                        </div>


                        <div>
                            <h2 class="heading-title text-warning mb-0">Suicide Risk Considerations (If Relevant)</h2>
                            <br>
                            <p>Indicate clients’ responses during current session, if applicable.<br>In an event that client presents with active suicidal ideation during the current session, please refer client to a Medical Centre immediately. Please ensure the safety of the client before reaching out to your Parac TL and/or EBSC, if in doubt.</p>
                            <div><base-button v-on:click="isIntent = !isIntent">1. Intent</base-button></div>
                            <div id="intent" v-show="isIntent">
                                <br>
                                <p>Verbalises thoughts of suicide</p>
                                <textarea name="intent1_S" row=20 cols=95></textarea>
                                <br>
                                <p>Ambivalence towards suicide</p>
                                <textarea name="intent2_S" row=20 cols=95></textarea>
                                <br><br>
                            </div>
                            <br>

                            <div><base-button v-on:click="isPlans = !isPlans" >2. Plans</base-button></div>
                            <div id="plans" v-show="isPlans">
                                <br>
                                <p>Explore about suicide (e.g., research)</p>
                                <textarea name="plan1_S" row=20 cols=95></textarea>
                                <p>Have concrete plans to attempt suicide</p>
                                <textarea name="plan2_S" row=20 cols=95></textarea>
                                <p>Have access to lethal means for suicide</p>
                                <textarea name="plan3_S" row=20 cols=95></textarea>
                                <br><br>
                            </div>
                            <br>

                            <div><base-button v-on:click="isResources = !isResources">3. Resources</base-button></div>
                            <div id="resources" v-show="isResources">
                                <br>
                                <p>Strength of social support</p>
                                <textarea name="resources1_S" row=20 cols=95></textarea>
                                <p>Problem solving skills</p>
                                <textarea name="resources2_S" row=20 cols=95></textarea>
                                <br><br>
                            </div>
                            <br>

                            <div><base-button v-on:click="isPastAttempt = !isPastAttempt">4. Past Attempt</base-button></div>
                            <div id="pastAttempts" v-show="isPastAttempt">
                                <br>
                                <p>History of past suicide attempts</p>
                                <textarea name="pastAttempt_S" row=20 cols=95></textarea>
                                <br><br>
                            </div>
                            <br>

                            <div><base-button v-on:click="isMentalHealth = !isMentalHealth">5. Mental Health</base-button></div>
                            <div id="mentalHealth" v-show="isMentalHealth">
                                <br>
                                <p>Presence of mental health illness</p>
                                <textarea name="mentalHealth_S" row=20 cols=95></textarea>
                                <br><br>
                            </div>
                            <br><br>

                            <h2 class="heading-title text-warning mb-0">Overall Risk Level</h2>
                            <br>
                            <tabs tabNavClasses="nav-fill flex-column flex-sm-row">
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
                            <h2 class="heading-title text-warning mb-0">Follow-up Plans</h2>
                            <br>
                            <p class="small">Indicate your follow-up plans for the case.</p>
                            <h2 class="heading mb-2">Case management</h2>
                            <p class="small">To update or reach out to the following:</p>
                            <div class="row justify-content-center">
                                <div class="col-lg-3">
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
                            
                            <br><br>
                            <h2 class="heading mb-2">Follow-up Plans</h2>
                            <p class="small">Include next date of session, if applicable. <br>If no follow up is required, state reasons for closure. <br>If case is required for handover, please append handover form upon submission of case notes. </p>
                            <label>Next Session Date</label>
                            <base-input class="row justify-content-left col-lg-4"><date-pickers></date-pickers></base-input>
                            <label>Reason(s) for Closure</label><br>
                            <quill-editor
                                              ref="myQuillEditor"
                                              style="height:150px"
                                              theme="snow"
                                              v-model="reasonsForClosure"
                                              :options="editorOption"
                                              @blur="onEditorBlur($event)"
                                              @focus="onEditorFocus($event)"
                                              @ready="onEditorReady($event)"/>
                        </div>
                        <br><br><br><br>
                       
                        <div>
                        <!-- <a href="#">Submit</a> -->
                        <modals class="row justify-content-center"></modals><br>
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
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import { quillEditor } from 'vue-quill-editor';

export default {
    data() {
        return {
            isAnnex: false,
            isIntent: false,
            isPlans: false,
            isResources: false,
            isPastAttempt: false,
            isMentalHealth: false,
            name : '',
            obsOfPresentation:'',
            counsellingGoals:'',
            detailsOfSession:'',
            comments:'',
            interventionsProvided:'',
            reasonsForClosure:'',
            editorOption: {
                // Some Quill options...
            }
        }
    },
    components: {
        DatePickers,
        TabPane,
        Tabs,
        TabsSection,
        Modals,
        quillEditor
    },
    methods: {
        retrieveData() {    
            console.log(this.nric) 
            if (!this.nric) {
                alert("Please enter NRIC")
            }
            else {
                var info = firebase.database().ref("/S9614554C")
                info.on('value', (snapshot) => {
                    const data = snapshot.val()
                    this.name = data['Name']
                })
            }
        },
        curren_time() {
            const current = new Date();
            const minute = current.getMinutes() < 9 ? "0" +current.getMinutes() : current.getMinutes();
            const time = current.getHours() + ":" + minute; // + ":" + current.getSeconds();
            return time;},
        onEditorBlur(quill) {
            console.log('editor blur!', quill)
        },
        onEditorFocus(quill) {
            console.log('editor focus!', quill)
        },
        onEditorReady(quill) {
            console.log('editor ready!', quill)
        },
        onEditorChange({ quill, html, text }) {
            console.log('editor change!', quill, html, text)
            this.content = html
        }
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill
        }
    },
    mounted() {
        console.log('this is current quill instance object', this.editor)
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

