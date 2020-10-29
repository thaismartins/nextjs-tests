import styled from 'styled-components'

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 96px;
  background-color: #334444;
  border-top: 7px solid #11bb77;
`

const Logo = styled.div`
  width: 155px;
  height: 34px;
`

const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`

const MenuItem = styled.li`
  padding: 10px;

  a {
    color: #fff;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      opacity: 0.6;
    }
  }
`

export { Wrapper, Logo, Menu, MenuItem }
