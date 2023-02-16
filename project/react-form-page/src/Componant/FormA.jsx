import React, { useState } from 'react'

const FormA = () => {
  const [FirstName , setFirstName] = useState()
  const [LastName , setLastName] = useState()
  const [Email, setEmail] = useState()
  const [ Password, setPassword] = useState()
  const submitHandler = (e) => {
    e.preventDefault();
    {Form = {
      FirstName,
      LastName,
      Email,
      Password,
    };
    
  }};

   return (
    <>
      <div class="container">
        <h1>FORM HANDLING</h1>
        <form onSubmit={submitHandler}>
          <input type="text"
          value={FirstName} 
          
          placeholder='enter your frist name'>
            const{(e)=>setFirstName(e.target.value)}
            </input>
          <input type="text" 
         value={LastName}
          placeholder='enter your last name'>
          const{(e)=>setLastName(e.target.value)}
          </input>
          <input type="text" 
          value={Email}
          placeholder='enter  email'>
         const{(e)=>setEmail(e.target.value)}
         
          </input>
          <input type="passwrod" 
          value={Password}
          placeholder='enter  password'>
           const{(e)=>setPassword(e.target.value)}
          </input>
          <input class="btn" type="text"
           placeholder='submit'>

           </input>

        </form>
      </div>

    </>
  )
}

export default FormA;