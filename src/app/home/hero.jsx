'use client'

import { useState } from 'react'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Flipcard from '@/components/flipcard/Flipcard'
import Image from 'next/image'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const FantasySectionRef = useRef([])
  const ProjectsSectionRef = useRef([])
  const textOpacityRef = useRef([])

  // puzzle
  // bg-[#f7f6f2]
  gsap.registerPlugin(ScrollTrigger)

  // FantasySection
  useEffect(() => {
    const section = FantasySectionRef.current
    const textElements = section.querySelectorAll('.Fantasy-desc span, .img-desc span')

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
            markers: true,
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
            markers: true,
            onLeave: () => {
              gsap.set(element, { opacity: 1, y: 0 })
            },
          },
        }
      )
    })
  })

  // textOpacity
  useEffect(() => {
    const words = document.querySelectorAll('.word')

    // 단어 간 최소 거리 설정 (픽셀 단위, 더 가까운 간격으로 설정)
    const minDistance = 50

    // 기존 좌표를 저장하는 배열
    const positions = []

    // 겹치지 않는 좌표 생성 함수
    const generatePosition = () => {
      let isValid = false
      let x, y

      while (!isValid) {
        x = (Math.random() - 0.5) * 400 // x 범위를 줄임
        y = (Math.random() - 0.5) * 400 // y 범위를 줄임
        isValid = positions.every(([px, py]) => {
          const distance = Math.sqrt((x - px) ** 2 + (y - py) ** 2)
          return distance > minDistance
        })
      }

      positions.push([x, y]) // 새로운 좌표 저장
      return { x, y }
    }

    words.forEach((word) => {
      const { x: randomX, y: randomY } = generatePosition()
      const randomScale = Math.random() * 1.5 + 0.5 // 0.5~2 사이의 크기
      const randomRotateX = Math.random() * 180 // X축 회전 (범위 축소)
      const randomRotateY = Math.random() * 180 // Y축 회전 (범위 축소)
      const randomTranslateZ = Math.random() * 100 - 50 // Z축 이동 (-50~50 사이)

      gsap.fromTo(
        word,
        {
          opacity: 0,
          x: randomX,
          y: randomY,
          scale: randomScale,
          rotateX: randomRotateX,
          rotateY: randomRotateY,
          z: randomTranslateZ, // 3D 이동 추가
        },
        {
          opacity: 1,
          x: 0,
          y: 0, // 원래 위치로 이동
          scale: 1,
          rotateX: 0, // 정면으로 회전
          rotateY: 0,
          z: 0, // 원래 깊이로 이동
          duration: 3, // 애니메이션 지속 시간
          ease: 'power4.out', // 부드러운 애니메이션
          scrollTrigger: {
            trigger: '.textOpacity_tit', // 애니메이션을 트리거할 요소
            start: 'top bottom', // 화면 상단이 요소 중심에 도달하면 시작
            end: 'bottom top', // 화면 하단이 요소 중심에 도달하면 끝
            scrub: true, // 스크롤과 동기화
          },
        }
      )
    })
  }, [])

  return (
    <div id="wrap">
      <section className="h-[100vh] ">
        <div className="intro-text flex justify-between items-center mt-24 pt-4 px-16">
          <div className="intro-heading text-6xl leading-normal ">
            <h2>Art &</h2>
            <h2 className="font-extrabold text-[#bd1a1a]">Fashion</h2>
          </div>
          <p className="text-xl leading-normal font-light w-[500px] text-left	">
            With NUDAKE, <br />
            We combine art and fashion to craft unique desserts. Every creation offers an experience that sparks a new realm of fantasy.
          </p>
        </div>

        <div className="puzzle-container grid grid-cols-4 grid-rows-2 gap-1 box-border relative w-full h-[50vw] p-16">
          <div className="puzzle-piece w-full h-full relative ref={puzzlePiecesRef}">
            <Image src="/images/pattern/main/rouge-heel_logo_1.png" width={500} height={500} className="object-cover w-full h-full" alt="Puzzle Piece 1" />
          </div>
          <div className="puzzle-piece w-full h-full relative ref={puzzlePiecesRef}">
            <Image src="/images/pattern/main/33_1.5x.png" width={500} height={500} className="object-cover w-full h-full" alt="Puzzle Piece 2" />
          </div>
          <div className="puzzle-piece w-full h-full relative ref={puzzlePiecesRef}">
            <Image src="/images/pattern/main/cauli_cake_1_2x-100.png" width={500} height={500} className="object-cover w-full h-full" alt="Puzzle Piece 3" />
          </div>
          <div className="puzzle-piece w-full h-full relative ref={puzzlePiecesRef}">
            <Image src="/images/pattern/main/코타.png" width={500} height={500} className="object-cover w-full h-full" alt="Puzzle Piece 4" />
          </div>
          <div className="puzzle-piece w-full h-full relative ref={puzzlePiecesRef}">
            <Image src="/images/pattern/main/cameo_logo_1.jpg" width={500} height={500} className="object-cover w-full h-full" alt="Puzzle Piece 5" />
          </div>
          <div className="puzzle-piece w-full h-full relative ref={puzzlePiecesRef}">
            <Image src="/images/pattern/main/15.png" width={500} height={500} className="object-cover w-full h-full" alt="Puzzle Piece 6" />
          </div>
          <div className="puzzle-piece w-full h-full relative ref={puzzlePiecesRef}">
            <Image src="/images/pattern/main/6.png" width={500} height={500} className="object-cover w-full h-full" alt="Puzzle Piece 7" />
          </div>
          <div className="puzzle-piece w-full h-full relative ref={puzzlePiecesRef}">
            <Image src="/images/pattern/main/6.png" width={500} height={500} className="object-cover w-full h-full" alt="Puzzle Piece 8" />
          </div>
        </div>
      </section>
      <section className="FantasySection my-32" ref={FantasySectionRef}>
        <div className="Fantasy-heading flex justify-start items-center px-16 ">
          <div className="Fantasy-heading text-6xl leading-normal flex flex-row">
            <h2>
              <span className="font-extrabold text-[#2B3116]">Fantasy</span> x Nudake
            </h2>
          </div>
        </div>
        <div className="Fantasy-page spilt flex justify-between items-center mt-16 px-16">
          <div className="textarea break-words flex flex-col items-center justify-center">
            <div className="Fantasy-desc text-lg text-left font-light break-words w-[600px] pt-3 ">
              <span className="inline-block">NUDAKE is a cake brand launched by GENTLE MONSTER. We mix</span>
              <span className="inline-block">fashion and art to create never-before-seen pastries and cakes. While</span>
              <span className="inline-block">placing the core at cake and beverage, NUDAKE connects with the</span>
              <span className="inline-block">world in several ways, including digital content, space, packaging, and</span>
              <span className="inline-block">more. This enables us to effectively share our vision without</span>
              <span className="inline-block">compromising our values.</span>
            </div>
          </div>
          <div className="image flex flex-col justify-between items-start w-[50vh]">
            <Image src="/images/pattern/main/img_xl.jpg" width={500} height={500} alt="코타" className=" w-full h-[60vh] rounded-xl " />
            <div className="img-desc spilt text-lg font-semibold break-words w-full pt-2">
              <span className="inline-block">Our exclusive patissier and barista team are constantly</span>
              <span className="inline-block">working to reinvent the idea of cake and beverage, </span>
              <span className="inline-block">aiming to create moments beyond culinary experience.</span>
            </div>
            <div className="btn-coll flex justify-start w-[50vh] mt-2">
              <Link href="#" className="hover:no-underline">
                <button className="flex justify-center items-center w-[90px] h-[36px] p-4 text-md font-light bg-[#f9f9f9] hover:bg-zinc-200 rounded-[5rem] shadow-md transition">view all</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="ProjectsSection my-32" ref={ProjectsSectionRef}>
        <div className="Projects-heading flex justify-start items-center mt-24 px-16 ">
          <div className="Projects-heading text-7xl leading-normal flex flex-row">
            <h2 className="font-normal">
              Projects <span className="text-[#bd1a1a]">x</span> Artists
            </h2>
          </div>
        </div>

        {/* card1 */}

        <div className="cardList relative">
          {/* <div className="Fantasy-img w-[50vh] mt-20 px-16">
            <Img src="/images/pattern/main/jennie_popup_3_pc.png" alt="코타" className="h-[50vh] rounded-xl" />
          </div> */}
          <Flipcard imageSrc="/images/pattern/main/jennie_popup_3_pc.png" videoSrc="https://player.vimeo.com/video/1031021629?h=a67d274315&autoplay=1&loop=1&background=1&muted=1" />

          <div className="Projects-text absolute top-1/3 left-1/3">
            <div className="textarea flex flex-col text-left w-[400px] mt-20 ">
              <strong className=" font-normal text-xl">2024 COLLABORATION</strong>
              <span className=" font-bold text-3xl text-[#bd1a1a] pt-4">NUDAKE ♡ JENNIE</span>
              <p className="Projects-desc text-md font-light break-words pt-3">
                'Nudake♡Jennie' is a special collaboration pop-up store presented by Nudake and Jennie. From four desserts celebrating Jennie's first solo album to a space that captures her various charms, visitors can experience new moments throughout the pop-up store.
              </p>
            </div>
          </div>
        </div>

        {/* card2 */}
        <div className="cardList relative">
          {/* <div className="Fantasy-img w-[50vh] mt-20 px-16 ml-auto">
            <Img src="/images/pattern/main/nujeans_12.png" alt="코타" className="h-[50vh] rounded-xl" />
          </div> */}
          <div className="flex justify-end px-44">
            <Flipcard imageSrc="/images/pattern/main/nujeans_12.png" videoSrc="https://player.vimeo.com/video/929439503?&autoplay=1&loop=1&background=1&muted=1" />
          </div>
          <div className="Projects-text absolute top-1/3 left-16 ">
            <div className="textarea flex flex-col text-left w-[400px] mt-20 ">
              <strong className=" font-normal text-xl">2022 COLLABORATION</strong>
              <span className=" font-bold text-3xl text-[#E80000] pt-4">OMG! NU+JEANS</span>
              <p className="Projects-desc text-md font-light break-words  pt-3">
                ‘OMG! NU+JEANS’ is a joint pop-up store by cake brand NUDAKE and K-pop stars NewJeans, coinciding with their comeback single 'OMG'. Dominating the space is an oversized rabbit sculpture, reaching the height of a two-story building, infusing the atmosphere with its charming yet
                imposing presence. The creative touches spread across the store effortlessly encapsulate the essence of winter delight, curated by NUDAKE and NewJeans.
              </p>
            </div>
          </div>
        </div>

        {/* card3 */}
        <div className="cardList relative">
          {/* <div className="Fantasy-img w-[50vh] mt-20 pt-6 px-16 mx-auto">
            <Img src="/images/pattern/main/sinsa_8_0.65x.png" alt="코타" className="h-[50vh] rounded-xl" />
          </div> */}
          <div className="flex justify-center mr-44">
            <Flipcard imageSrc="/images/pattern/main/sinsa_8_0.65x.png" videoSrc="https://player.vimeo.com/video/929442157?&autoplay=1&loop=1&background=1&muted=1" />
          </div>
          <div className="Projects-text absolute top-1/3 right-16">
            <div className="textarea flex flex-col text-left w-[400px] mt-20 ">
              <strong className=" font-normal text-xl">2023 STORE OPEN</strong>
              <span className=" font-bold text-3xl text-[#7B3010] pt-4">SINSA</span>
              <p className="Projects-desc text-md font-light break-words  pt-3">
                NUDAKE’s third flagship store, ‘The Croissant’, opened in Sinsa on September 8, 2023, featuring a variety of menus that give a fresh take on croissants. Inspired by the convenient size and diverse flavors of rice balls, the signature menu, ‘Oniwassant’, offers a customizable
                experience akin to its rice-based counterpart. With options for flavor and shape tailored to individual preferences, the seaweed wrapping not only adds visual appeal but also enhances the culinary delight with its savory essence.
              </p>
            </div>
          </div>
        </div>
        <div className="btn-coll flex justify-center items-center w-full mt-32">
          <Link href="#" className="hover:no-underline">
            <button className="flex justify-center items-center w-[120px] h-[36px] p-4 text-md font-light bg-[#F5F6F5] hover:bg-zinc-200 rounded-[5rem] shadow-md">All Project</button>
          </Link>
        </div>
      </section>
      <section className="textOpacity h-[200vh] my-32 bg-[#f7f6f2] flex justify-center relative">
        <div className="sticky top-1/2 transform translate-y-1/2 w-full">
          <div className="textOpacity_tit mx-auto w-3/5 text-center space-x-2 text-5xl leading-normal">
            <span className="word inline-block">At</span>
            <span className="word inline-block">NUDAKE,</span>
            <span className="word inline-block">we</span>
            <span className="word inline-block">blur</span>
            <span className="word inline-block">the</span>
            <span className="word inline-block">lines</span>
            <span className="word inline-block">between</span>
            <span className="word inline-block">art</span>
            <span className="word inline-block">and</span>
            <span className="word inline-block">dessert.</span>
            <span className="word inline-block">Each</span>
            <span className="word inline-block">masterpiece</span>
            <span className="word inline-block">is</span>
            <span className="word inline-block">a</span>
            <span className="word inline-block">gateway</span>
            <span className="word inline-block">to</span>
            <span className="word inline-block">imagination,</span>
            <span className="word inline-block">blending</span>
            <span className="word inline-block">aesthetics</span>
            <span className="word inline-block">to</span>
            <span className="word inline-block">awaken</span>
            <span className="word inline-block">new</span>
            <span className="word inline-block">dreams.</span>
          </div>
        </div>
      </section>
      <section className="store my-32">
        <div className="store-heading flex flex-col justify-start items-center mt-24 px-16 ">
          <div className="store-heading text-7xl leading-normal flex flex-row">
            <h2 className="font-bold text-[#342F2D]">Store</h2>
          </div>
          <p className="store-text text-center text-md font-light break-words pt-3">
            Experience the unique spaces, each thoughtfully designed with different themes, now available at Nudaike.
            <br />A place filled with new charm.
          </p>
        </div>
        <div className="store-cont flex justify-center items-center rounded-xl mt-24 ">
          <Link href="#">
            {/* slide-list1 */}
            <div className="slide-list relative">
              <div className="store-text absolute top-1/3 left-52 text-[#F2F2EF] z-10">
                <p className="text-2xl font-normal">KOREA</p>
                <h2 className="pt-1 text-5xl font-bold"> DOSAN</h2>
              </div>
              <div className="image-container rounded-xl shadow-md mb-6 absolute top-1/3 right-32 z-10">
                <Image src="/images/pattern/main/nudake_dosan_pc_1.png" width={500} height={500} alt="코타" className="w-full h-[30vh] rounded-xl" />
              </div>
              <div className="store-bg w-full h-auto px-16 object-cover rounded-xl overflow-hidden relative">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <Image src="/images/pattern/main/nudake_dosan_pc_1.png" width={1200} height={1200} alt="코타" className="h-[90vh] w-full object-cover" />
                </div>
              </div>
            </div>

            {/* slide-list2 */}
            <div className="slide-list relative">
              <div className="store-text text-5xl font-bold absolute top-1/3 left-52 text-[#b82822] z-10">
                <p className="text-2xl font-normal">KOREA</p>
                <h2 className="pt-1 text-5xl font-bold">SEONGSU</h2>
              </div>

              <div className="image-container rounded-xl shadow-md mb-6 absolute top-1/3 right-32 z-10">
                <Image src="/images/pattern/main/nudake_seongsu_pc_1.png" width={500} height={500} alt="코타" className="w-full h-[30vh] rounded-xl" />
              </div>

              <div className="store-bg w-full h-auto px-16 object-cover rounded-xl overflow-hidden relative">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <Image src="/images/pattern/main/nudake_seongsu_pc_1.png" width={1200} height={1200} alt="코타" className="h-[90vh] w-full object-cover" />
                </div>
              </div>
            </div>

            {/* slide-list3 */}
            <div className="slide-list relative">
              <div className="store-text absolute top-1/3 left-52 text-[#7B3010] z-10">
                <p className="text-2xl font-normal">KOREA</p>
                <h2 className="pt-1 text-5xl font-bold">SINSA</h2>
              </div>

              <div className="image-container rounded-xl shadow-md mb-6 absolute top-1/3 right-32 z-10">
                <Image src="/images/pattern/main/nudake_sinsa_pc_1.png" width={500} height={500} alt="코타" className="w-full h-[30vh] rounded-xl" />
              </div>

              <div className="store-bg w-full h-auto px-16 object-cover rounded-xl overflow-hidden relative">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <Image src="/images/pattern/main/nudake_sinsa_pc_1.png" width={1200} height={1200} alt="코타" className="h-[90vh] w-full object-cover" />
                </div>
              </div>
            </div>

            {/* slide-list4 */}
            <div className="slide-list relative">
              <div className="store-text absolute top-1/3 left-52 glow-neon z-10">
                <p className="text-2xl font-normal">CHINA</p>
                <h2 className="pt-1 text-5xl font-bold">SHANGHAI</h2>
              </div>

              <div className="image-container rounded-xl shadow-md mb-6 absolute top-1/3 right-32 z-10">
                <Image src="/images/pattern/main/nudake_shanghai_pc_1.png" width={500} height={500} alt="코타" className="w-full h-[30vh] rounded-xl" />
              </div>

              <div className="store-bg w-full h-auto px-16 object-cover rounded-xl overflow-hidden relative">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <Image src="/images/pattern/main/nudake_shanghai_pc_1.png" width={1200} height={1200} alt="코타" className="h-[90vh] w-full object-cover" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <section className="textOpacity my-32 ">
        <div className="flex items-center justify-center h-screen">
          <div className="textOpacity_tit mx-auto pt-4 w-3/5  text-center space-x-2 text-5xl leading-normal text-[#342F2D]">
            <h2>Our desserts are more than treats</h2>
            <h2>They’re an experience.</h2>
            <span className="text-normal text-xl ">Experience our creations!</span>
          </div>
        </div>
      </section>
      {/* <iframe title="vimeo-player" src="https://player.vimeo.com/video/1032223745?h=041d829694" width="640" height="360" frameborder="0" allowfullscreen></iframe> */}
    </div>
  )
}
