import { Link } from "react-router-dom"
const Header = ({prop}) => {

    const contianer = {
        backgroundColor: 'gold',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70px'
    }
  return (
      <div style={ contianer }>
          <Link to='/'><div>Page1</div></Link>
          <Link to='/page2'><div>Page2</div></Link>
          <Link to='/page3'><div>Page3</div></Link>
          <Link to='/page4'><div>Page4</div></Link>
          <Link to='/page5'><div>Page5</div></Link>
          <div>{prop}</div>
    </div>
  )
}

export default Header