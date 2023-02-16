import React from "react";
const Card = ({ name , children }) => {
    return (
      <div
       style={{
        backgroundColor:"red",
        padding:"1rem",
        margin:"2rem",
        
  
  
       }}>
       
        <h1>hallo :{name}</h1>
        <h1 style= {{color : "white" }}>{children}</h1>
        
        <p>may name is ravindra i am from sangamner dist.ahmandnangr may name is ravindra 
          i am from sangamner dist.ahmandnangr may name is ravindra i am from sangamner dist.ahmandnangrmay 
          name is ravindra i am from sangamner dist.ahmandnangrmay name is ravindra i am from sangamner dist.ahmandnangr may name is ravindra i am from sangamner dist.ahmandnangrmay name is ravindra i am from sangamner dist.ahmandnangr 
          may name is ravindra i am from sangamner dist.ahmandnangrv may name is ravindra i am from sangamner dist.ahmandnangr
          may name is ravindra i am from sangamner dist.ahmandnangr
          may name is ravindra i am from sangamner dist.ahmandnangr
        </p>
      </div>
      
    )
  }
  
  export default Card;