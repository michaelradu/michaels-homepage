import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Tau">
    <Container>
      <Title>
        Tau <Badge>2022</Badge>
      </Title>
      <P>
        A small hackable text editor made in about 1000 LOC that supports syntax highlighting and incremental search. 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/michaelradu/tau">
            https://github.com/michaelradu/tau <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>macOS/Linux/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C, Makefile</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/tau/tau_eyecatch.png" alt="Tau" />
    </Container>
  </Layout>
)

export default Work
