import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Rust Wayland Compositor">
    <Container>
      <Title>
        Rust Wayland Compositor <Badge>2023</Badge>
      </Title>
      <P>
        A custom wayland compositor/window manager built using Rust.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Status</Meta>
          <span>Work In Progress</span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Rust</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/wm/wm_eyecatch.png" alt="Wayland Compositor" />
    </Container>
  </Layout>
)

export default Work
