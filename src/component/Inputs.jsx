import { CiSearch } from "react-icons/ci";

const Input = () => {
  return (
    <>
    <div className="inputHold">
      <input placeholder='Search' type="text"/>
      <div><CiSearch size='30px'/></div>
    </div>
    </>
  )
}

export default Input