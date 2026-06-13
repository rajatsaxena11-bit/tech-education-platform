import React from 'react'
import PracticalTraining from '../components/Training/PracticleTranning'
import LiveProjects from '../components/Training/LiveProject1'
import InternshipProgram from '../components/Training/InternshipProgram'
import Courses from '../components/home/Courses'
import Certification from '../components/Training/Certification'

export default function TrainingPage() {
  return (
   <>
     <PracticalTraining/>
     <LiveProjects/>
     <InternshipProgram/>
     <Courses/>
     <Certification/>
   </>
  )
}
