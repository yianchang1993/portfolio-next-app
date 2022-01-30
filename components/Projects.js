import React from 'react'
// import {projectsConsts} from '../constants/project'
import { motion } from 'framer-motion'

export const projects = [
  {
    title: 'Spotify Clone',
    description:
      'Using Next.js, TailwindCss to build a clone page of Spotify. SpotifyApi to fetch playlist info and control music. The state management is create by Recoil and the NextAuth for authentication',
    image: 'https://i.imgur.com/Puq3QdX.png',
    tags: ['Next.js', 'tailwindcss', 'React', 'SpotifyAPI', 'nextauth'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 0,
  },
  {
    title: 'WebRTC App',
    description:
      'Using React for single page front-end, socket.io for back-end to buidl React Video Chat Application using WebRTC.',
    image: 'https://i.imgur.com/vvsAg99.png',
    tags: ['React', 'WebRTC'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 2,
  },
]

function Projects() {
  return (
    <motion.div className="py-10"
    initial={{opacity: 0,y:-40}}
       animate={{opacity: 1,y:0}}
       transition={{duration:2}}>
      <div className="px-4">
        <h2 className="mt-80 text-lg font-bold underline decoration-solid md:mt-1">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div className="flex justify-center"
            whileHover={{scale:1.1}}
            >
              <div key={i} className="cursor-pointer pt-10">
                <img
                  className="m-10 h-40 w-80 rounded-lg sm:h-48 "
                  src={project.image}
                />
                <div className="flex justify-center pt-5 font-bold">
                  <h3>{project.title}</h3>
                </div>
                <div className="ml-3 w-96">
                  <p className="m-10 break-words">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <br />
    </motion.div>
  )
}
export default Projects
