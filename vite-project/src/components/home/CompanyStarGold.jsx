import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import { Link } from "react-router-dom";

/* SWIPER CSS */

import "swiper/css";
import '../../assets/mycss/home/companystargold.css'

export default function ClientSlider() {

    return (
        <>
            <div className="container" >
                <div className="row">
                    <div className="col-lg-4 col-sm-4 col-xs-12">
                        <div className="partner_title ">
                            <h3 className="mt-4" style={{fontSize:"20px",textAlign:"left"}}> Trusted by <span>5,000+</span> learners <br /> & top hiring companies worldwide </h3>
                        </div>
                        <button className="mt-3 premium-demo-btn btn btn-outline-success hero-btn career-primary-btn explore-course-btn" onClick={() => setShowDemoModal(true)}>
                            Apply Now
                            <div className="btn-shine-effect"></div>
                        </button>
                    </div>

                    <div className="col-lg-8 mt-4 overflow-hidden">

                        <Swiper

                            modules={[Autoplay]}

                            loop={true}

                            speed={3000}

                            autoplay={{
                                delay: 1,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false,
                            }}

                            allowTouchMove={false}

                            breakpoints={{
                                320: {
                                    slidesPerView: 2,
                                },

                                768: {
                                    slidesPerView: 3,
                                },

                                1024: {
                                    slidesPerView: 5,
                                }, 
                            }}

                            spaceBetween={20}

                        >

                            <SwiperSlide>
                                <Link to="#">
                                    <img
                                        src="/src/assets/images/company/1.png"
                                        alt=""
                                        className="client-logo"
                                    />
                                </Link>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Link to="#">
                                    <img
                                        src="/src/assets/images/company/2.png"
                                        alt=""
                                        className="client-logo"
                                    />
                                </Link>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Link to="#">
                                    <img
                                        src="/src/assets/images/company/3.png"
                                        alt=""
                                        className="client-logo"
                                    />
                                </Link>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Link to="#">
                                    <img
                                        src="/src/assets/images/company/5.png"
                                        alt=""
                                        className="client-logo"
                                    />
                                </Link>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Link to="#">
                                    <img
                                        src="/src/assets/images/company/6.png"
                                        alt=""
                                        className="client-logo"
                                    />
                                </Link>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Link to="#">
                                    <img
                                        src="/src/assets/images/company/7.svg"
                                        alt=""
                                        className="client-logo"
                                    />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#">
                                    <img
                                        src="/src/assets/images/company/8.avif"
                                        alt=""
                                        className="client-logo"
                                    />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#">
                                    <img
                                        src="/src/assets/images/company/9.png"
                                        alt=""
                                        className="client-logo"
                                    />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#">
                                    <img
                                        src="/src/assets/images/company/3.jpg"
                                        alt=""
                                        className="client-logo"
                                    />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#">
                                    <img
                                        src="/src/assets/images/company/11.png"
                                        alt=""
                                        className="client-logo"
                                    />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#">
                                    <img
                                        src="/src/assets/images/company/13.png"
                                        alt=""
                                        className="client-logo"
                                    />
                                </Link>
                            </SwiperSlide>


                            <SwiperSlide>
                                <Link to="#">
                                    <img
                                        src="/src/assets/images/company/22.png"
                                        alt=""
                                        className="client-logo"
                                    />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#">
                                    <img
                                        src="/src/assets/images/company/33.png"
                                        alt=""
                                        className="client-logo"
                                    />
                                </Link>
                            </SwiperSlide>



                        </Swiper>

                    </div>

                </div>
            </div>
        </>


    );
}