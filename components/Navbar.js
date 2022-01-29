import Image from 'next/image'
import React,{useState} from 'react'
import logo from '../img/Logo.svg'
import { MenuIcon } from '@heroicons/react/outline'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'

function Navbar() {
  const [open, setIsOpen] = useState(false)

  const handleOnClick = () =>{
    setIsOpen(!open)
  }

  return (
    <header className="sticky top-0 opacity-75">
      <nav
        className="flex
     h-20 items-center space-x-12 bg-orange-50 pl-10 font-mono text-black md:pl-64 "
      >
        <div className="sticky flex">
          <Image src={logo} alt="React Logo" width="50" height="50"></Image>
          <div className="px-2 text-3xl justify-center items-center font-bold md:text-5xl ">
            Yi-An Chang
          </div>
        </div>

        <ul className="ml-20 hidden space-x-5 md:inline-flex  md:space-x-10">
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
        <div className="absolute right-3 rounded hover:bg-gray-300">
          <MenuIcon className="h-10 w-10 md:hidden" onClick={handleOnClick}/>
        </div>
      </nav>
      <SwipeableDrawer anchor="right" open={open} onOpen={()=>setIsOpen(true)} onClose={()=>setIsOpen(false)}>
      <ul className="w-80 bg-backgoundColor h-screen">
        <li className="h-20 hover:bg-blue-300 cursor-pointer text-2xl font-bold"><div className="p-4">Work</div></li>
        <li className="h-20 hover:bg-blue-300 cursor-pointer text-2xl font-bold"><div className="p-4">Skill</div></li>
        <li className="h-20 hover:bg-blue-300 cursor-pointer text-2xl font-bold"><div className="p-4">Project</div></li>
      </ul>
      </SwipeableDrawer>
    </header>
  )
}

export default Navbar
