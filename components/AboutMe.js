import React from 'react'
import Image from 'next/image'
import DP from '../img/DP.svg'

function AboutMe() {
  return (
    <div className="md:flex justify-center ">
      <div className=" w-96 p-10 md:w-2/6  ">
        <h2 className="text-2xl font-bold w-1/2 md:w-96 break-words">Yi-An (Andy) Chang</h2>
        <p className="w-5/6 break-words">Web Developer ( Frontend / Backend )</p>
      </div>
      <div className="flex items-center p-3 justify-center">
        <img
          className=" border rounded-full border-white"
          layout="intrinsic"
          src='https://i.imgur.com/exG81pU.png'
          alt="profile-photo"
          width="100"
          height="100"
        />
      </div>
    </div>
  )
}

export default AboutMe
