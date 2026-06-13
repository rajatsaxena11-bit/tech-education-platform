import React from 'react'
import About from '../components/about/About'
import WhyChooseUs from '../components/home/WhyChooseUs'
import LearningProcess from '../components/about/LearningProcess'
import HiringPartners from '../components/home/HiringPartners'
import PlacementsParterns from '../components/home/PlacementPartners'
import PlacementGallery from '../components/about/PlacementGallery'
import HappyStudents from '../components/about/HappyStudent'
import StudentTestimonials from '../components/about/StudentTestimonials'
import ClientSlider from '../components/home/CompanyStarGold'
import InstitudeGallery from '../components/about/InstitudeGallery'


export default function AboutPage() {
  return (
   <>
     <About/>
     <WhyChooseUs/>
     <LearningProcess/>
     <HiringPartners removeMargin={true}/>
     <PlacementsParterns/>
     <PlacementGallery/>
     <HappyStudents/>
     <StudentTestimonials/>
     <ClientSlider/>
     <InstitudeGallery/>
   </>
  )
}
