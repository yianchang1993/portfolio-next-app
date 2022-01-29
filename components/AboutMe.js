import React from 'react'
import Image from 'next/image'
import DP from '../img/DP.svg'

function AboutMe() {
  return (
    <div className="flex justify-center bg-green-100">
      <div className=" w-96  p-10 md:w-2/6  ">
        <h2 className="text-2xl font-bold">Yi-An (Andy) Chang</h2>
        <p>Web Developer ( Frontend / Backend )</p>
      </div>
      <div className="flex items-center px-3 ">
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
