import React from 'react'
// import {projectsConsts} from '../constants/project'

export const projects = [
  {
    title: 'Sporify Clone',
    description:
      'Using Next.js TailwindCss and NextAuth to build a clone page of Spotify. Using SpotifyApi to fetch playlist info and control music',
    image: 'https://i.imgur.com/Puq3QdX.png',
    tags: ['Next.js', 'tailwindcss', 'React', 'SpotifyAPI', 'nextauth'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 0,
  },
  {
    title: 'WebRTC App',
    description: "Using React for single page front-end, socket.io for back-end to buidl React Video Chat Application using WebRTC.",
      image: 'https://i.imgur.com/vvsAg99.png',
      tags: ['React', 'WebRTC'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 2,
  },
]

function Projects() {
  return (
    <div className="py-10">
      <div className="px-4">
        <h2 className="mt-80 md:mt-1 text-lg font-bold underline decoration-solid">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {projects.map((project, i) => (
            <div className="flex justify-center">
            <div key={i} className="pt-10 cursor-pointer">
              <img className="m-10 h-40 w-80 rounded-lg sm:h-48 " src={project.image} />
              <div className="pt-5 font-bold flex justify-center">
                <h3>{project.title}</h3>
              </div>
              <div className="w-96 ml-3">
                <p className="m-10 break-words">{project.description}</p>
              </div>
            </div>
            </div>
            
          ))}
        </div>
      </div>
      <br />
    </div>
  )
}

export default Projects
