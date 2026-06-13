import React from 'react'
import PlacedStudents from '../components/placements/PlacedStudents'
import HighestPackages from '../components/placements/highestpackage'
import HiringPartners from '../components/home/HiringPartners'
import PlacementProcess from '../components/placements/PlacementProcess'
import InterviewPreparation1 from '../components/placements/InterviewPreparation'
import StudentSuccessStories from '../components/placements/SuccessStory'
import MockInterview from '../components/placements/MockInterviews'
import StartupOpportunities from '../components/placements/StartUpCompany'
import TopMNCHiring from '../components/placements/TopMMnc'

export default function PlacementPage() {
  return (
   <>
     <PlacedStudents/>
     <HighestPackages/>
     <HiringPartners/>
     <PlacementProcess/>
     <InterviewPreparation1/>
     <StudentSuccessStories/>
     <MockInterview/>
     <StartupOpportunities/>
     <TopMNCHiring/>
   </>
  )
}
