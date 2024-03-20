import React from 'react'
import styled from '@emotion/styled'
import { data } from './data'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart,removeItemFromCart } from '../../RecatRedux/Global'

const ProductPage = () => {

const dispatch = useDispatch()

    const myData = useSelector((state)=> state.counter.item)
    const addItem = (props) => {
        dispatch(addToCart(props))
    }

  return (
      <Container>
          { data.map((props) => (
              <Card key={props.id}>
              <Img></Img>
              <Holder>
                      <Text>{ props.name}</Text>
                      <Text>${ props.price}</Text>
                      <Text>QTY: { props.quantity}</Text>
              </Holder>
              { !myData?.find((el=> el.id === props.id))?.qty? <Button bg='1111' textSize='15px' onClick={()=> addItem(props)}>Add to Cart</Button> : <Buttons>
                  <Button bg='' textSize='25px' onClick={()=> addItem(props)}>+</Button>
                      <div>{ myData.find((el=> el.id === props.id))?.qty}</div>
                  <Button bg='' textSize='25px' onClick={()=> dispatch(removeItemFromCart(props))}>-</Button>
              </Buttons>}
              
          </Card>
          ))}
    </Container>
  )
}

export default ProductPage;

const Button = styled.button`
    width: 100%;
    height: 30px;
    border: 0px;
    outline: none;
    background-color: ${({ bg }) => bg ? 'gold' : 'lightgray'};
    cursor: pointer;
    color: black;
    transition: all .3s ease-in-out;
    font-weight: 700;
    font-size: ${({textSize})=> textSize};

    :hover{
        background-color: black;
        color: white;
    }
    /* margin: 3px; */
`;
const Buttons = styled.div`
    display: flex;
    margin-top: 10px;

    div{
        margin: 5px;
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
const Text = styled.div``
const Holder = styled.div``
const Img = styled.div`
    width: 200px;
    height: 200px;
    background-color: gold;
`;
const Card = styled.div`
    padding: 10px;
    box-shadow: black 1px 2px 2px 1px,lightgray  1px 1px 1px 1px ;
    margin: 10px;
`;
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`