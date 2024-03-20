import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './Global'

const Page = () => {
    const dispatch = useDispatch()
    const count = useSelector((state)=> state.counter.count)
    return (
        <div>
            <div>Counter: { count}</div>
            <button onClick={()=> dispatch(increment())}>Increment</button>
        </div>
    )
}

export default Page