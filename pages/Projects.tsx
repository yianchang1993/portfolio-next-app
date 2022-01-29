import React from 'react';
import Projects from '../components/Projects'

function ProjectsPage() {
  return(
    <div className=" bg-backgoundColor overflow-scroll ">
    {/* bg-red-50 */}
      <div className="
       flex justify-center items-center md:px-40 space-y-5 h-screen">
        <Projects/>
      </div>
    </div>
  )
}

export default ProjectsPage;
