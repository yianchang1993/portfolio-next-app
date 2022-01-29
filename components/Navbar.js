import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../img/Logo.svg'
import { MenuIcon } from '@heroicons/react/outline'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Link from 'next/link'

function Navbar({ children }) {
  const [open, setIsOpen] = useState(false)

  const handleOnClick = () => {
    setIsOpen(!open)
  }

  return (
    <div>
      <header className="sticky top-0 opacity-75">
        <nav
          className="flex
     h-20 items-center space-x-12 bg-orange-50 pl-10 font-mono text-black md:pl-64 "
        >
          <Link href="/">
            <div className="sticky flex cursor-pointer">
              <Image src={logo} alt="React Logo" width="50" height="50"></Image>
              <div className="flex items-center justify-center px-2 text-3xl font-bold md:text-5xl ">
                Yi-An Chang
              </div>
            </div>
          </Link>

          <ul className="ml-20 hidden space-x-5 md:inline-flex  md:space-x-10">
            <Link href="/">
              <li className="cursor-pointer text-sm font-medium md:text-lg">
                Work
              </li>
            </Link>

            <Link href="/">
              <li className="cursor-pointer text-sm font-medium md:text-lg">
                Skills
              </li>
            </Link>

            <Link href="/Projects">
              <li className="cursor-pointer text-sm font-medium md:text-lg">
                Project
              </li>
            </Link>
          </ul>
          <div className="absolute right-3 rounded hover:bg-gray-300">
            <MenuIcon className="h-10 w-10 md:hidden" onClick={handleOnClick} />
          </div>
        </nav>
        <SwipeableDrawer
          anchor="right"
          open={open}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
        >
          <ul className="h-screen w-80 bg-backgoundColor">
            <Link href="/">
              <li className="h-20 cursor-pointer text-2xl font-bold hover:bg-blue-300" onClick={()=>setIsOpen(false)}>
                <div className="p-4">Work</div>
              </li>
            </Link>
            <Link href="/">
              <li className="h-20 cursor-pointer text-2xl font-bold hover:bg-blue-300" onClick={()=>setIsOpen(false)}>
                <div className="p-4">Skills</div>
              </li>
            </Link>
            <Link href="/Projects">
              <li className="h-20 cursor-pointer text-2xl font-bold hover:bg-blue-300" onClick={()=>setIsOpen(false)}>
                <div className="p-4">Projects</div>
              </li>
            </Link>
          </ul>
        </SwipeableDrawer>
      </header>
      {children}
    </div>
  )
}

export default Navbar
