'use client'

import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Flipcard from '@/components/flipcard/Flipcard'

export default function Project() {
  const ProjectsSectionRef = useRef([])

  gsap.registerPlugin(ScrollTrigger)

  // ProjectsSection
  useEffect(() => {
    const section = ProjectsSectionRef.current
    const textElements = section.querySelectorAll('.Projects-text')

    textElements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 1,
          y: 200,
        },
        {
          y: 0,
          duration: 1,
          stagger: 1,
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
  })

  return (
    <section
      className="section ProjectsSection py-[10VW] bg-[#f9f9f9]"
      ref={ProjectsSectionRef}>
      <div className="pro-cont px-16">
        <div className="Projects-heading flex justify-start items-center mt-24">
          <div className="Projects-heading text-7xl leading-normal flex flex-row">
            <h2 className="font-normal">
              Projects <span className="text-[#bd1a1a]">x</span> Artists
            </h2>
          </div>
        </div>
        <div className="card-cont flex flex-col">
          {/* card1 */}
          <div className="cardList relative my-20">
            <Flipcard
              imageSrc="/images/pattern/main/artists1.png"
              videoSrc="https://player.vimeo.com/video/1031021629?h=a67d274315&autoplay=1&loop=1&background=1&muted=1"
            />
            <div className="Projects-text absolute top-1/3 left-1/3">
              <div className="textarea flex flex-col text-left w-[400px] mt-20 ">
                <strong className=" font-normal text-2xl text-zinc-700">
                  2024 COLLABORATION
                </strong>
                <span className=" font-bold text-4xl text-[#bd1a1a] pt-4">
                  NUDAKE ♡ JENNIE
                </span>
                <p className="Projects-desc text-md font-light break-words pt-3">
                  &#39;Nudake♡Jennie &#39; is a special collaboration pop-up
                  store presented by Nudake and Jennie. From four desserts
                  celebrating Jennie &#39;s first solo album to a space that
                  captures her various charms, visitors can experience new
                  moments throughout the pop-up store.
                </p>
              </div>
            </div>
          </div>

          {/* card2 */}
          <div className="cardList relative my-20">
            <div className="flex justify-end">
              <Flipcard
                imageSrc="/images/pattern/main/artists2.png"
                videoSrc="https://player.vimeo.com/video/929439503?&autoplay=1&loop=1&background=1&muted=1"
              />
            </div>
            <div className="Projects-text absolute top-1/3 left-0 ">
              <div className="textarea flex flex-col text-left w-[400px] mt-20 ">
                <strong className=" font-normal text-2xl text-zinc-700">
                  2022 COLLABORATION
                </strong>
                <span className=" font-bold text-4xl text-[#E80000] pt-4">
                  OMG! NU+JEANS
                </span>
                <p className="Projects-desc text-md font-light break-words pt-3">
                  ‘OMG! NU+JEANS’ is a joint pop-up store by cake brand NUDAKE
                  and K-pop stars NewJeans, coinciding with their comeback
                  single &#39;OMG &#39;. Dominating the space is an oversized
                  rabbit sculpture, reaching the height of a two-story building,
                  infusing the atmosphere with its charming yet imposing
                  presence. The creative touches spread across the store
                  effortlessly encapsulate the essence of winter delight,
                  curated by NUDAKE and NewJeans.
                </p>
              </div>
            </div>
          </div>

          {/* card3 */}
          <div className="cardList relative my-20">
            <div className="flex justify-center">
              <Flipcard
                imageSrc="/images/pattern/main/artists3.png"
                videoSrc="https://player.vimeo.com/video/929442157?&autoplay=1&loop=1&background=1&muted=1"
              />
            </div>
            <div className="Projects-text absolute top-1/3 right-0">
              <div className="textarea flex flex-col text-left w-[400px] mt-20">
                <strong className=" font-normal text-2xl text-zinc-700">
                  2023 STORE OPEN
                </strong>
                <span className=" font-bold text-4xl text-[#7B3010] pt-4">
                  SINSA
                </span>
                <p className="Projects-desc text-md font-light break-words pt-3">
                  NUDAKE’s third flagship store, ‘The Croissant’, opened in
                  Sinsa on September 8, 2023, featuring a variety of menus that
                  give a fresh take on croissants. Inspired by the convenient
                  size and diverse flavors of rice balls, the signature menu,
                  ‘Oniwassant’, offers a customizable experience akin to its
                  rice-based counterpart. With options for flavor and shape
                  tailored to individual preferences, the seaweed wrapping not
                  only adds visual appeal but also enhances the culinary delight
                  with its savory essence.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="btn-coll flex justify-center items-center w-full mt-2">
          <Link href="#" className="hover:no-underline">
            <button className="flex justify-center items-center w-[110px] h-[40px] p-4 text-md font-light bg-[#f9f9f9] hover:bg-[#d7d7c7] rounded-[5rem] shadow-md transition relative z-20">
              All Project
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
