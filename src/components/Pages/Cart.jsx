import styled from '@emotion/styled'

import { useSelector } from 'react-redux/es/hooks/useSelector';
const Cart = () => {
    const product = useSelector((state)=> state.counter.item)
  return (
      <Container>
          <Table>
              <TR>
                  <THead>Name</THead>
                  <THead>Name</THead>
                  <THead>Name</THead>
                  <THead>Name</THead>
                  <THead>Name</THead>
                  <THead>Name</THead>
              </TR>
              {
                  product?.map((props) => ((
                      <TR key={props.id}>
                          <TBody>{ props.name}</TBody>
                          <TBody>{ props.category}</TBody>
                          <TBody>{ props.price}</TBody>
                          <TBody>{ props.quantity}</TBody>
              </TR>
                  )))
              }
          </Table>
    </Container>
  )
}

export default Cart;

const TR = styled.tr`
    text-align: center;
`;
const TBody = styled.td``
const THead = styled.th`
    border: 1px solid black;
    padding: 10px 20px;
`;
const Table = styled.table`
    width: 40rem;
    border-collapse: collapse;
    margin-top: 20px;
`;
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;