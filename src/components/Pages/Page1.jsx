import { useContext } from "react"
import { AppState } from "../GlobalSate"
import styled from '@emotion/styled'

const Page1 = () => {

    const {count, setCount} = useContext(AppState)
  return (
      <div>
          <div>Count:{count} </div>
          <button onClick={()=> setCount(()=> count + 1)}>Add</button>
    </div>
  )
}

export default Page1