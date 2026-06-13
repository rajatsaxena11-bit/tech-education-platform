import React from 'react'
import Home from '../components/home/Home'
import ClientSlider from '../components/home/CompanyStarGold'
import TechPulseNotification from '../components/Notification/Notification'
import HiringPartners from '../components/home/HiringPartners'
import Courses from '../components/home/Courses'
import WhyChooseUs from '../components/home/WhyChooseUs'
import CodingAssetment from '../components/home/CodingAssisment'
import Trainers from '../components/home/ExpertTrainer'
import PlacementSlider from '../components/home/PlacementSuccessful'
import Testimonials from '../components/home/Testimonial'
import UpComingBatch from '../components/home/UpcomingBatch'
import PlacementsParterns from '../components/home/PlacementPartners'
import PricePlan from '../components/home/PricingPlan'
import Faq from '../components/home/Faq'
import EnquiryModal from '../components/PopUpForm'






export default function HomePage() {
    return (
        <>
        <EnquiryModal/>
           <Home/>
           <ClientSlider/>
           <TechPulseNotification/>
           <HiringPartners/>
           <Courses/>
           <WhyChooseUs/>
           <Trainers/>
           <CodingAssetment/>
           <PlacementSlider/>
           <Testimonials/>
           <UpComingBatch/>
           <PlacementsParterns/>
           <PricePlan/>
           <Faq/>
          
        </>
    )
}
