import { LiaExchangeAltSolid } from "react-icons/lia";
import { PiHandbagLight } from "react-icons/pi";
import { BsHeart } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

const Icons = ({display}) => {
// console.log('this is props',props)
    return(
        <div>
           <div style={{borderRadius: '100%',border:'1px solid #ECECEC', width: '40px', height: '40px', display: 'flex', margin:'5px', alignItems:'center', justifyContent: 'center', cursor:'pointer'} }>
             {display === 'A' && <LiaExchangeAltSolid />}
             {display === 'C' && <BsHeart />}
             {display === 'B' && <PiHandbagLight />}
             {display === 'D' && <CiSearch />}
            </div> 

            
            
        </div>
    )
}

export default Icons