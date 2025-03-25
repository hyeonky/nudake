import React, { useEffect, useRef } from 'react'

export default function Text() {
  return (
    <section className="section textIcon py-[10VW] bg-[#f9f9f9]">
      <div className="flex items-center justify-center h-screen">
        <div className="textOpacity_tit mx-auto pt-4 w-3/5  text-center space-x-2 text-5xl leading-normal text-[#342F2D]">
          <h2>Our desserts are more than treats</h2>
          <h2>They’re an experience.</h2>
          <span className="text-normal text-sxl ">
            Experience our creations!
          </span>
        </div>
      </div>
      {/* <iframe title="vimeo-player" src="https://player.vimeo.com/video/1032223745?h=041d829694" width="640" height="360" frameborder="0" allowfullscreen></iframe> */}
    </section>
  )
}
