import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import MLogo from './icons/m-logo'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }


  & > svg {
    transform: rotate(-20deg);
    margin-right: .2rem;
  }

  &:hover > svg {
    transform: rotate(0deg);
  }
`

const Logo = () => {
  return (
    (<Link href="/" scroll={false}>

      <LogoBox>
        <MLogo />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
        >
          Michael
        </Text>
      </LogoBox>

    </Link>)
  );
}

export default Logo
