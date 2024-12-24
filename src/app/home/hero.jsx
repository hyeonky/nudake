'use client'

import { useState } from 'react'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Flipcard from '@/components/flipcard/Flipcard'
import Image from 'next/image'

const wordPositions = [
  { x: -40, y: -20, rotate: -15 },
  { x: 20, y: -30, rotate: 10 },
  { x: -10, y: 10, rotate: -5 },
  { x: 30, y: -10, rotate: 25 },
  { x: -20, y: 40, rotate: -10 },
  { x: 50, y: 20, rotate: 15 },
  { x: -50, y: -50, rotate: 20 },
  { x: 30, y: -50, rotate: -20 },
  { x: -30, y: 30, rotate: 30 },
  { x: 10, y: 50, rotate: -5 },
  { x: -40, y: -40, rotate: 15 },
  { x: 40, y: 40, rotate: -10 },
  { x: -30, y: 10, rotate: 5 },
  { x: 30, y: -30, rotate: -25 },
  { x: -50, y: 50, rotate: 10 },
  { x: 20, y: -20, rotate: -15 },
  { x: -20, y: 10, rotate: 0 },
  { x: 40, y: -40, rotate: 20 },
  { x: -40, y: 20, rotate: -5 },
  { x: 20, y: 40, rotate: 10 },
  { x: -10, y: -10, rotate: -10 },
  { x: 30, y: 30, rotate: 15 },
  { x: -20, y: -30, rotate: -20 },
]

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
    // 모든 단어 요소를 가져옴
    const words = document.querySelectorAll('.word')

    // GSAP 타임라인을 이용한 애니메이션 설정
    gsap.fromTo(
      words,
      {
        opacity: 0, // 처음에는 보이지 않게 설정
        x: -1000,
        scale: 5, // 화면 밖에서부터 시작
      },
      {
        opacity: 1, // 점차적으로 보이게 설정
        x: 0, // 원래 위치로 이동
        stagger: 0.1, // 각 단어가 순차적으로 나타나게 설정
        scale: 1,
        scrollTrigger: {
          trigger: '.sentence', // 애니메이션을 트리거할 요소
          start: 'top bottom', // 화면 상단이 아래쪽에 도달하면 시작
          end: 'bottom top', // 화면 하단이 상단에 도달하면 끝
          scrub: true, // 스크롤에 맞춰 애니메이션이 진행됨
        },
      }
    )
  }, [])

  return (
    <div id="wrap">
      <section className="h-[100vh] ">
        <div className="intro-text flex justify-between items-center mt-24 pt-4 px-16">
          <div className="intro-heading text-6xl leading-normal ">
            <h2>Art &</h2>
            <h2 className="font-extrabold text-[#bd1a1a]">Fashion</h2>
          </div>
          <p className="text-xl leading-normal font-light w-[520px] text-left	">
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
      <section className="FantasySection" ref={FantasySectionRef}>
        <div className="Fantasy-heading flex justify-start items-center mt-24 px-16 ">
          <div className="Fantasy-heading text-6xl leading-normal flex flex-row">
            <h2>
              <span className="font-extrabold text-[#2B3116]">Fantasy</span> x Nudake
            </h2>
          </div>
        </div>
        <div className="Fantasy-page spilt flex justify-between items-center mt-16 px-16">
          <div className="textarea break-words flex flex-col items-center justify-center">
            <div className="Fantasy-desc text-md text-left font-light break-words w-[500px] pt-3 ">
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
            <div className="img-desc spilt text-lg break-words w-full pt-2">
              <span className="inline-block">Our exclusive patissier and barista team are constantly</span>
              <span className="inline-block">working to reinvent the idea of cake and beverage, aiming</span>
              <span className="inline-block">to create moments beyond culinary experience.</span>
            </div>
            <div className="btn-coll flex justify-start w-[50vh] mt-2">
              <Link href="#" className="hover:no-underline">
                <button className="flex justify-center items-center w-[90px] h-[36px] p-4 text-md font-light bg-[#f9f9f9] hover:bg-zinc-200 rounded-[50px] shadow-md transition">view all</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="ProjectsSection" ref={ProjectsSectionRef}>
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
              <p className="Projects-desc text-md font-light break-words  pt-3">
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
            <button className="flex justify-center items-center w-[120px] h-[36px] p-4 text-md font-light bg-[#F5F6F5] hover:bg-zinc-200 rounded-[50px] shadow-md">All Project</button>
          </Link>
        </div>
      </section>
      <section className="textOpacity h-[100vh] bg-#f7f6f2 flex justify-center items-center">
        <div className="flex items-center justify-center h-screen relative">
          <div className="textOpacity_tit mx-auto pt-4 w-3/5  text-center space-x-2 text-5xl leading-normal">
            <div className="word absolute inline-block left-[-40px] top-[-20px] opacity-1 transform translate-x-[10px] translate-y-[5px]">At</div>
            <div className="word absolute inline-block left-[20px] top-[-30px] opacity-1 transform translate-x-[0px] translate-y-[10px]">NUDAKE,</div>
            <div className="word absolute inline-block left-[-10px] top-[10px] opacity-1 transform translate-x-[-5px] translate-y-[-10px]">we</div>
            <div className="word absolute inline-block left-[30px] top-[-10px] opacity-1 transform translate-x-[5px] translate-y-[-5px]">blur</div>
            <div className="word absolute inline-block left-[-20px] top-[40px] opacity-1 transform translate-x-[-10px] translate-y-[-5px]">the</div>
            <div className="word absolute inline-block left-[50px] top-[20px] opacity-1 transform translate-x-[10px] translate-y-[5px]">lines</div>
            <div className="word absolute inline-block left-[-50px] top-[-50px] opacity-1 transform translate-x=[5px] translate-y=[10px]">between</div>
            <div className="word absolute inline-block left-[30px] top-[-50px] opacity-1 transform translate-x=[-5px] translate-y=[-5px]">art</div>
            <div className="word absolute inline-block left-[-30px] top-[30px] opacity-1 transform translate-x=[-10px] translate-y=[10px]">and</div>
            <div className="word absolute inline-block left-[10px] top-[50px] opacity-1 transform translate-x=[0px] translate-y=[-10px]">dessert.</div>
            <div className="word absolute inline-block left-[-40px] top-[-40px] opacity-1 transform translate-x=[10px] translate-y=[-5px]">Each</div>
            <div className="word absolute inline-block left-[40px] top-[40px] opacity-1 transform translate-x=[-5px] translate-y=[5px]">masterpiece</div>
            <div className="word absolute inline-block left-[-30px] top-[10px] opacity-1 transform translate-x=[-10px] translate-y=[5px]">is</div>
            <div className="word absolute inline-block left-[30px] top-[-30px] opacity-1 transform translate-x=[5px] translate-y=[-5px]">a</div>
            <div className="word absolute inline-block left-[-50px] top-[50px] opacity-1 transform translate-x=[0px] translate-y=[10px]">gateway</div>
            <div className="word absolute inline-block left-[20px] top-[-20px] opacity-1 transform translate-x=[10px] translate-y=[5px]">to</div>
            <div className="word absolute inline-block left-[-20px] top-[10px] opacity-1 transform translate-x=[-10px] translate-y=[0px]">imagination,</div>
            <div className="word absolute inline-block left-[40px] top-[-40px] opacity-1 transform translate-x=[5px] translate-y=[-5px]">blending</div>
            <div className="word absolute inline-block left-[-40px] top-[20px] opacity-1 transform translate-x=[-5px] translate-y=[10px]">aesthetics</div>
            <div className="word absolute inline-block left-[20px] top-[40px] opacity-1 transform translate-x=[0px] translate-y=[-5px]">to</div>
            <div className="word absolute inline-block left-[-10px] top-[-10px] opacity-1 transform translate-x=[10px] translate-y=[5px]">awaken</div>
            <div className="word absolute inline-block left-[30px] top-[30px] opacity-1 transform translate-x=[-5px] translate-y=[-10px]">new</div>
            <div className="word absolute inline-block left-[-20px] top-[-30px] opacity-1 transform translate-x=[5px] translate-y=[5px]">dreams.</div>
          </div>
        </div>
      </section>
      <section className="store">
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
      <section className="textOpacity h-[100vh] bg-#f7f6f2" ref={textOpacityRef}>
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
