import React, { Component } from 'react'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Work from '../components/Work'

function Content() {
  return (
    <div className="h-screen bg-backgoundColor ">
      <div className=" bg-red-50 mx-16 h-screen md:px-40">
        <Hero />
        <AboutMe />
        <Work/>
      </div>
    </div>
  )
}

export default Content
