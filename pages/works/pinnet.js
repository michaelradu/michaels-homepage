import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Pinnet">
    <Container>
      <Title>
        Pinnet <Badge>2022</Badge>
      </Title>
      <P>
        A social network with an emphasis on sharing photos as “pins” that users 
        can rank. I made it in an afternoon to see if I could manage to pull it off. 
        So far only me and my friends use it, but if you wanna try it out, be my 
        guest.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://pinnet.netlify.app/">
            https://pinnet.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Sanity, React</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/pinnet/pinnet_01.png" alt="Pinnet" />
      <WorkImage src="/images/projects/pinnet/pinnet_02.png" alt="Pinnet" />
    </Container>
  </Layout>
)

export default Work
