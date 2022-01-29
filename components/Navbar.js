import Image from 'next/image'
import React from 'react'
import logo from '../img/Logo.svg'

function Navbar() {
  return (
    <header className="sticky top-0">
      <nav
        className=" flex
     h-20 items-center space-x-12 bg-orange-50 pl-10 font-mono text-black md:pl-64 "
      >
        <div className="sticky flex">
          <Image src={logo} alt="React Logo" width="50" height="50"></Image>
          <div className="px-4 text-4xl font-bold md:text-5xl ">
            Yi-An Chang
          </div>
        </div>

        <ul className="hidden space-x-5 md:inline-flex  md:space-x-10">
          <li className="cursor-pointer text-sm font-medium md:text-lg">
            Work
          </li>
          <li className="cursor-pointer text-sm font-medium md:text-lg">
            Skills
          </li>
          <li className="cursor-pointer text-sm font-medium md:text-lg">
            Project
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
