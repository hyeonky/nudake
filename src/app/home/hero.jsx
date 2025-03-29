'use client'

import { useState } from 'react'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const puzzlePiecesRef = useRef([])

  gsap.registerPlugin(ScrollTrigger)

  // puzzle
  useEffect(() => {
    // 이미지가 하나씩 순차적으로 나타나는 애니메이션
    gsap.fromTo(
      puzzlePiecesRef.current,
      { opacity: 0, y: 20 },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        delay: '.puzzle-piece' * 0.5,
        ease: 'power2.out',
      }
    )
  }, [])

  return (
    <div id="wrap">
      <section className="section h-screen pb-[10VW] bg-[#f9f9f9]">
        <div className="intro-text flex justify-between items-center gap-8 mt-24 pt-10 px-16">
          <div className="intro-heading text-5xl leading-normal ">
            <h2>Art &</h2>
            <h2 className="font-extrabold text-[#bd1a1a]">Fashion</h2>
          </div>
          <p className="text-xl leading-normal font-light w-[500px] text-left	">
            With NUDAKE, <br />
            We combine art and fashion to craft unique desserts. Every creation
            offers an experience that sparks a new realm of fantasy.
          </p>
        </div>

        <div
          className="puzzle-container grid grid-cols-4 grid-rows-2 gap-3 box-border relative w-full h-[40vw] p-16 object-contain"
          ref={puzzlePiecesRef}>
          <Link href="#">
            <div className="puzzle-piece w-full h-full flex justify-center items-center relative">
              <Image
                src="/images/pattern/main/desserts8.png"
                width={500}
                height={500}
                className="object-cover w-3/4 h-full hover:scale-125 hover:transition-all hover:duration-300"
                alt="Puzzle Piece 1"
              />
            </div>
          </Link>
          <Link href="#">
            <div className="puzzle-piece w-full h-full flex justify-center items-center relative">
              <Image
                src="/images/pattern/main/desserts2.png"
                width={500}
                height={500}
                className="object-cover w-3/4 h-full hover:scale-125 hover:transition-all hover:duration-300"
                alt="Puzzle Piece 2"
              />
            </div>
          </Link>
          <Link href="#">
            <div className="puzzle-piece w-full h-full flex justify-center items-center relative">
              <Image
                src="/images/pattern/main/desserts3.png"
                width={500}
                height={500}
                className="object-cover w-3/4 h-full hover:scale-125 hover:transition-all hover:duration-300"
                alt="Puzzle Piece 3"
              />
            </div>
          </Link>
          <Link href="#">
            <div className="puzzle-piece w-full h-full flex justify-center items-center relative">
              <Image
                src="/images/pattern/main/desserts4.png"
                width={500}
                height={500}
                className="object-cover w-3/4 h-full hover:scale-125 hover:transition-all hover:duration-300"
                alt="Puzzle Piece 4"
              />
            </div>
          </Link>
          <Link href="#">
            <div className="puzzle-piece w-full h-full flex justify-center items-center relative">
              <Image
                src="/images/pattern/main/desserts14.png"
                width={500}
                height={500}
                className="object-cover w-3/4 h-full hover:scale-125 hover:transition-all hover:duration-300"
                alt="Puzzle Piece 5"
              />
            </div>
          </Link>
          <Link href="#">
            <div className="puzzle-piece w-full h-full flex justify-center items-center relative">
              <Image
                src="/images/pattern/main/desserts15.png"
                width={500}
                height={500}
                className="object-cover w-3/4 h-full hover:scale-125 hover:transition-all hover:duration-300"
                alt="Puzzle Piece 6"
              />
            </div>
          </Link>
          <Link href="#">
            <div className="puzzle-piece w-full h-full flex justify-center items-center relative">
              <Image
                src="/images/pattern/main/desserts10.png"
                width={500}
                height={500}
                className="object-cover w-3/4 h-full hover:scale-125 hover:transition-all hover:duration-300"
                alt="Puzzle Piece 7"
              />
            </div>
          </Link>
          <Link href="#">
            <div className="puzzle-piece w-full h-full flex justify-center items-center relative">
              <Image
                src="/images/pattern/main/desserts17.png"
                width={500}
                height={500}
                className="object-cover w-3/4 h-full hover:scale-125 hover:transition-all hover:duration-300"
                alt="Puzzle Piece 8"
              />
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
