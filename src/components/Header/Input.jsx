import react from 'react'
import './style.css'
import { CiSearch } from "react-icons/ci";

const Input = () => {
    return (
        <>
        <div className='inputHold'>
         <input placeholder="search for product, delivered to your door..." />
         <div><CiSearch  /> </div>
         </div>
         </>
    )
}

export default Input