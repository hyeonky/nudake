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

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div id="wrap">
      <section className="h-[100vh] bg-#f7f6f2">
        <div className="intro-text flex justify-between items-center mt-24 pt-4 px-16">
          <div className="intro-heading text-6xl leading-normal ">
            <h2>Art</h2>
            <h2 className="font-extrabold text-[#bd1a1a]">Fashion</h2>
          </div>
          <p className="text-xl leading-normal font-light w-[520px] text-left	">
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
      <section class="collaboration-section">
        <div class="collaboration-heading flex justify-between items-center mt-24 pt-4 px-16 ">
          <div class="collaboration-heading text-6xl leading-normal">
            <h2 className="font-extrabold text-[#bd1a1a]">Creative Synergy</h2>
            <h2> Nudake x Artists</h2>
          </div>
        </div>

        <div className="collaboration-page flex  justify-between items-center mt-24 pt-4 px-16 ">
          <div className="textarea  break-words flex flex-col items-center justify-center px-5">
            <span className="text-center font-bold text-3xl text-[#bd1a1a]">NUDAKE ♡ JENNIE</span>
            <p className="collaboration-desc text-xl text-left font-light break-words w-[500px] px-5 pt-3">
              'Nudake♡Jennie' is a special collaboration pop-up store presented by Nudake and Jennie. From four desserts celebrating Jennie's first solo album to a space that captures her various charms, visitors can experience new moments throughout the pop-up store.
            </p>
          </div>
          <div className="image flex flex-col justify-between items-end">
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/1031021629?h=a67d274315&autoplay=1&loop=1&background=1" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

            <Img src="/images/pattern/main/코타.png" alt="코타" className="w-[50vh] h-[60vh] rounded-xl" />
            <p className="text-left text-lg break-words w-[50vh] pt-2">'Nudake♡Jennie' is a special collaboration pop-up store presented by Nudake and Jennie.</p>
            <iframe src="https://player.vimeo.com/video/1031002823?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&background=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="교체예정_jennie_main_pc"></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}
