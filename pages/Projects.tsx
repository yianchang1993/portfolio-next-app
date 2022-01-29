import React from 'react';
import Projects from '../components/Projects'
import Head from 'next/head'


function ProjectsPage() {
  return(
    <div className=" bg-backgoundColor ">
      <Head>
        <title>Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    {/* bg-red-50 */}
      <div className="
       flex justify-center items-center md:px-40 space-y-5 h-screen overflow-scroll ">
        <Projects/>
      </div>
      
    </div>
  )
}

export default ProjectsPage;
