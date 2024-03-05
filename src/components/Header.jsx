import { NavLink } from "react-router-dom"
import styled from "@emotion/styled"
const Header = () => {

    const contianer = {
        backgroundColor: 'gold',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70px'
    }
  return (
      <Container style={ contianer }>
          <Nav to='/'>Page1</Nav>
          <Nav to='/page2'>Page2</Nav>
          <Nav to='/page3'>Page3</Nav>
          <Nav to='/page4'>Page4</Nav>
          <Nav to='/page5'>Page5</Nav>
    </Container>
  )
}

export default Header;

const Nav = styled(NavLink)`
  text-decoration: none;
  color: white;
  transition: all .3s;

  &.active{
    color: black;
  }
`
const Container = styled.div`
`

