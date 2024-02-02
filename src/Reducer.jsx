import { useReducer } from 'react'
import {reducer} from './component/reducer'

const Reducer = () => {
    const [ state, dispatch ] = useReducer(reducer, { count: 0, show: false})
    
  return (
      <div>
          <h1 className={`${state.show ? 'show': 'not-show'}`}>Reducer</h1>
          <div>count: { state.count}</div>
          <button className='button' onClick={ () => {
              dispatch({type: 'ADD'})
              dispatch({type: 'Toggle'})
          }}>Add count show true</button>
          {state.show && <div>this is reducer show</div>}
    </div>
  )
}

export default Reducer