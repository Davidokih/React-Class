import './style.css'
import Input from '../Inputs';
import Icons from './Icons';
import { IoIosArrowDown } from "react-icons/io";


const Header = () => {
  return (
    <>
    <div className='container'>
        <div className='wrap'>
              <div></div>
              <h1>Title</h1>
              <div>
                  location
              </div>
        <Input />
        </div>

        <div className='right'>
          <div className='LD'><div>Language</div><span><IoIosArrowDown /></span>
</div>
          <div className='LD'>Dollar<span><IoIosArrowDown />
</span></div>
        <Icons display='A'/>
        <Icons display='B'/>
        </div>
      </div>
      
    </>
  )
}



export default Header;
