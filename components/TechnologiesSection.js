import React from 'react'
import { motion } from 'framer-motion'

function TechnologiesSection() {
  return (
    <div>
      <div className="px-4 pt-28 md:px-20">
        <h2 className="text-lg font-bold underline decoration-solid md:mt-1">
          Tech Stack
        </h2>
        <div className="w-screen space-x-5 sm:flex">
          <div className="py-10">
            <ul className="grid w-60 grid-cols-2 sm:w-96 sm:grid-cols-3 ">
              <motion.li whileHover={{ scale: 0.9 }}>
                <div className="m-1 flex h-12 items-center justify-center rounded-lg bg-blue-200">
                  HTML
                </div>
              </motion.li>
              <motion.li whileHover={{ scale: 0.9 }}>
                <div className="m-1 flex h-12 items-center justify-center rounded-lg bg-blue-200">
                  JavaScript
                </div>
              </motion.li>
              <motion.li whileHover={{ scale: 0.9 }}>
                <div className="m-1 flex h-12 items-center justify-center rounded-lg bg-blue-200">
                  CSS
                </div>
              </motion.li>
              <motion.li whileHover={{ scale: 0.9 }}>
                <div className="m-1 flex h-12 items-center justify-center rounded-lg bg-blue-200">
                  TailwindCss
                </div>
              </motion.li>
              <motion.li whileHover={{ scale: 0.9 }}>
                <div className="m-1 flex h-12 items-center justify-center rounded-lg bg-blue-200">
                  React
                </div>
              </motion.li>
              <motion.li whileHover={{ scale: 0.9 }}>
                <div className="m-1 flex h-12 items-center justify-center rounded-lg bg-blue-200">
                  NEXT.js
                </div>
              </motion.li>
              <motion.li whileHover={{ scale: 0.9 }}>
                <div className="m-1 flex h-12 items-center justify-center rounded-lg bg-blue-200">
                  Material UI
                </div>
              </motion.li>
              <motion.li whileHover={{ scale: 0.9 }}>
                <div className="m-1 flex h-12 items-center justify-center rounded-lg bg-blue-200">
                  C#
                </div>
              </motion.li>
              <motion.li whileHover={{ scale: 0.9 }}>
                <div className="m-1 flex h-12 items-center justify-center rounded-lg bg-blue-200">
                  ASP.NET
                </div>
              </motion.li>
              <motion.li whileHover={{ scale: 0.9 }}>
                <div className="m-1 flex h-12 items-center justify-center rounded-lg bg-blue-200">
                  .Net Core
                </div>
              </motion.li>
              <motion.li whileHover={{ scale: 0.9 }}>
                <div className="m-1 flex h-12 items-center justify-center rounded-lg bg-blue-200">
                  <p className="p-5">Microsoft Azure</p>
                </div>
              </motion.li>
            </ul>
          </div>
          <div className="sm:pl-48">
            <img
              className="h-60 w-60 md:w-96 md:h-96"
              src="https://i.imgur.com/0PtuOzD.png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnologiesSection
