import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../img/Logo.svg'
import { MenuIcon } from '@heroicons/react/outline'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Link from 'next/link'
import { motion } from 'framer-motion'

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
            <motion.div className="sticky flex cursor-pointer" animate={{y:0}} initial={{y:-250}}>
              <motion.div whileHover={{rotateZ:-10}} animate={{y:5}} initial={{y:-250}}>
                <Image
                  src={logo}
                  alt="React Logo"
                  width="45"
                  height="45"
                ></Image>
              </motion.div>

              <div className="flex items-center justify-center px-3 text-3xl font-bold md:text-4xl ">
                Yi-An Chang
              </div>
            </motion.div>
          </Link>

          <ul className="ml-20 hidden space-x-5 md:inline-flex md:space-x-10">
            {/* <Link href="/">
              <motion.li className="cursor-pointer text-sm font-medium md:text-lg" whileHover={{scale:1.2}}>
                Work
              </motion.li>
            </Link> */}

            <Link href="/Technologies">
              <motion.li className="cursor-pointer text-sm font-medium md:text-lg" whileHover={{scale:1.2}}>
                Technologies
              </motion.li>
            </Link>

            <Link href="/Projects">
              <motion.li className="cursor-pointer text-sm font-medium md:text-lg" whileHover={{scale:1.2}}>
                Project
              </motion.li>
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
              <li
                className="h-20 cursor-pointer text-2xl font-bold hover:bg-blue-300"
                onClick={() => setIsOpen(false)}
              >
                <div className="p-4">Home</div>
              </li>
            </Link>
            <Link href="/Technologies">
              <li
                className="h-20 cursor-pointer text-2xl font-bold hover:bg-blue-300"
                onClick={() => setIsOpen(false)}
              >
                <div className="p-4">Technologies</div>
              </li>
            </Link>
            <Link href="/Projects">
              <li
                className="h-20 cursor-pointer text-2xl font-bold hover:bg-blue-300"
                onClick={() => setIsOpen(false)}
              >
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
