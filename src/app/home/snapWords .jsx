'use client'

import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function SnapWords() {
  gsap.registerPlugin(ScrollTrigger)

  // textOpacity
  useEffect(() => {
    const words = document.querySelectorAll('.word')
    const slides = document.querySelectorAll('.textOpacity')

    // 단어 간 최소 거리 설정 (픽셀 단위, 더 가까운 간격으로 설정)
    const minDistance = 60

    // 기존 좌표를 저장하는 배열
    const positions = []

    // 겹치지 않는 좌표 생성 함수
    const generatePosition = () => {
      let isValid = false
      let x, y

      while (!isValid) {
        x = (Math.random() - 0.5) * 1500
        y = (Math.random() - 0.5) * 1500
        isValid = positions.every(([px, py]) => {
          const distance = Math.sqrt((x - px) ** 2 + (y - py) ** 2)
          return distance > minDistance
        })
      }

      positions.push([x, y]) // 새로운 좌표 저장
      return { x, y }
    }

    // 단어 애니메이션 적용
    words.forEach((word) => {
      const { x: randomX, y: randomY } = generatePosition()
      const randomScale = Math.random() * 4.5 + 1.5 // 1.5~6 사이의 크기
      const randomRotateX = Math.random() * 90 // X축 회전 (범위 축소)
      const randomRotateY = Math.random() * 90 // Y축 회전 (범위 축소)
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
          z: randomTranslateZ,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotateX: 0,
          rotateY: 0,
          z: 0,
          // duration: 10,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '.textOpacity_tit',
            start: 'top center',
            end: '+=800',
            scrub: true,
            // markers: true,
          },
        }
      )
    })

    // 슬라이드 애니메이션 적용 및 pin 효과
    slides.forEach((slide) => {
      gsap.to(slide, {
        duration: 3,
        scrollTrigger: {
          trigger: slide,
          start: 'top top', // 슬라이드의 시작 부분
          end: '+=400', // 슬라이드의 끝 부분
          scrub: true,
          pin: true, // 슬라이드를 고정
          pinSpacing: true, // 슬라이드 고정 시 공간이 남지 않도록 설정
        },
      })
    })

    // 글씨가 스크롤에 따라 움직이도록 설정
    words.forEach((word) => {
      gsap.to(word, {
        // 스크롤에 따라 이동할 양 설정 (y축 이동)
        scrollTrigger: {
          trigger: word,
          start: 'top center',
          end: 'bottom center',
          scrub: true, // 스크롤과 애니메이션 동기화
        },
      })
    })
  }, [])

  return (
    <section className="section textOpacity h-[100vh] py-[10VW] bg-[#f9f9f9] flex relative">
      <div className="sticky top-0 left-0 w-full flex justify-center items-center ">
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
  )
}
