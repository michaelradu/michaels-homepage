import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoGithub, IoLogoDocker, IoLogoPython, IoLogoTux } from 'react-icons/io5'
import thumbPinnet from '../public/images/projects/pinnet/pinnet_eyecatch.png'
import thumbTau from '../public/images/projects/tau/tau_eyecatch.png'
import Image from 'next/image'

import { SiCplusplus, SiRust, SiAdobephotoshop, SiQemu, SiUnity, SiNumpy } from 'react-icons/si'
import { TbBrandNextjs, TbBrandGolang } from 'react-icons/tb'
import { BiLogoJava } from 'react-icons/bi'
import { MdFreeBreakfast } from 'react-icons/md'
import { useState, useEffect } from 'react'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const quotes = [
  "If you're doing it, you're doing it right.",
  "It always seems impossible until it's done.",
  "Beware of making the best, the enemy of the good.",
  "Do one thing, and do it well.",
  "When you must fail, fail noisily and as soon as possible.",
  "Victory has defeated you.",
  "We become what we pay attention to."
]

const Home = () => {

  const [randomQuote, setRandomQuote] = useState(null);
useEffect(() => {
  const qotd = quotes[Math.floor(Math.random() * quotes.length)]
  setRandomQuote(qotd);
}, []);

return(
  <Layout>
    <Container maxW="42rem" bg={useColorModeValue('#f0e7db', '#202023')}>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
        fontStyle="italic"
      >
        {randomQuote}
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h3" fontSize="2xl">
            Hey, I&apos;m
          </Heading>
          <Heading as="h2" variant="page-title">
            Michael Radu 👋
          </Heading>
          <p>Professor Rework ( Focus / Commitment / Sheer will )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/pfp.gif"
              alt="Profile picture"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I&apos;m a self-taught developer based in Romania with a passion for all things
          computing be it Security, Machine Learning or Low-Level Programming. My 生きがい
          (Japanese word for &quot;reason for being&quot;) is learning to create and creating to learn.
        </Paragraph>
        <Paragraph>
          Job Status:
          <Button
            variant="ghost"
            colorScheme="teal"
            _hover={{bg: 'none'}}
            leftIcon={<MdFreeBreakfast />}
          >
            Available for hire.
          </Button>
      </Paragraph>
      <Box align="center" my={4}>
        <Button
          as={NextLink}
          href="/works"
          scroll={false}
          rightIcon={<ChevronRightIcon />}
          colorScheme="teal"
        >
          My portfolio
        </Button>
      </Box>
    </Section>

    <Section delay={0.2}>
      <Heading as="h3" variant="section-title">
        Highlights
      </Heading>
      <BioSection>
        <BioYear>2005</BioYear>
        Born in România.
      </BioSection>
      <BioSection>
        <BioYear>2016</BioYear>
        Finished C++ DS&A and Web Development Bootcamp.
      </BioSection>
      <BioSection>
        <BioYear>2017-2019</BioYear>
        Self-learning. Contributing to community projects.
      </BioSection>
      <BioSection>
        <BioYear>2020</BioYear>
        Started publishing <Link href="https://github.com/michaelradu" target="_blank">
          Open-Source Software
        </Link>.
      </BioSection>
      <BioSection>
        <BioYear>2021</BioYear>
        Created in-house Wikipedia clone for school & updated their website.
      </BioSection>
      <BioSection>
        <BioYear>2022</BioYear>
        Contributed to Open-Source projects such as SearXNG.
      </BioSection>
      <BioSection>
        <BioYear>2023</BioYear>
        Passed CCNA1-3 Bootcamp with merit.
      </BioSection>
      <BioSection>
        <BioYear>Q2</BioYear>
        3rd Place at FIICode.
      </BioSection>
      <BioSection>
        <BioYear>Q2</BioYear>
        Acadnet Nationals.
      </BioSection>
      <BioSection>
        <BioYear>2023 to present</BioYear>
        Computer Science junior student.
      </BioSection>
    </Section>

    <Section delay={0.3}>
      <Heading as="h3" variant="section-title">
        I ♥
      </Heading>
      <Paragraph>
        Art, Music, Travelling, Calisthenics, Linguistics, Machine Learning
      </Paragraph>
    </Section>

    <Section delay={0.3}>
      <Heading as="h3" variant="section-title">
        (Some of my) Skills
      </Heading>
      <Box display="flex">
        <List>
          <ListItem>
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<SiCplusplus />}
            >
              C & C++
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<TbBrandNextjs />}
            >
              Next.js
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<TbBrandGolang />}
            >
              Golang
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<SiRust />}
            >
              Rust
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoPython />}
            >
              Python
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<BiLogoJava />}
            >
              Java
            </Button>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoTux />}
            >
              GNU/Linux
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoDocker />}
            >
              Docker
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<SiAdobephotoshop />}
            >
              UI/UX & Brand Design
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<SiQemu />}
            >
              Virtualization
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<SiUnity />}
            >
              Game Development
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<SiNumpy />}
            >
              Machine Learning
            </Button>
          </ListItem>
        </List>
      </Box>
    </Section>

    <Section delay={0.3}>
      <Heading as="h3" variant="section-title">
        On the wired
      </Heading>
      <List>
        <ListItem>
          <Link href="https://github.com/michaelradu" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoGithub />}
            >
              @michaelradu
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://twitter.com/michaelraduu" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoTwitter />}
            >
              @michaelraduu (Inactive)
            </Button>
          </Link>
        </ListItem>
      </List>

      <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <GridItem
          href="https://pinnet.netlify.app/"
          title="Pinnet"
          thumbnail={thumbPinnet}
        >
          A social media platform experiment.
        </GridItem>
        <GridItem
          href="https://github.com/michaelradu/tau"
          title="Tau"
          thumbnail={thumbTau}
        >
          A nano-like text editor made in 1000 LoC.
        </GridItem>
      </SimpleGrid>

      <Heading as="h3" variant="section-title">
        Newsletter
      </Heading>
      <p>
        Join me on my journey creating unique software solutions
        and becoming a principled programmer full of tutorials and updates.
      </p>

      <Box align="center" my={4}>
        <Button
          as={NextLink}
          href="https://michaelradu.substack.com/subscribe?utm_source=menu&simple=true&next=https%3A%2F%2Fmichaelradu.substack.com%2F"
          scroll={false}
          leftIcon={<EmailIcon />}
          colorScheme="teal"
        >
          Follow my journey
        </Button>
      </Box>
    </Section>
  </Container>
  </Layout >
)}

export default Home
export { getServerSideProps } from '../components/chakra'
