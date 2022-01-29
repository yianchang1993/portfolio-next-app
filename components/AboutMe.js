import React from 'react'
import Image from 'next/image'
import DP from '../img/DP.svg'

function AboutMe() {
  return (
    <div className="md:flex justify-center ">
      <div className=" w-96  p-10 md:w-2/6  ">
        <h2 className="text-2xl font-bold">Yi-An (Andy) Chang</h2>
        <p>Web Developer ( Frontend / Backend )</p>
      </div>
      <div className="flex items-center p-3 justify-center ">
        <Image
          className="border rounded-full border-white"
          layout="fixed"
          src={DP}
          alt="profile-photo"
          width="100"
          height="100"
        />
      </div>
    </div>
  )
}

export default AboutMe
