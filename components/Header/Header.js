import Link from 'next/link'
import Image from 'next/image'
import { Wrapper, Logo, Menu, MenuItem } from './styles'
import { ContentCenter } from '../../styles/global'

const Header = () => {
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
        <Menu>
          <MenuItem>
            <Link
              href={{
                pathname: '/categories/[slug]',
                query: { slug: 'category-1' },
              }}
              as="/category-1"
            >
              Categoria 1
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href={{
                pathname: '/categories/[slug]',
                query: { slug: 'category-1-1', parent: 'category-1' },
              }}
              as="/category-1/category-1-1"
            >
              SubCategoria 1.1
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href={{
                pathname: '/categories/[slug]',
                query: { slug: 'category-2' },
              }}
              as="/category-2"
            >
              Categoria 2
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href={{
                pathname: '/categories/[slug]',
                query: { slug: 'category-2-1', parent: 'category-2' },
              }}
              as="/category-2/category-2-1"
            >
              SubCategoria 2.1
            </Link>
          </MenuItem>
        </Menu>
      </ContentCenter>
    </Wrapper>
  )
}

export { Header }
