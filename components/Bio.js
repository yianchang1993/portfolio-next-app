import React from 'react'

function Bio() {
  return (
    <div className="py-10">
      <div className="px-4">
        <h2 className="text-lg font-bold underline decoration-solid">Bio</h2>
      </div>
      <br />
      <div className="flex justify-center">
        <div className="grid grid-cols-2 items-center justify-center space-y-5 p-10 md:w-2/3">
          <p className="text-lg font-bold">2015</p>
          <p className="px-2 pb-5">FJU Bachelor of Electrical Engineering</p>
          <p className="text-lg font-bold">2019</p>
          <p className="px-2">QUT IT Master Degree</p>
          <p className="text-lg font-bold">2020 to Present</p>
          <p className="px-2">Software Engineer at My Community Directory</p>

          {/* some bio stuffsome bio stuffsome bio stuffsome bio stuffsome bio
        stuffsome bio stuffsome bio stuffsome bio stuffsome bio stuffsome bio
        stuffsome bio stuffsome bio stuffsome bio stuffsome bio stuffsome bio
        stuffsome bio stuffsome bio stuffsome bio stuffsome bio stuffsome  bio stuffsome  bio stuffsome  bio stuffsome  bio stuffsome  bio stuffsome  bio stuffsome  bio stuffsome  bio stuffsome  bio stuffsome  bio stuffsome  bio stuffsome  bio stuffsome  bio stuffsome  bio stuff */}
        </div>
      </div>
    </div>
  )
}

export default Bio
