import React from 'react';
import TechnologiesSection from '../components/TechnologiesSection'
import { motion } from 'framer-motion'


export default function TechnologyContent() {
  return (
    <div className=" bg-backgoundColor h-screen">
    {/* bg-red-50 */}
      <motion.div className="
       mx-16 md:px-40 space-y-5 overflow-hidden"
       initial={{opacity: 0,y:-40}}
       animate={{opacity: 1,y:0}}
       transition={{duration:2}}
       >
        <TechnologiesSection/>
      </motion.div>
    </div>
  )
}
