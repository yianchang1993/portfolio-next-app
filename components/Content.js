import React, { Component } from 'react'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Work from '../components/Work'
import Bio from '../components/Bio'
import FindMe from '../components/FindMe'

function Content() {
  return (
    <div className=" bg-backgoundColor ">
    {/* bg-red-50 */}
      <div className="
       mx-16 md:px-40 space-y-5 overflow-hidden">
        <Hero />
        <AboutMe />
        <Work/>
        <Bio/>
        <FindMe/>
      </div>
    </div>
  )
}

export default Content
