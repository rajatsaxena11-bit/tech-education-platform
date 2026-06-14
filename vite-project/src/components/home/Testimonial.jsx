import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from "swiper/modules"
import 'swiper/css'
import '../../assets/mycss/home/testimonial.css'

const testimonials = [
    {
        name: "Nitin Gupta",
        company: "TCS",
        img: "https://t4.ftcdn.net/jpg/05/19/89/97/360_F_519899761_kH6DsNBvULXhoSN2MVil1IUsRpSTNxvC.jpg",
        text: "The training exceeded my expectations. Hands-on projects helped me gain real confidence."
    },
    {
        name: "Priyanka Tiwari",
        company: "KT Group",
        img: "https://t4.ftcdn.net/jpg/06/77/30/71/360_F_677307123_bVNJqZD8AGDjPolT5riGQd1uYHh2XVXY.jpg",
        text: "I started with zero coding knowledge. Everything was explained in a simple way."
    },
    {
        name: "Akriti Khare",
        company: "Zensar",
        img: "https://t4.ftcdn.net/jpg/01/63/75/29/360_F_163752905_ssm9pYAyaSzit4qjxXVDiQePQRChCH8u.jpg",
        text: "Best MERN training with live projects and strong mentor support."
    },
    {
        name: "Rahul Pandey",
        company: "MNC",
        img: "https://cdn.pixabay.com/photo/2025/11/28/11/39/top-business-institute-in-india-9982835_1280.jpg",
        text: "Frontend course gave me confidence to build real production projects."
    }
]

export default function Testimonials() {
    return (
        <section className="testimonial-section py-5 container">

            <div className="container">

                {/* TITLE */}
                <div className="text-center mb-5">

                    <h2 className="testimonial-title" style={{fontSize:"22px"}}>
                        💬 What Our <span>Students Say</span>
                    </h2>

                    <p className="testimonial-subtitle">
                        Real feedback from our successful students
                    </p>

                </div>

                {/* SLIDER */}
                <Swiper

                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    spaceBetween={25}

                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}

                >

                    {testimonials.map((item, index) => (

                        <SwiperSlide key={index}>

                            <div className="testimonial-card">

                                {/* USER */}
                                <div className="user">

                                    <img src={item.img} alt="" />

                                    <div>

                                        <h5 style={{fontSize:"18px"}}>{item.name}</h5>

                                        <span>{item.company}</span>

                                    </div>

                                </div>

                                {/* TEXT */}
                                <p>
                                    “{item.text}”
                                </p>

                                {/* STARS */}
                                <div className="stars">
                                    ⭐⭐⭐⭐⭐
                                </div>

                            </div>

                        </SwiperSlide>

                    ))}

                </Swiper>

            </div>

        </section>
    )
}