import React, { Component } from 'react'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Work from '../components/Work'
import Bio from '../components/Bio'

function Content() {
  return (
    <div className=" bg-backgoundColor ">
      <div className=" bg-red-50 mx-16 md:px-40 space-y-5 overflow-hidden">
        <Hero />
        <AboutMe />
        <Work/>
        <Bio/>
      </div>
    </div>
  )
}

export default Content
