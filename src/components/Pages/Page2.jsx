import { useState } from "react";
import axios from 'axios'

const Page2 = () => {
  const [ title, setTitle ] = useState('')
  const [ description, setDescription ] = useState('')
  // const [store, setStore] = useState({})

  const handleSubmit = async(e) => {
    e.preventDefault()
    await axios.post('https://fakestoreapi.com/products',{title: title}).then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title" value={title} onChange={(e)=> setTitle(e.target.value)}/>
        <input placeholder="Description" value={ description} onChange={(e)=> setDescription(e.target.value)}/>
        {/* <input /> */ }
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Page2