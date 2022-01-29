import React from 'react'
import Image from 'next/image'
import DP from '../img/DP.svg'

function AboutMe() {
  return (
    <div className="lg:flex justify-center ">
      <div className="flex items-center p-3 justify-center">
        <img
          className="border-2 rounded-full border-white w-70 h-70 md:w-48 md:h-48
          "
          layout="intrinsic"
          src='https://i.imgur.com/exG81pU.png'
          alt="profile-photo"
        />
      </div>
      <div className="w-75 p-10 md:w-2/6">
        <h2 className="text-2xl font-bold md:text-4xl  md:w-96 break-words">Yi-An (Andy) Chang</h2>
        <p className=" break-words text-xl md:w-80">Web Developer ( Frontend / Backend )</p>
      </div>
    </div>
  )
}

export default AboutMe
