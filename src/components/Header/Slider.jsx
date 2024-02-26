import React from 'react'

const Slider = (props) => {
  return (
      <div className={`slider-hold ${props.display}`} onClick={props.closeMenu}>
          <div className={`slider ${props.display}`}>
              <div className='menu-head'>
                  <div>Menu</div>
                  <div className="cancel" onClick={props.closeMenu}>&times;</div>
              </div>

              <div className="nav-hold">
                  <div>Hello</div>
                  <div>Icon</div>
              </div>
              <div className="nav-hold">
                  <div>Hello</div>
                  <div>Icon</div>
              </div>
              <div className="nav-hold">
                  <div>Hello</div>
                  <div>Icon</div>
              </div>
              <div className="nav-hold">
                  <div>Hello</div>
                  <div>Icon</div>
              </div>
          </div>
    </div>
  )
}

export default Slider