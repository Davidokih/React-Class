import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";

const Page4 = () => {
  const [ data, setData ] = useState()
  const {id} = useParams()
  const getASingleProduct = async () => {
    await axios.get(`https://fakestoreapi.com/products/${id}`).then(res => {
      console.log(res.data);
      setData(res.data)
    }).catch(error => {
      console.log(error);
    })
  }

  useEffect(() => {
    getASingleProduct()
  },[])
  return (
    <div>
      <div>{ data.title}</div>
    </div>
  )
}

export default Page4