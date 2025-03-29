import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Flipcard = ({ imageSrc, videoSrc }) => {
  return (
    <div className="w-[348px] h-[476.5px] perspective">
      <div className="relative w-[348px] h-auto transition-transform duration-700 transform-style-3d hover:rotate-y-180">
        {/* Front side */}
        <div className="Fantasy-img absolute backface-hidden rounded-xl ">
          <Image
            src={imageSrc}
            width={500}
            height={500}
            alt="art"
            className=" h-[476.5px] rounded-xl"
          />
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[-40%] left-0 w-full h-full flex items-center justify-center text-white text-2xl font-bold opacity-90 group-hover:opacity-0 transition-opacity duration-300">
            Hover to Reveal
          </motion.div>
        </div>

        {/* Back side */}
        <div className="absolute w-[348px] h-[476.5px] backface-hidden rotate-y-180 object-contain rounded-xl ">
          <div className="w-[348px] h-[476.5px] object-contain rounded-xl">
            <iframe
              className="w-[348px] h-[476.5px] object-contain rounded-xl"
              src={`${videoSrc}?autoplay=1&muted=1&loop=1`}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title="jennie_main_pc"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flipcard
