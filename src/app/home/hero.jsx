'use client'

import { useState } from 'react'
import gsap from 'gsap'
import { Img } from '@chakra-ui/react'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

// const Puzzle = () => {
//   const puzzleRef = useRef(null)

//   useEffect(() => {
//     gsap.from('.puzzle-piece', {
//       duration: 1,
//       x: 200,
//       opacity: 0,
//       stagger: 0.1,
//     })
//   }, [])

//   const handleMouseMove = (e) => {
//     const pieces = document.querySelectorAll('.puzzle-piece')
//     pieces.forEach((piece) => {
//       gsap.to(piece, {
//         x: e.clientX / 10,
//         y: e.clientY / 10,
//         scale: 1.1,
//         duration: 0.1,
//       })
//     })
//   }
// }

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <section className="h-[100vh] bg-#f7f6f2">
      <div className="tit flex justify-between items-center mt-24 pt-4 px-16">
        <div className="tit-main text-6xl leading-normal ">
          <h2>Art</h2>
          <h2 className="font-extrabold text-[#bd1a1a]">Fashion</h2>
        </div>
        <p className="text-xl leading-normal font-light w-[550px]">
          With NUDAKE, <br />
          We combine art and fashion to craft unique desserts. Every creation offers an experience that sparks a new realm of fantasy.
        </p>
      </div>

      <div className="puzzle-container grid grid-cols-4 grid-rows-2 gap-1 box-border relative w-full h-[50vw] p-16">
        <div className="puzzle-piece w-full h-full relative">
          <Img src="/images/pattern/main/rouge-heel_logo_1.png" className="object-cover w-full h-full" alt="Puzzle Piece 1" />
        </div>
        <div className="puzzle-piece w-full h-full relative">
          <Img src="/images/pattern/main/33_1.5x.png" className="object-cover w-full h-full" alt="Puzzle Piece 2" />
        </div>
        <div className="puzzle-piece w-full h-full relative">
          <Img src="/images/pattern/main/cauli_cake_1_2x-100.png" className="object-cover w-full h-full" alt="Puzzle Piece 3" />
        </div>
        <div className="puzzle-piece w-full h-full relative">
          <Img src="/images/pattern/main/코타.png" className="object-cover w-full h-full" alt="Puzzle Piece 4" />
        </div>
        <div className="puzzle-piece w-full h-full relative">
          <Img src="/images/pattern/main/cameo_logo_1.jpg" className="object-cover w-full h-full" alt="Puzzle Piece 5" />
        </div>
        <div className="puzzle-piece w-full h-full relative">
          <Img src="/images/pattern/main/15.png" className="object-cover w-full h-full" alt="Puzzle Piece 6" />
        </div>
        <div className="puzzle-piece w-full h-full relative">
          <Img src="/images/pattern/main/6.png" className="object-cover w-full h-full" alt="Puzzle Piece 7" />
        </div>
        <div className="puzzle-piece w-full h-full relative">
          <Img src="/images/pattern/main/6.png" className="object-cover w-full h-full" alt="Puzzle Piece 8" />
        </div>
      </div>
    </section>
  )
}
