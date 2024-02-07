import react from 'react'
import './App.css'
import Banner from './components/Banner'
import Header from './components/Header/Header'
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react'
import Hero from './components/Hero';

const App = () => {
  const [change, setChange] = useState('not-change')
  return (
    <div>
      <Banner />
      <Header/>
      <div className='subheader'>
        <div className="sub-wrapper">
          <div className="category">
            <div>All categories</div>
          </div>
          <div className="line"></div>
          <div className="nav-hold">
            <div>
              <div  className='LD'><span>Home</span><span><IoIosArrowDown cursor='pointer'  /></span></div>

              
            </div>
      
            <div className='LD'><span>Shop</span><span><IoIosArrowDown cursor='pointer'  /></span></div>
            <div className='LD'><span>Product</span><span><IoIosArrowDown cursor='pointer'  /></span></div>
            <div className='LD'><span>Mega Menu</span><span><IoIosArrowDown cursor='pointer'  /></span></div>

            {/* <div>
              <div className='LD' onMouseOver={() => setChange('change')} 
                onMouseLeave={() => setChange('not-change')}><span>Blog</span><span><IoIosArrowDown cursor='pointer'  /></span></div>

              <div className={`goat ${change}`}
                onMouseOver={() => setChange('change')} 
                onMouseLeave={() => setChange('not-change')}>
                  <div className='navi'>Blog Detail</div>
                  <div className='navi'>Blog Grid </div>
                  <div className='navi'>Blog List </div>
              </div>
            </div> */}
            
            <div className='LD'><span>Pages</span><span><IoIosArrowDown cursor='pointer'  /></span></div>
            
            <div>
              <div className='LD' onMouseOver={() => setChange('change')} 
                onMouseLeave={() => setChange('not-change')}><span>Seller</span><span><IoIosArrowDown cursor='pointer'  /></span></div>

              <div className={`goat ${change}`}
                onMouseOver={() => setChange('change')} 
                onMouseLeave={() => setChange('not-change')}>
                  <div className='navi'>Become a Seller</div>
                  <div className='navi'>Seller Dashboard</div>
                  <div className='navi'>Seller Detail</div>
                  <div className='navi'>Seller Detail 2</div>
                  <div className='navi'>Seller Grid </div>
                  <div className='navi'>Seller Grid 2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Hero />
    </div>
  )
}

export default App
