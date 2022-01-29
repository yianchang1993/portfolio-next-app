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
        <h2 className="text-lg font-bold underline decoration-solid">
          Projects
        </h2>
        <div className="grid grid-cols-2">
          {projects.map((project, i) => (
            <div key={i} className="p-10">
              <img className="h-48 w-96 rounded-lg" src={project.image} />
              <div className="pt flex w-96 justify-center pt-5 font-bold">
                <h3>{project.title}</h3>
              </div>
              <div className="w-96 p-5">
                <p>{project.description}</p>
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
