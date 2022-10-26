import React from 'react'
import Slide from '@/components/slide/Slide'
import AboutMe from '@/components/content/AboutMe'
import SpecialtySkill from '@/components/content/SpecialtySkill'
import Education from '@/components/content/Education'
import Job from '@/components/content/Job'
import AppStore from '@/components/content/AppStore'
import Article from '@/components/content/Article'
import Journal from '@/components/content/Journal'
import Conference from '@/components/content/Conference'
import Qualification from '@/components/content/Qualification'

export const MainHome = () => {
  return (
    <div className='section'>
      <Slide />
      <div className='container'>
        <AboutMe />
        <SpecialtySkill />
        <Education />
        <Job />
        <AppStore />
        <Article />
        <Journal />
        <Conference />
        <Qualification />
      </div>
    </div>
  )
}

export default MainHome
