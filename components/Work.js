import React from 'react'

function Work() {
  return (
    <div className="py-10 ">
      <div className="px-4">
        <h2 className="text-lg font-bold underline decoration-solid">
          About me{' '}
        </h2>
      </div>
      <br />
      <p className="px-4 text-2xl m-3">
        I am a Full-stack developer based in Brisbane. With the passion of
        technoloy, I love to solve any kinds of business problems based on my
        experiences and skills. I am also eager to learn new technology in order
        to deliver best solutions for business.
      </p>
      <br />
      <div className="flex justify-center">
        <button
          className=" h-10 w-48 rounded-lg bg-blue-400 text-white hover:bg-blue-300"
          onClick={() =>
            (window.location =
              'https://www.linkedin.com/in/yi-an-andy-chang-53649bb3/')
          }
        >
          My Linkedin
        </button>
      </div>
    </div>
  )
}

export default Work
