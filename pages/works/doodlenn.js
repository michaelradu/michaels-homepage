import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Doodle Identifier">
    <Container>
      <Title>
        Doodle Identifier <Badge>2023</Badge>
      </Title>
      <P>
        A neural network trained to identify hand-drawn doodles. Based on Sebastian Lague&apos;s project.
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
          <span>C#</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/wm/wm_eyecatch.png" alt="Wayland Compositor" />
    </Container>
  </Layout>
)

export default Work
