import React from 'react'
import { motion } from 'framer-motion'

function AboutMe() {
  return (
    <div className="justify-center lg:flex ">
      <div className="flex items-center justify-center p-3">
        <img
          className="w-70 h-70 rounded-full border-2 border-white md:h-48 md:w-48
          "
          layout="intrinsic"
          src="https://i.imgur.com/exG81pU.png"
          alt="profile-photo"
        />
      </div>
      <motion.div className="w-75 p-10 md:w-2/6"
       initial={{opacity: 0,x:-200}}
       animate={{opacity: 1,x:0}}
       transition={{duration:2}}
      >
        <h2 className="break-words text-2xl font-bold  md:w-96 md:text-4xl">
          Yi-An (Andy) Chang
        </h2>
        <p className=" break-words text-xl md:w-80">
          Web Developer ( Frontend / Backend )
        </p>
      </motion.div>
    </div>
  )
}

export default AboutMe
