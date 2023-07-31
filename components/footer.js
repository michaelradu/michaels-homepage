import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Mihai-Alexandru Radu. All Rights Reserved. Cya around! ✌️
    </Box>
  )
}

export default Footer
