import react from 'react'
import { LiaExchangeAltSolid } from "react-icons/lia";
import { PiHandbagLight } from "react-icons/pi";
import { BsHeart } from "react-icons/bs";

const Icons = ({display}) => {
// console.log('this is props',props)
    return(
        <div>
           <div style={{borderRadius: '100%',border:'1px solid #ECECEC', width: '40px', height: '40px', display: 'flex', margin:'5px', alignItems:'center', justifyContent: 'center', cursor:'pointer'} }>
             {display === 'A' && <LiaExchangeAltSolid />}
             {display === 'C' && <BsHeart />}
             {display === 'B' && <PiHandbagLight />}
            </div> 

            
            
        </div>
    )
}

export default Icons