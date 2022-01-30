import React from 'react'
import { motion } from 'framer-motion'


function Hero() {
  return (
    <div className="flex h-32 items-center justify-center ">
      <motion.div className="rounded-xl bg-orange-50"
      whileHover={{scale:1.1}}
      >
        <p className="flex h-20 items-center justify-center p-5 text-lg md:text-lg">
          Hello! I'm a full stack developer in Brisbane
        </p>
      </motion.div>
    </div>
  )
}

export default Hero
