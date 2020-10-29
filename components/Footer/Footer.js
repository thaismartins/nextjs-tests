import Image from 'next/image'
import { Wrapper, Logo } from './styles'
import { ContentCenter } from '../../styles/global'

const Footer = () => {
  return (
    <Wrapper>
      <ContentCenter>
        <Logo>
          <Image
            src="https://www.creditas.com/nextstatic/images/logo-exponencial.svg"
            alt="Creditas"
            width={155}
            height={34}
          />
        </Logo>
      </ContentCenter>
    </Wrapper>
  )
}

export { Footer }
