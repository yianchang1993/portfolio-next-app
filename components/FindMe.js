import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

function FindMe() {
  return (
    <div className="py-5">
      <div className="px-4">
        <h2 className="text-lg font-bold underline decoration-solid">
          Find Me :)
        </h2>
      </div>
      <br />
      <div className="px-16">
        <div>
          <button className="flex h-10 w-48 items-center justify-center  space-x-3 rounded text-green-600 hover:bg-blue-300 hover:text-white"
          onClick={()=>window.location='https://google.com'} >
            <GitHubIcon /> <p>GitHub</p>
          </button>
        </div>
        <div>
          <button className="flex h-10 w-48 items-center justify-center space-x-3 rounded text-green-600 hover:bg-blue-300 hover:text-white"
          onClick={()=>window.location='https://google.com'}>
            <LinkedInIcon />
            <p>LindedIn</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default FindMe
