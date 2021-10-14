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
                            <div class="col-lg-7 order-lg-3">
                                <span></span>
                                <div id="outer">
                                    <br><br>
                                    <div class="inner"><button type="default" class="mr-4">First Session</button></div>
                                    <div class="inner"><button type="default" class="mr-4">Subsequent Sessions</button></div>
                                    <div class="inner"><button type="default" class="mr-4">Annex</button></div>
                                    <!-- toggle between the sessions -->
                                </div>
                            </div>
                        </div>
                        <!-- form start -->
                        <div class="text-center mt-5">
                            <h2><strong>Annex</strong></h2>
                            <br><br>
                            <h2 class="heading-title text-warning mb-0">Obeservations of Presentation</h2>
                            <p>Following is a guide for the observable information of the client. </p>
                            <img src="https://github.com/wzker11/Case-notes-webapp/blob/master/public/img/brand/ANNEX1.png" alt="Lamp" width="32" height="32">
                            <img src="https://github.com/wzker11/Case-notes-webapp/blob/master/public/img/brand/ANNEX2.png" alt="Lamp" width="32" height="32">
                            <img src="https://github.com/wzker11/Case-notes-webapp/blob/master/public/img/brand/ANNEX3.png" alt="Lamp" width="32" height="32">
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </section>
</template>
<script>
export default {};
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
