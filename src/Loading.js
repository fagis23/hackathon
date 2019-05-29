import React from 'react';
import Background from './Foto/background.png';
import { NavLink } from "react-router-dom";

import "./Loading.css";

const LoadingComponent = () =>{

    const sectionStyle = { 

        width: "100%",
        backgroundSize: "cover",
        height: "487px",
        backgroundImage: `url(${Background})`
      };

    return(

        <React.Fragment>
        
         <div className="first">
        <div  className="loading">

        </div>
  
        <div className="container">
          <NavLink  to="/">
                 <button>Cancel</button>
                </NavLink>
        </div>
        </div>    
        
        
        
        </React.Fragment>

    )
    
}

export default LoadingComponent;