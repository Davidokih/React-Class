import styled from "@emotion/styled"
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Page3 = () => {

  const [ values, setValues ] = useState({
    title: '',
    category: ''
  })
  const {id} = useParams()
  
  const change = (e)=>{
    let name = e.target.name
    let val = e.target.value

    setValues({...values, [name]: val})
  }

  const handleSubmit = async () => {
    if (values.title === '' || values.category === '') {
      alert('Expecting a Title and Category')
    }

    await axios.patch(`https://fakestoreapi.com/products/${id}`, values).then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    })
  }

  // console.log(values);
  return (
    <Container>
      <H1>Update</H1>
      <Holder>
        <Input placeholder="Title" name="title" onChange={change}/>
        <Input placeholder="Category" name="category" onChange={change}/>
        <Button onClick={handleSubmit}>Update</Button>
      </Holder>
    </Container>
  )
}

export default Page3;


const Input = styled.input`
  background-color: transparent;
  border: 1px solid black;
  outline: none;
  height: 30px;
  margin-bottom: 10px;
  border-radius: 5px;
  width: 250px;
  padding: 0px 5px;
  color: black;
`
const Button = styled.button`
  background-color: transparent;
  border: 1px solid black;
  color: black;
  transition: all .3s;
  cursor: pointer;
  height: 30px;
  border-radius: 5px;

  :hover{
    background-color: black;
    color: white;
  }
`
const Holder = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f6f3f3;
  padding: 20px 10px;
  border-radius: 5px;
`
const H1 = styled.h1``
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;