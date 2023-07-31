import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PeopleItem } from '../components/grid-item'

import thumbStefan from '../public/images/people/stefan.png'
import thumbTakuya from '../public/images/people/takuya.png'
import thumbFleury from '../public/images/people/rfleury.jpg'
import thumbRandy from '../public/images/people/randy.png'
import thumbDenshi from '../public/images/people/denshi.jpg'

const Posts = () => (
  <Layout title="Webring">
    <Container maxW="42rem">
      <Heading as="h3" fontSize={20} mb={4}>
        Webring
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <PeopleItem
            title="Asandei Stefan"
            thumbnail={thumbStefan}
            href="https://stefan-asandei.netlify.app/blog"
          >
            Also known as NikolaTesla13, a friend of mine passionate about Graphics Programming.
          </PeopleItem>
          <PeopleItem
            title="CraftzDog"
            thumbnail={thumbTakuya}
            href="https://www.craftz.dog/"
          >
            Takuya is a freelance and a full-stack developer based in Osaka. He is known as DevasLife and is the inspiration for my current design.
          </PeopleItem>
          <PeopleItem
            title="Ryan Fleury"
            thumbnail={thumbFleury}
            href="https://www.rfleury.com/"
          >
            Ryan is a professional programmer who works in the gaming industry on engines and tools. His project, Hidden Grove aims to build a new computing foundation.
          </PeopleItem>
          <PeopleItem
            title="Randy"
            thumbnail={thumbRandy}
            href="https://alpinegames.substack.com/"
          >
            G&apos;day mate. Randy is a game developer working on his game Arcana perpetually rewriting it from scratch due to Professor Rework&apos; antics.
          </PeopleItem>

          <PeopleItem
            title="Denshi"
            thumbnail={thumbDenshi}
            href="https://denshi.org/"
          >
            Really cool person best known among my friends for his &quot;Just use&quot; series. He makes videos and music and spends his spare time working on projects like his website.
          </PeopleItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
