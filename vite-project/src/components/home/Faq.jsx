import React from 'react'

export default function Faq() {
    return (
        <>

            <section class="faq_area section-padding">
                <div class="container">
                    <div class="section-title">
                        <h4>FAQ</h4>
                        <h2 style={{fontSize:"15px", color:"black"}}>Frequently Asked Questions</h2>
                    </div>
                    <div class="row justify-content-center" style={{marginTop:"-40px"}}>
                        <div class="col-lg-6 col-sm-6 col-xs-12">
                            <div class="accordion" id="accordionExample">

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" style={{fontSize:"21px"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                            What courses do you offer in IT?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div class="accordion-body" style={{fontSize:"15px"}}>
                                            We offer a wide range of IT courses including Frontend Development, Backend Development, MERN Stack, and Software Testing, designed to match current industry standards.
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" style={{fontSize:"21px"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                            Do I need prior coding knowledge?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body" style={{fontSize:"15px"}}>
                                            No prior experience is required. Our courses are designed for beginners as well as intermediate learners, starting from basics and gradually moving to advanced concepts.
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" style={{fontSize:"21px"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                            Will I get practical project experience?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body" style={{fontSize:"15px"}}>
                                            Yes, we focus on hands-on learning. You will work on real-world projects to build practical skills and gain confidence for job roles in the IT industry.
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingFour" >
                                        <button class="accordion-button collapsed" style={{fontSize:"21px"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                                            Do you provide placement assistance?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body" style={{fontSize:"15px"}}>
                                            Yes, we provide placement assistance including resume building, interview preparation, and guidance to help you secure job opportunities in the IT field.
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingFive">
                                        <button class="accordion-button collapsed" style={{fontSize:"21px"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                                            Are the classes online or offline?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body" style={{fontSize:"15px"}}>
                                            We offer both online and offline classes, allowing you to learn at your convenience with flexible schedules and access to quality training from anywhere.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="col-lg-6 col-sm-6 col-xs-12">
                            <div class="pt_faq">
                                <img src="src/assets/images/all-img/faq.png" class="img-fluid" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
