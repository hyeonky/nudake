'use client'

import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

export default function Text() {
  return (
    <section className="section textIcon py-[10VW] bg-[#f9f9f9]">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="textOpacity_tit mx-auto pt-4 w-3/5 text-center space-x-2 text-4xl leading-normal text-[#342F2D]">
          <h2>NUDAKE is a place where your dessert fantasies come alive.</h2>
          <h2>
            We make the most unique desserts inspired by fashion, art, and your
            own sweet dreams.
          </h2>
          <span className="text-normal text-2xl ">
            Make your fantasies come true at NUDAKE.
          </span>
        </div>
        <iframe
          src="https://player.vimeo.com/video/936129713?controls=0&title=0&autoplay=1&muted=1&loop=1&autopause=0"
          frameBorder="0"
          className="w-[350px] h-[480px]"></iframe>
      </div>
    </section>
  )
}
