import React from 'react'
import Style from "./formHandlor.module.css";

const FormHandlor = () => {
  return (
    <div className={Style.FormHandlor}>
    <div>
        <input tyle="text" placeholder='enter your name'></input>
        <input tyle="text" placeholder='enter your name'></input>
         <input tyle="text" value='login'></input>
    </div>
    </div>
  )
}

export default FormHandlor