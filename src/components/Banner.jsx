import react from 'react'
import { useState } from 'react'
import './Header/style.css'

const Banner = () => {
    const [change, setChange] = useState('change')
    
    return (
        <div>
            <div style={{backgroundColor: '#0BAF9A', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '30px', paddingRight:'10px' }}>
                <div></div>
                <div>Welcome to Fastkart!</div>
                <div onClick={() => setChange('not-change')} style={{fontWeight: 'bold', cursor:'pointer'}}>Close X</div>
            </div>
        </div>
    )
}

export default Banner