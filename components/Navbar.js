import Image from 'next/image'
import React from 'react'
import logo from '../img/Logo.svg'

function Navbar() {
  return (
    <div className="font-mono
     flex h-20 items-center pl-10 md:pl-64 space-x-12 bg-orange-50 text-black ">
      <div className="flex">
        <Image src={logo} alt="React Logo" width="50" height="50"></Image>
        <div className="px-4 text-4xl md:text-5xl font-bold ">Yi-An Chang</div>
      </div>

      <ul className="hidden space-x-5 md:inline-flex  md:space-x-10">
        <li className="cursor-pointer text-sm font-medium md:text-lg">About</li>
        <li className="cursor-pointer text-sm font-medium md:text-lg">Skill</li>
        <li className="cursor-pointer text-sm font-medium md:text-lg">
          Project
        </li>
      </ul>
    </div>
  )
}

export default Navbar
