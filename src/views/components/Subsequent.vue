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
                            <div>
                                <br>
                                <!-- <form class="tr" method="post" action="blah.html"> -->
                                <div class="row">
                                    <div class="col-lg-6 col-sm-6">
                                                <div class="row">
                                                    <base-input class="col-sm-9" label="NRIC" v-model="nric"></base-input>
                                                    <base-button size="sm " type="primary" style = "height:45px; width:105px; margin-top:31px" v-on:click="retrieveData">Retrieve</base-button>
                                                </div>
                                        <base-input label="Rank/Name" v-model="name"></base-input>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                                <h2 class="heading-title text-warning mb-0">Session Information</h2>
                                <br>
                                <!-- <form class="tr" method="post" action="blah.html"> -->
                                <div class="row">
                                    <div class="col-lg-6 col-sm-6">
                                        <!-- <base-input placeholder="Date"></base-input> -->
                                        <!-- <input type="text" data-input="true" class="form-control datepicker flatpickr-input active"> -->
                                        <base-input label="Session Date"><date-pickers></date-pickers></base-input>
                                        <base-input label="Start Time" v-model="time" :placeholder="[[ curren_time() ]]"></base-input>
                                        <base-input label="End Time"></base-input>
                                    </div>
                                    <div class="col-lg-6 col-sm-6">
                                        <base-input label="Venue"></base-input>
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
                                    <p>Click on the annex button to get a guide for this section. </p>
                                    <div id="annex">
                                        <base-button v-on:click="isAnnex = !isAnnex" >Annex</base-button>
                                        <br>
                                        <img v-show="isAnnex" width="930px" src="./ANNEX1.png" />
                                        <img v-show="isAnnex" width="930px" src="./ANNEX2.png" />
                                        <img v-show="isAnnex" width="930px" src="./ANNEX3.png" />
                                        <br>
                                    </div>
                                    <textarea name="obsOfPresentation_S" row=100 cols=95></textarea>
                                </div>      
                            </div>
                            <br><br>

                        <div>
                            <div>
                                <div>
                                    <h2 class="heading-title text-warning mb-0">Counselling Goals</h2>
                                    <br>
                                    <p>List down client’s counselling/ therapy goals (mutually agreed) to be achieved for counselling and/or during the current session.</p>
                                    <textarea name="counsellingGoals_S" row=10 cols=95></textarea>
                                    <br><br>

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
                                    <textarea name="detailsOfSession_S" row=10 cols=95></textarea>
                                    <br><br><br>

                                    <h2 class="heading-title text-warning mb-0">Intervention(s) provided</h2>
                                    <br>
                                    <p><em>Brief but clear summary of the intervention work that has been undertaken with the client during the session (e.g., what were the proposed plans that were agreed upon, any homework assigned to the client, etc.). If client expressed suicidal ideation, include suicide safety plan.</em></p>
                                    <textarea name="interventionsProvided_S" row=10 cols=95></textarea>
                                    <br><br><br>

                                    <h2 class="heading-title text-warning mb-0">Comments</h2>
                                    <br>
                                    <p>Your assessment of the factors that have contributed to his / her progress, effectiveness of the intervention(s) provided, etc.</p>
                                    <textarea name="Comments" row=10 cols=95></textarea>
                                    <br><br><br>

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
                            <p>It is recommended that suicide risk is managed during and immediately after the session. If there is a high risk of suicide, attending aracounsellors/ counsellors should inform and discuss with the unit supervisor on the safety plan. <br>The safety plan can include seeking medical attention from the SCDF Medical Centre, conveyance to IMH or the nearest A&E or a restructured hospital. <br>When in doubt, please reach out to EBSC or the SCDF Counselling Helpline (1800 286 6666).
                            </p>
                        </div>
                        <br><br>
                        <div>
                            <h2 class="heading-title text-warning mb-0">Follow-up Plans</h2>
                            <br>
                            <p>Indicate your follow-up plans for the case.</p>
                            <h6><u>Case management:</u></h6>
                            <p><i>To update or reach out to the following:</i></p>
                            <div>
                                <base-checkbox class="mb-3">Client’s supervisors</base-checkbox>
                                <base-checkbox class="mb-3">Unit Paracounsellor to monitor</base-checkbox>
                                <base-checkbox class="mb-3">Medical Officer</base-checkbox>
                                <base-checkbox class="mb-3">Other agencies</base-checkbox>
                            </div>
                            <p><i>Apart from suicide risk, the following are common areas of update (subjected to client’s consent): </i></p>
                            <p> - Mental health condition</p>
                            <p> -  Coping strategies</p>
                            <p> - Recommended work arrangements</p>
                            <p>Note: Advocacy for posting is discouraged during counselling sessions. Please contact EBSC for further discussion prior to updating supervisors if a change in posting is recommended. </p>
                            <br>
                            <h2 class="heading mb-2">Follow-up Plans</h2>
                            <p class="text-muted mb-2"><i>Include next date of session, if applicable. <br>If no follow up is required, state reasons for closure. <br>If case is required for handover, please append handover form upon submission of case notes. </i></p>
                            <base-input label="Next Session Date"><date-pickers></date-pickers></base-input>
                            <textarea name="followUpPlans_S" row=100 cols=95></textarea>
                        </div>
                        <br><br><br>
                       
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
export default {
    data() {
        return {
            isAnnex: false,
            isIntent: false,
            isPlans: false,
            isResources: false,
            isPastAttempt: false,
            isMentalHealth: false,
            name : ''
        }
    },
    components: {
        DatePickers,
        TabPane,
        Tabs,
        TabsSection,
        Modals
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
                alert("Please enter a valid NRIC number")
            }
            else {
                var info = firebase.database().ref("/S9614554C")
                info.on('value', (snapshot) => {
                    const data = snapshot.val()
                    this.name = data['Name']
            })
            }
        }
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

