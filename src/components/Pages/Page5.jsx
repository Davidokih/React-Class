import styled from '@emotion/styled'
import useForm from '../../Handler/useForm';
import axios from 'axios';
const Page5 = () => {

  const { handleChange, values, error } = useForm()
  
console.log(error);
  const FormData = async(values) => {
    
    await axios.post('url', values).then((res)=> {return res}).catch((error)=>{return error})
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (Object.keys(values).length !== 0 && Object.keys(error).length === 0) {
      FormData(values)
    } else {
      alert('An error occured')
    }
  }
  return (
    <C0ntainer>
      <Wrapper onSubmit={handleSubmit}>
        <Div>SignUp</Div>
        <Hold>
        <Input placeholder='Full Name' name='fullName' onChange={handleChange}/>
          { error.fullName && <Error>{error.fullName }</Error>}
        </Hold>
        <Hold>
        <Input placeholder='Email' name='email' onChange={handleChange}/>
        { error.email && <Error>{error.email }</Error>}
        </Hold>
        <Hold>
        <Input placeholder='Password' name='password' onChange={handleChange}/>
        { error.password && <Error>{error.password }</Error>}
        </Hold>
        <Button>Submit</Button>
      </Wrapper>
    </C0ntainer>
  )
}

export default Page5;

const Div = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: 700;
`
const Error = styled.div`
  color: red;
`
const Hold = styled.div`
  
`
const Button = styled.button`
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #0cdf0c;
`
const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: 1px solid black;
  border-radius: 5px;
  height: 30px;
  padding: 0px 10px;
  width: 250px;
`
const Wrapper = styled.form`
  background-color: lightgray;
  padding: 30px 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const C0ntainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 70px);
`;