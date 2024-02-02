import { useRef, useState } from 'react'

const Ref = () => {
    const [toggle, setToggle] = useState(false)
    const myRef = useRef()
    const change = () => {
        myRef.current.style.left = '50px'
        setToggle(false)

    }
    const change2 = () => {
        myRef.current.style.left = '-500px'
        setToggle(true)

    }
  return (
      <div>
          <h1>Ref</h1>
          <div className='slide' ref={myRef}>
              Hello world
          </div>
          
          {toggle? <button onClick={
              () => {
                  change;
              } }>Change2</button> : <button onClick={ () => {
                change2;
            }  }>Change</button> }
    </div>
  )
}

export default Ref