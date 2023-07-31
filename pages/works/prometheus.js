import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Prometheus">
    <Container>
      <Title>
        Prometheus <Badge>2023</Badge>
      </Title>
      <P>
        A modular C Game Engine made from scratch using C, SDL2, SDL2Mixer, Freetype and GLAD with a 2D side-scrolling shooter demo game.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Status</Meta>
          <span>Work In Progress</span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C, SDL2, SDL2Mixer, Freetype, GLAD</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/prometheus/prometheus_eyecatch.png" alt="Prometheus" />
    </Container>
  </Layout>
)

export default Work
