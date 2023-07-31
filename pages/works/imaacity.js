import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="ImaaCity">
    <Container>
      <Title>
        ImaaCity <Badge>2022</Badge>
      </Title>
      <P>
        Imaa City is a different kind of real estate agency aiming to provide a better experience for the people who want to buy or rent a house. 
        I was hired to reimagine their brand identity.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.imaacity.ro/">
            ImaaCity <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Adobe Photoshop, Figma, Adobe Illustrator</span>
        </ListItem>
      </List>
      <WorkImage src="/images/projects/imaa/imaa_eyecatch.png" alt="ImaaCity" />
    </Container>
  </Layout>
)

export default Work
