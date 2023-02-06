import React from 'react'




const ButtonReset = ({setState, resetValue, title}) => {

  const handleReset = () => {
    setState(resetValue)
  } 

  return (
    <button onClick={ handleReset }>{title}</button> 
  )
}

export default ButtonReset