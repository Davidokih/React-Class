import { Link,NavLink } from "react-router-dom"
import styled from "@emotion/styled"
const Header = ({prop}) => {

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
          <div>{prop}</div>
    </Container>
  )
}

export default Header;

const Nav = styled(NavLink)`
  text-decoration: none;
  color: white;
  transition: all .3s;
`
const Container = styled.div`
`

