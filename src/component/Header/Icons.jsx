import { FaExchangeAlt } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
const Icons = ({ display }) => {
  console.log(display)
  return (
      <div>
      <div style={ { borderRadius: '100%', border: '1px solid black', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center',margin: '5px' } }>
      {display === 'A' && <FaExchangeAlt />}
        
      {display === 'B' && <IoBagOutline />}
          </div>
    </div>
  )
}

export default Icons