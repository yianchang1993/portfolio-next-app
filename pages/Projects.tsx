import React from 'react';
import Projects from '../components/Projects'

function ProjectsPage() {
  return(
    <div className=" bg-backgoundColor overflow-hidden">
    {/* bg-red-50 */}
      <div className="
       flex justify-center items-center md:px-40 space-y-5 ">
        <Projects/>
      </div>
    </div>
  )
}

export default ProjectsPage;
