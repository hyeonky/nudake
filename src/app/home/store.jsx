'use client'

import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

export default function Store() {
  const StoreSectionRef = useRef([])

  // store
  useEffect(() => {
    const slides = StoreSectionRef.current.querySelectorAll('.slide-list')
    const containers =
      StoreSectionRef.current.querySelectorAll('.image-container')
    const texts = StoreSectionRef.current.querySelectorAll('.store-text')

    slides.forEach((slide, index) => {
      const container = containers[index]
      const text = texts[index]

      gsap.to(slide, {
        y: '-10%', // 슬라이드 이동 효과
        ease: 'none',
        scrollTrigger: {
          trigger: slide,
          start: 'top top',
          end: 'bottom 30%',
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      })

      if (container) {
        gsap.to(container, {
          opacity: 1, // 컨테이너의 추가 애니메이션 (필요 시 수정 가능)
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: 'bottom 30%',
            scrub: true,
          },
        })
      }

      if (text) {
        gsap.to(text, {
          y: '0%', // 텍스트 추가 애니메이션
          ease: 'none',
          scrollTrigger: {
            trigger: text,
            start: 'top bottom',
            end: 'bottom 30%',
            scrub: true,
          },
        })
      }
    })
  }, [])

  return (
    <section
      className="section store flex flex-col py-[10VW] h-[550vh] overflow-hidden bg-[#f7f6f2]"
      ref={StoreSectionRef}>
      <div className="store-heading flex flex-col justify-start items-center mt-24 px-16 ">
        <div className="store-heading text-7xl leading-normal flex flex-row">
          <h2 className="font-bold text-[#342F2D]">Store</h2>
        </div>
        <p className="store-text text-center text-md font-light break-words pt-3">
          Experience the unique spaces, each thoughtfully designed with
          different themes, now available at Nudaike.
          <br />A place filled with new charm.
        </p>
      </div>
      <div className="store-cont flex flex-col rounded-xl mt-24 relative">
        {/* slide-list1 */}
        <Link href="#">
          <div className="slide-list sticky h-screen z-0">
            <div className="store-text absolute top-1/3 left-52 text-[#F2F2EF] z-10">
              <p className="text-2xl font-normal">KOREA</p>
              <h2 className="pt-1 text-5xl font-bold"> DOSAN</h2>
            </div>
            <div className="image-container rounded-xl shadow-md mb-6 fixed top-1/3 right-32 z-10">
              <Image
                src="/images/pattern/main/store1.png"
                width={500}
                height={500}
                alt="코타"
                className="w-full h-[30vh] rounded-xl"
              />
            </div>
            <div className="store-bg w-full h-auto px-16 object-cover rounded-xl overflow-hidden sticky">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <Image
                  src="/images/pattern/main/store1.png"
                  width={1200}
                  height={1200}
                  alt="코타"
                  className="h-[100vh] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Link>

        {/* slide-list2 */}
        <Link href="#">
          <div className="slide-list sticky h-screen z-10">
            <div className="store-text text-5xl font-bold absolute top-1/3 left-52 text-[#b82822] z-10">
              <p className="text-2xl font-normal">KOREA</p>
              <h2 className="pt-1 text-5xl font-bold">SEONGSU</h2>
            </div>

            <div className="image-container rounded-xl shadow-md mb-6 fixed top-1/3 right-32 z-10">
              <Image
                src="/images/pattern/main/store2.png"
                width={500}
                height={500}
                alt="코타"
                className="w-full h-[30vh] rounded-xl"
              />
            </div>

            <div className="store-bg w-full h-auto px-16 object-cover rounded-xl overflow-hidden sticky">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <Image
                  src="/images/pattern/main/store2.png"
                  width={1200}
                  height={1200}
                  alt="코타"
                  className="h-[100vh] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Link>

        {/* slide-list3 */}
        <Link href="#">
          <div className="slide-list sticky h-screen z-20">
            <div className="store-text absolute top-1/3 left-52 text-[#7B3010] z-10">
              <p className="text-2xl font-normal">KOREA</p>
              <h2 className="pt-1 text-5xl font-bold">SINSA</h2>
            </div>

            <div className="image-container rounded-xl shadow-md mb-6 fixed top-1/3 right-32 z-10">
              <Image
                src="/images/pattern/main/store3.png"
                width={500}
                height={500}
                alt="코타"
                className="w-full h-[30vh] rounded-xl"
              />
            </div>

            <div className="store-bg w-full h-auto px-16 object-cover rounded-xl overflow-hidden sticky">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <Image
                  src="/images/pattern/main/store3.png"
                  width={1200}
                  height={1200}
                  alt="코타"
                  className="h-[100vh] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Link>

        {/* slide-list4 */}
        <Link href="#">
          <div className="slide-list sticky h-screen z-30">
            <div className="store-text absolute top-1/3 left-52 glow-neon z-10">
              <p className="text-2xl font-normal">CHINA</p>
              <h2 className="pt-1 text-5xl font-bold">SHANGHAI</h2>
            </div>

            <div className="image-container rounded-xl shadow-md mb-6 fixed top-1/3 right-32 z-10">
              <Image
                src="/images/pattern/main/store4.png"
                width={500}
                height={500}
                alt="코타"
                className="w-full h-[30vh] rounded-xl"
              />
            </div>

            <div className="store-bg w-full h-auto px-16 object-cover rounded-xl overflow-hidden sticky ">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <Image
                  src="/images/pattern/main/store4.png"
                  width={1200}
                  height={1200}
                  alt="코타"
                  className="h-[100vh] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
