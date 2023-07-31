import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Rust Linear Algebra Library">
    <Container>
      <Title>
        Rust Linear Algebra Library <Badge>2023</Badge>
      </Title>
      <P>
        A custom POC linear algebra library made in Rust.
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
          <span>Rust</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/algebra/algebra_eyecatch.png" alt="Linear Algebra" />
    </Container>
  </Layout>
)

export default Work
