import { Img } from '@chakra-ui/react'
import React from 'react'

const Flipcard = ({ imageSrc, videoSrc }) => {
  return (
    <div className="w-[300px] h-[60vh] perspective">
      <div className="relative w-[50vh] h-full transition-transform duration-700 transform-style-3d hover:rotate-y-180">
        {/* Front side */}
        <div className="Fantasy-img w-[50vh] mt-20 px-16 absolute backface-hidden rounded-xl ">
          <Img src={imageSrc} alt="코타" className="h-[50vh] rounded-xl" />
        </div>

        {/* Back side */}
        <div className="absolute w-[50vh] h-[476.5px] backface-hidden rotate-y-180 object-cover rounded-xl ">
          <div className="mt-20 w-full h-full object-cover rounded-xl">
            <iframe className="w-[50vh] h-full object-cover rounded-xl" src={videoSrc} frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="교체예정_jennie_main_pc"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flipcard
