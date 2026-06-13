import React from 'react'
import FrontendDeveloper from '../components/courses/frontend/FrontEndDeveloper'
import BackendDeveloper from '../components/courses/backend/Backend'
import MernStackDeveloper from '../components/courses/mern/MernStack'
import TestingDeveloper from '../components/courses/testing/Testing'

export default function CoursePage() {
  return (
    <>
        <FrontendDeveloper/>
        <BackendDeveloper/>
        <MernStackDeveloper/>
        <TestingDeveloper/>
    </>
  )
}
