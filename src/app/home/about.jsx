'use client'

import { useState } from 'react'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

export default function About() {
  const FantasySectionRef = useRef([])

  gsap.registerPlugin(ScrollTrigger)

  // FantasySection
  useEffect(() => {
    const section = FantasySectionRef.current
    const textElements = section.querySelectorAll(
      '.Fantasy-desc span, .img-desc span'
    )

    textElements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: {
            textElements,
            duration: 1.5,
            y: 0,
            ease: 'power4.easeOut',
          },
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 0%',
            toggleActions: 'restart none none reset',
            // markers: true,
            onLeave: () => {
              gsap.set(element, { opacity: 1, y: 0 })
            },
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      className="section FantasySection h-screen py-[10VW] bg-[#f9f9f9]"
      ref={FantasySectionRef}>
      <div className="Fantasy-heading flex justify-start items-center px-16 ">
        <div className="Fantasy-heading text-5xl leading-normal flex flex-row">
          <h2>
            <span className="font-extrabold text-[#2B3116]">Fantasy</span> x
            Nudake
          </h2>
        </div>
      </div>
      <div className="Fantasy-page spilt flex justify-between items-center mt-16 px-16">
        <div className="textarea break-words flex flex-col items-center justify-center">
          <div className="Fantasy-desc text-lg text-left font-light break-words w-[600px] pt-3 ">
            <span className="inline-block">
              NUDAKE is a cake brand launched by GENTLE MONSTER. We mix
            </span>
            <span className="inline-block">
              fashion and art to create never-before-seen pastries and cakes.
              While
            </span>
            <span className="inline-block">
              placing the core at cake and beverage, NUDAKE connects with the
            </span>
            <span className="inline-block">
              world in several ways, including digital content, space,
              packaging, and
            </span>
            <span className="inline-block">
              more. This enables us to effectively share our vision without
            </span>
            <span className="inline-block">compromising our values.</span>
          </div>
        </div>
        <div className="image flex flex-col justify-between items-start w-[50vh]">
          <Image
            src="/images/pattern/main/about.jpg"
            width={500}
            height={500}
            alt="코타"
            className=" w-full h-[60vh] rounded-xl "
          />
          <div className="img-desc spilt text-lg font-semibold break-words w-full pt-2">
            <span className="inline-block">
              Our exclusive patissier and barista team are constantly
            </span>
            <span className="inline-block">
              working to reinvent the idea of cake and beverage,{' '}
            </span>
            <span className="inline-block">
              aiming to create moments beyond culinary experience.
            </span>
          </div>
          <div className="btn-coll flex justify-start w-[50vh] mt-2">
            <Link href="#" className="hover:no-underline">
              <button className="flex justify-center items-center w-[110px] h-[40px] p-4 text-md font-light bg-[#f9f9f9] hover:bg-[#d7d7c7] rounded-[5rem] shadow-md transition">
                view all
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
