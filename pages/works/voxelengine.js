import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Voxel Engine">
    <Container>
      <Title>
        Voxel Engine <Badge>2023</Badge>
      </Title>
      <P>
        A custom Python Voxel Engine similar to Minecraft&apos;s.
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
          <span>Python, ModernGL, PyGame</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/voxel/voxel_eyecatch.png" alt="Voxel Engine" />
    </Container>
  </Layout>
)

export default Work
