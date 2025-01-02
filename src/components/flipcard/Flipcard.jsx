import Image from 'next/image'
import React from 'react'

const Flipcard = ({ imageSrc, videoSrc }) => {
  return (
    <div className="w-[348px] h-[476.5px] perspective">
      <div className="relative w-[348px] h-auto transition-transform duration-700 transform-style-3d hover:rotate-y-180">
        {/* Front side */}
        <div className="Fantasy-img absolute backface-hidden rounded-xl ">
          <Image src={imageSrc} width={500} height={500} alt="코타" className=" h-[476.5px] rounded-xl" />
        </div>

        {/* Back side */}
        <div className="absolute w-[348px] h-[476.5px] backface-hidden rotate-y-180 object-contain rounded-xl ">
          <div className="w-[348px] h-[476.5px] object-contain rounded-xl">
            <iframe className="w-[348px] h-[476.5px] object-contain rounded-xl" src={videoSrc} allowfullscreen allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="jennie_main_pc"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flipcard
