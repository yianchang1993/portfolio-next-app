import React, { Component } from 'react'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Work from '../components/Work'
import Bio from '../components/Bio'
import FindMe from '../components/FindMe'
import { motion } from 'framer-motion'

function Content() {
  return (
    <div className=" bg-backgoundColor ">
    {/* bg-red-50 */}
      <motion.div className="
       mx-16 md:px-40 space-y-5 overflow-hidden"
       initial={{opacity: 0,y:-40}}
       animate={{opacity: 1,y:0}}
       transition={{duration:2}}
       >
        <Hero />
        <AboutMe />
        <Work/>
        <Bio/>
        <FindMe/>
      </motion.div>
    </div>
  )
}

export default Content
