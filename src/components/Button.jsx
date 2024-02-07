const Button = (props) => {
  return (
      <div>
          <button className={`buttons ${props.effect}`}>{ props.title}</button>
    </div>
  )
}

export default Button