import React from 'react';
import Projects from '../components/Projects'

function ProjectsPage() {
  return(
    <div className=" bg-backgoundColor h-screen ">
    {/* bg-red-50 */}
      <div className="
       mx-16 md:px-40 space-y-5 overflow-hidden">
        <Projects/>
      </div>
    </div>
  )
}

export default ProjectsPage;
