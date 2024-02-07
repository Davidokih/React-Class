import './style.css'
import Input from '../Inputs';
import Icons from './Icons';
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { useState } from 'react';


const Header = () => {
  const [ change, setChange ] = useState('not-change')
  
  return (
    <>
    <div className='container'>
        <div className='wrap'>
              <div></div>
              <h1>FASTKART.</h1>
              <div>
              <MdOutlineLocationOn size='30px'/>
              </div>
        <Input />
        </div>

        <div className='right'>
          <div className='LD'><div>Language</div><span><IoIosArrowDown /></span>
          </div>
          <div className='line'></div>
          <div 
          className='LD'>Dollar<span><IoIosArrowDown />
</span></div>
          <Icons display='A' />
          <div className='line'></div>
          <Icons display='C' />
          <div className='line'></div>
          <div>
            <div onMouseOver={ () => setChange('change') } onMouseLeave={ () => setChange('not-change') }><Icons display='B' /></div>
            
            <div className={`modal ${change}`} onMouseOver={()=>setChange('change')} onMouseLeave={()=> setChange('not-change')}>

            </div>
          </div>
          <div>&times;</div>
        </div>
      </div>
      
    </>
  )
}



export default Header;
