import React from "react";

let Navbar=()=>{

    return(
         <>
         <div>
         <ul>
        <navLink to="/"><li>Home</li></navLink>
        <navLink to="/about"><li>About Us</li></navLink>
        <navLink to="/contact us"><li>Contact Us</li></navLink>
        <navLink to="/privacy policy"><li>Praivacy Policy</li></navLink>
        <navLink to="/login"><li>Login</li></navLink>
        
     </ul>
     </div>
         </>
    );
};
export default Navbar;