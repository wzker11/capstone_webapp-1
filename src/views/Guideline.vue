<template>
    <section class="section section-shaped my-0">
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
        <div class="container shape-container d-flex align-items-center" style="height:100px">
            <div class="col px-0">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-7 text-center pt-lg">
                        <h2 class="text-white mt-0 mb-9">GUIDELINES IN WRITING CASE NOTES</h2>
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
                        <div class="d-flex flex-row-reverse pt-sm">
                            <base-button size="sm" type="primary" style = "height:30px; width:90px; margin-right:10px" v-on:click="signOut">Sign Out</base-button>
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
                            <!-- form start -->
                            <form id="first-session">
                                <br><br>
                                <div>
                                        <h5 class="heading-title text-warning mb-0">Purpose of case notes</h5>
                                        <br>
                                        <h6>1.	Case notes are essential documents after every case work or counselling sessions. They help to put forth a document with clear evidence of the client’s needs in counselling. Case notes remind the attending counsellors of the follow-up plans and this ensures a more focused intervention during the counselling process.</h6>
                                        <br>
                                        <h6>2.	Writing case notes would allow others who read the case notes to understand the case better. This allows relevant parties (e.g., EBSC) to understand what was discussed during the sessions within confidentiality boundaries. Moreover, case notes ensure continuity of care when there are case transfers or when the case is re-opened. Case notes can also be required to make a decision in the attending counsellor’s absence or in unexpected situations such as allegations against the staff (e.g., negligence). Files can also be called for during investigations e.g., in the event of the client’s sudden death. </h6>
                                        <br>
                                        <h6>3.  Ensuring minimal time lapse is important so that recording is accurate and captures key issues and judgement. It can be challenging to recollect past sessions and more time may be required to write the case notes. Writing case notes require discipline even though it might not be the most enjoyable part of the work. </h6>
                                        <br>
                                        <h6>4.	A lack of practice in proper documentations will affect the next attending counsellor’s confidence in continuing the counselling process. It will also cause unnecessary stress to the current attending counsellor when information required is missing.   </h6>
                                        <br>
                                        <h5 class="heading-title text-warning mb-0">Confidentiality</h5>
                                        <br>
                                        <h6>5.	Counsellors are to seek consent from their clients when disclosing relevant information to the supervisors and to discuss the information to be shared. Confidentiality can be breached only based on the following: It is mandated by court/ law;</h6>
                                        <br>
                                        <p style="margin-left:50px">a.	The counsellor/ psychologist has serious concerns that failure to disclose the information will place you, other individuals and/ or SCDF/ MHA/ the nation at serious and imminent risk;</p>
                                        <p style="margin-left:50px">b.	Case discussion is required with relevant personnel (e.g., EBSC supervisors) to improve management of the case;</p>
                                        <p style="margin-left:50px">c.	The organisation/ supervisors required an official update and/ or requested for a formal psychological assessment;</p>
                                        <p style="margin-left:50px">d.	There is disclosure of information about a serious crime;</p>
                                        <p style="margin-left:50px">e.	Client’s prior approval has been obtained to disclose information to specified individuals.</p>
                                        <br>
                                        <h6>6.	All case notes are confidential when completed. Please ensure proper handling of documents – do not leave them saved in devices which others may access. Send only to authorised parties and password-protect the documents is preferred (password ‘EBSCcase01’ to be emailed separately). </h6>
                                        <br>
                                        <h5 class="heading-title text-warning mb-0">General Guidelines</h5>
                                        <br>
                                        <h6>a.	Be concise. </h6>
                                        <br>
                                        <h6>b.	Include detailed information where necessary. </h6>
                                        <br>
                                        <h6>c.	Keep case notes objective </h6>
                                        <p style="margin-left:50px">•	e.g., “Client expressed fears about the future, and shared that he experienced panic attacks” is more useful than “Client is anxious”. </p>
                                        <h6>d.	Be mindful of your own perceptions and biases</h6>
                                        <br>
                                        <h6>e.	Avoid dismissive and judgmental language </h6>
                                        <p style="margin-left:50px">  •	e.g., “Client is hysterical and is difficult”. </p>
                                        <br>
                                        <h5 class="heading-title text-warning mb-0">Guidelines to fill up session notes template </h5>
                                        a.	Reason for Referral

                                        Reason(s) for referrals are indicated in the referral email sent by EBSC. This can include “stressed from tensions occurring at workplace”, “stressed from relationship problems”, “anxiety during turnouts” and so forth. 

                                        b.	Observations of presentation

                                        •	This section allows attending counsellors to pay attention to the verbal and non-verbal behaviours. This allows a more comprehensive cross-sectional description of the client’s mental state at a given point in time.  

                                        •	When combined with biographical and historical information, it allows the counsellor to make a more accurate understanding of the presenting problems, which are required for coherent intervention. 

                                        •	Domains can include appearance, behaviour, mood and affect, cognition and judgment. Please refer to the annex section of the case notes template for more information. 

                                        •	Observing the presentation of the client could also allow you to assess potential risk of harm to themselves or others, or both.

                                        c.	Counselling goals

                                        •	Counselling goals should be mutually agreed upon. Setting goals helps you to remain accountable for the things you want to achieve. Counselling is only useful when it involves having a set plan for what the client hopes to accomplish and experience.

                                        •	While the goals can be broadly identified, it is important to work through the concrete goals during your sessions. Identifying a S.M.A.R.T. goal can help build a conversational tool during your session – be specific, measurable, attainable, realistic and timely in setting the goals.

                                        •	Some questions that you may find helpful to use in your sessions are: 
                                        o	What would you like to attain from the counselling experience?
                                        o	What is your opinion on the factors that inhibit your progress to achieve your goals?
                                        o	What are your expectations and motivations to make the changes?

                                        d.	Details of session 

                                        •	1st session - First session is important in counselling. It often includes establishing rapport and assessing the extent of problems that the client may have. Information is customarily gathered to identify relevant and distal factors that could be contributing to the client’s issues. Gathering information during the first session can be dynamic and requires skills necessary to adapt to each individual client’s needs. 

                                        •	The following domains can still be covered during the first session.
                                        o	Family/ childhood background and issues
                                        o	Educational background
                                        o	Employment history and issues
                                        o	Interpersonal relationships
                                        o	Financial issues
                                        o	History of substance use (alcohol and drugs)
                                        o	Lifestyle issues
                                        o	Medical history
                                        o	Mental health history
                                        o	Perceived strengths/ resilience factors 

                                        •	Subsequent sessions – Upon gathering sufficient background information during the initial session, subsequent sessions should focus on progress of the counselling process. The following areas can be considered for this section
                                        o	General well-being between sessions
                                        o	Severity of presenting problem(s)
                                        o	‘New’ issues that have arisen between sessions
                                        o	Insight into presenting issues
                                        o	Effectiveness of coping strategies
                                        o	Effectiveness of personal resources  
                                        o	Feedback on assigned practices/exercises

                                        e.	Suicide risk considerations

                                        •	The dynamic situational factors that clients experience can result in acute crisis. Although paracounsellors are assigned with cases that have low suicide risk, there could be times where clients may experience challenges that push them to think about suicide. In such situations, always seek EBSC inputs on the management of cases with suicide risk. 

                                        •	Hence, if the client active expresses suicidal ideation during your session unexpectedly, do not panic. Refer the case to the Medical Officer immediately. 
                                        o	If you are not trained in suicide intervention or management, refer the client to the Medical Officer immediately. 

                                        •	Otherwise, ensure the safety of your client (e.g., developing a basic safety plan) before you end your session. You may consider reaching out to your EBSC as you pause your session, too. 

                                        f.	Interventions provided

                                        •	Basic attending skills is fundamental in counselling process. Additionally, the following interventions can take place during your sessions (refer to Annex). 
                                        o	Problem solving
                                        o	Cost-benefit analysis
                                        o	Consequential thinking
                                        o	Effective approval and disapproval
                                        o	Motivating client towards change
                                        o	Drawing thought-behaviour link 

                                        g.	Case conceptualisation 

                                        •	Understanding the client’s needs helps to build a coherent plan for focused interventions. It identifies contributing (note: not causal) factors that trigger and maintain the presenting issue. This can help guide our counselling efforts and establish short-term, intermediate, and long-term goals and the means by which they can be achieved. 
                                        •	There are many theoretical frameworks that guide our understanding of the case. Use a framework that you may be more familiar with (e.g., biopsychosocial framework shared during P.S.L.E.) 
                                        •	Always check in on your case conceptualisation with EBSC, wherever possible. 

                                </div>
                            </form>

                        </div>
                    </card>
                </div>
            </section>
        </div>
    </section>
</template> 


<script>
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

