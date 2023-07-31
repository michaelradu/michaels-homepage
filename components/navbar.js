import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoDownload, IoNewspaper, IoGitBranch, IoLink, IoMail } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      // bg={active ? 'grassTeal' : undefined}
      display="inline-flex"
      alignItems="center"
      style={{ gap: 4 }}
      textDecoration={active ? 'underline' : 'none'}
      color={active ? 'grassTeal' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            <IoGitBranch />
            Works
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://michaelradu.substack.com"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}>
            <IoNewspaper />
            Blog
          </LinkItem>
          <LinkItem href="/downloads" path={path}>
            <IoDownload />
            Downloads
          </LinkItem>
          <LinkItem href="/webring" path={path}>
            <IoLink />
            Webring
          </LinkItem>
          <LinkItem
            href="mailto:miihairadu@gmail.com"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoMail />
            Contact
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList bg={useColorModeValue("#f4ede4", "#202023")}>
                <MenuItem
                  as={MenuLink}
                  href="/works"
                  display="flex"
                  alignItems="center"
                  style={{ gap: 4 }}
                  bg={useColorModeValue("#f4ede4", "#202023")}>
                  <IoGitBranch />
                  Works
                </MenuItem>
                <MenuItem
                  as={MenuLink}
                  target="_blank"
                  href="https://michaelradu.substack.com"
                  display="flex"
                  alignItems="center"
                  style={{ gap: 4 }}
                  bg={useColorModeValue("#f4ede4", "#202023")}>
                  <IoNewspaper />
                  Blog
                </MenuItem>
                <MenuItem
                  as={MenuLink}
                  href="/downloads"
                  display="flex"
                  alignItems="center"
                  style={{ gap: 4 }}
                  bg={useColorModeValue("#f4ede4", "#202023")}>
                  <IoDownload />
                  Downloads
                </MenuItem>
                <MenuItem
                  as={MenuLink}
                  href="/webring"
                  display="flex"
                  alignItems="center"
                  style={{ gap: 4 }}
                  bg={useColorModeValue("#f4ede4", "#202023")}>
                  <IoLink />
                  Webring
                </MenuItem>
                <MenuItem 
                  as={MenuLink} 
                  href="mailto:miihairadu@gmail.com"
                  display="flex"
                  alignItems="center"
                  style={{ gap: 4 }}
                  bg={useColorModeValue("#f4ede4", "#202023")}>
                  <IoMail />
                  Contact
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
