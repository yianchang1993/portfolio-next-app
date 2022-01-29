import React from 'react'

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
      <div className="w-75 p-10 md:w-2/6">
        <h2 className="break-words text-2xl font-bold  md:w-96 md:text-4xl">
          Yi-An (Andy) Chang
        </h2>
        <p className=" break-words text-xl md:w-80">
          Web Developer ( Frontend / Backend )
        </p>
      </div>
    </div>
  )
}

export default AboutMe
