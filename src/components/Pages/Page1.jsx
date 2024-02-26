import { useContext, useEffect, useState } from "react"
import { AppState } from "../GlobalSate"
import styled from '@emotion/styled'
import axios from "axios";

const Page1 = () => {

  const { count, setCount } = useContext(AppState)
  const [data, setData] = useState()

  const getProduct = async () => {
    await axios.get('https://fakestoreapi.com/products').then((res) => {
      console.log(res.data)
      setData(res.data)
    }).catch((error) => {
      console.log(error)
    })
  }
  useEffect(() => {
    getProduct()
    console.log('hello');
  },[])

  return (
      <Container>
          <div>Count:{count} </div>
          <Button onClick={()=> setCount(()=> count + 1)}>Add</Button>

      { data?.map((props) => (
        <div key={ props.id }>
          <div>{ props.title }</div>
          <Image src={ props.image} />
        </div>
      ))}
    </Container>
  )
}

export default Page1

const Container = styled.div`
  /* background-color: chartreuse; */
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
`
const Button = styled.button`
  background-color: gold;
  padding: 4px 10px;
`