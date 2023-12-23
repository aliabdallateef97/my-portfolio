import React from 'react'
import StartBlock from './StartBlock'
import AboutMe from './Aboutme'
import WorkExperiences from './workExperiences'
import Skills from './Skills'
import Projects from './Projects'
import ContactUs from './ContactUs'

const Sections = ({started}) => {
  return (
    <>
    <StartBlock />
    {started === true ?<AboutMe />:''}
    <WorkExperiences />
    <Skills />
    <Projects />
    <ContactUs />
    </>
  )
}

export default Sections