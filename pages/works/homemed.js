import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { WorkGridItem } from '../../components/grid-item'
import thumbHM from '../../public/images/projects/homemed/homemed_eyecatch.png'

const Work = () => (
  <Layout title="Homemed">
    <Container>
      <Title>
        Homemed <Badge>2023</Badge>
      </Title>
      <P>
        A platform designed for doctors and patients to manage medical records, appointments, and consultations. 
        Created for FIICode 2023.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Achievement</Meta>
          <span>FIICode 3rd Place</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/FR13ND-ly/homemed">
            https://github.com/FR13ND-ly/homemed <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Flask, Sqlite, Angular, SCSS</span>
        </ListItem>
      </List>

      <WorkGridItem id="https://www.youtube.com/watch?v=7nvfC8DQs-Y&feature=youtu.be" title="Homemed Trailer" thumbnail={thumbHM}>
            The trailer that serves as a presentation of the project&apos;s basic functionalities.
      </WorkGridItem>
    </Container>
  </Layout>
)

export default Work
