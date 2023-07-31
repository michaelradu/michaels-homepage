import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbDots from '../public/images/downloads/dots_eyecatch.png'
import thumbWalls from '../public/images/downloads/walls.jpg'
import thumbRain from '../public/images/downloads/digitalrain.png'
import thumbBreakout from '../public/images/downloads/breakout.png'
import thumbSnake from '../public/images/downloads/snake.jpg'
import thumbPong from '../public/images/downloads/pong.jpg'
import thumbTemp from '../public/images/downloads/temp_image.png'

const Posts = () => (
  <Layout title="Downloads">
    <Container maxW="42rem">
      <Heading as="h3" fontSize={20} mb={4}>
        Downloads
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Dotfiles"
            thumbnail={thumbDots}
            href="https://github.com/michaelradu/dot"
          >
            Configs for WMs, Vim, i3bar, & a lot more. There are some additional niche scripts. My default storage spot for ricing.
          </GridItem>
          <GridItem
            title="Wallpapers"
            thumbnail={thumbWalls}
            href="https://www.youtube.com/watch?v=-qBavwqc_mY"
          >
            My main collection of wallpapers. I didn&apos;t make any of these, I&apos;m just currently using Makc&apos;s collection plus a few of my own.
          </GridItem>
          <GridItem
            title="Digital Rain"
            thumbnail={thumbRain}
            href="https://github.com/michaelradu/digital-rain"
          >
            The iconic Matrix digital rain as a screensaver. Currently not compatible with XScreensaver but you can figure out a workaround.
          </GridItem>
          <GridItem
            title="15min Breakout"
            thumbnail={thumbBreakout}
            href="https://github.com/michaelradu/15min-breakout"
          >
            Simple Atari Breakout game. Perfect for passing the time. 
          </GridItem>
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Draco Snake"
            thumbnail={thumbSnake}
            href="https://github.com/michaelradu/draco-snake"
          >
            Remake of the original Nokia Snake Gamein Rust.
          </GridItem>
          <GridItem
            title="Rusty Pong"
            thumbnail={thumbPong}
            href="https://github.com/michaelradu/rusty-pong"
          >
            Rusty Pong: the classic Atari game rewritten in Rust!
          </GridItem>
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="CLI Chat"
            thumbnail={thumbTemp}
            href="https://github.com/michaelradu/python-cli-chat"
          >
            CLI app similar to a primitive IRC that allows 2 or more people to connect to a chatroom and talk. Could be a quick and dirty retro lan-party solution.
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
