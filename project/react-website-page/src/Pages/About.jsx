import React from 'react';
import { useNavigate } from 'react-router-dom';


const About = () => {
  const Navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefoult()
    alert('login sucessfull');
    Navigate("/")

  }
  return (
    <div>

      <h1>About page</h1>


      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cum autem tenetur harum iusto,
        sunt labore similique sequi! Consequuntur error
        laborum eligendi similique odit quia laudantium quaerat, voluptate officiis numquam. Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Nobis fuga odio perspiciatis eum odit.
        Explicabo modi ea vero nostrum voluptatum quisquam mollitia magni neque dolorum, voluptatibus repudiandae quas
        asperiores harum.</p>
      <form onSubmit={submitHandler}>
        <input  type="mail" required placeholder='enter your mail'></input>
        <input type="password" required placeholder='password'></input>
        <button>submit</button>

</form>
    </div>



  )
}

export default About;