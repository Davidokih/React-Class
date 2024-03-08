import { useContext, useEffect, useState } from "react"
import { AppState } from "../GlobalSate"
import styled from '@emotion/styled'
import axios from "axios";
import { NavLink } from "react-router-dom";
const Page1 = () => {

  const { count, setCount } = useContext(AppState)
  const [ data, setData ] = useState()
  
  // const data = [
  //   {
  //     id:1,
  //     title: 'anything',
  //     category: 'men',
  //     image: 'sdfgvhbjn'
  //   }
  // ]

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
  }, [])
  
  const deleteProduct = async (id) => {
    await axios.delete(`https://fakestoreapi.com/products/${id}`).then((res) => {
      console.log(res)
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
      <Container>
          <div>Count:{count} </div>
          <Button onClick={()=> setCount(()=> count + 1)}>Add</Button>

      { data?.map((props) => (
        <div key={ props.id }>
          <NavLink to={`/page4/${props.id}`}><div>{ props.title }</div></NavLink>
          <Image src={ props.image } />
          <NavLink to={ `/page3/${props.id}` }><div> Edit</div></NavLink>
          <button onClick={()=> deleteProduct(props.id)}>Delete</button>
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