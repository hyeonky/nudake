import { extendTheme } from '@chakra-ui/react'
import { Container } from './components/container'
import { Button } from './components/button'

const theme = extendTheme({
  components: {
    Container,
    Button,
  },
})

export default theme
