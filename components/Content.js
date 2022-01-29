import React, { Component } from 'react'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'

function Content() {
  return (
    <div className="h-screen bg-backgoundColor ">
      <div className="w-100 bg-red-50 mx-16 h-screen">
        <Hero />
        <AboutMe />
      </div>
    </div>
  )
}

export default Content
