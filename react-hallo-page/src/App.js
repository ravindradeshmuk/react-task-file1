import React from 'react'
import Card from './Componants/Card';
// import Nature from "./assets/Nature"

const App = () => {
   const names=["ravi","rahul","akshay","rushi","anand","achanak","prashat","akash","suraj","saurabh","ajay","pakaj"];

  return (
    <>
    {/* <img src={Nature} alt="fssegffz"></img> */}
    {/* <img
    style={{
          height:"100vh",
          width:"100vw",
    }}
     src="https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg" alt=""/> */}
     { names.map(( value , index ) => {

      return(
        <Card name={value} number={index+1}/>
      )

})};
    
    {/* <Card name ="ravi">Welcome to Maxotag</Card>
    
    <Card name="raja"> Welcome to Maxotag </Card>
    <Card name="sham"> Welcome to Maxotag </Card>
    <Card name="kachru"> Welcome to Maxotag </Card>
    <Card name="lakhan"> Welcome to Maxotag </Card>
    <Card name="ravsaheb"> Welcome to Maxotag </Card> */}
    
    
    
    </>
    
  
  );
  };
 export default App;

