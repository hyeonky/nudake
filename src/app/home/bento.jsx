import { Img } from '@chakra-ui/react'
import Image from 'next/image'

export default function Bento() {
  return (
    <section class="collaboration-section">
      <h2 class="collaboration-title">콜라보한 아티스트</h2>

      <div class="collaboration-text">
        <h2 class="collaboration-heading">Welcome to the next screen</h2>
        <p class="collaboration-description">This is a sample content that will animate on page load or scroll.</p>
      </div>

      <div class="collaboration-image">
        <Img src="/images/pattern/main/코타.png" alt="Sample Image" class="collaboration-img" />
      </div>
    </section>
  )
}
