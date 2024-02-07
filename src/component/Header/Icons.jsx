import { FaExchangeAlt } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
const Icons = ({ display }) => {
  console.log(display)
  return (
      <div>
      <div style={ { borderRadius: '100%', border: '1px solid black', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center',margin: '5px', cursor: 'pointer' } }>
      {display === 'A' && <FaExchangeAlt size='18px'/>}
        
      {display === 'B' && <IoBagOutline size='18px'/>}
      {display === 'C' && <FaRegHeart size='18px'/>}
          </div>
    </div>
  )
}

export default Icons