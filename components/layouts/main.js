import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import Footer from '../footer'
import TuxLoader from '../tux-thinkpad-loader'

const LazyTux = dynamic(() => import('../tux-thinkpad'), {
  ssr: false,
  loading: () => <TuxLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8} display={"flex"}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Michael's homepage" />
        <meta name="author" content="Mihai-Alexandru Radu" />
        <meta name="author" content="Michael Radu" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Michael Radu" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@michaelradu" />
        <meta name="twitter:creator" content="@michaelradu" />
        <meta name="twitter:image" content="https://michaelradu.netlify.app/card.png" />
        <meta property="og:site_name" content="Michael Radu" />
        <meta name="og:title" content="Michael Radu" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://michaelradu.netlify.app/card.png" />
        <title>Michael Radu - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />
      <Container display={{base: 'none', md:'block'}} p="0px" m="0px" bg={useColorModeValue('#f0e7db', '#202023')}  bgImage="url(michael-background-left.png)" bgPosition="left" bgBlendMode= 'exclusion'></Container>

      <Container maxW="container.md" pt={14}>
        <LazyTux />

        {children}

        <Footer />
      </Container>
      <Container display={{base: 'none', md:'block'}} p="0px" m="0px" bg={useColorModeValue('#f0e7db', '#202023')} bgImage="url(michael-background-right.png)" bgPosition="right"  bgBlendMode= 'exclusion'></Container>

    </Box>
  )
}

export default Main
