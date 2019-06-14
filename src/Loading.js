import React from 'react';
import Background from './Foto/background.png';
import { NavLink } from "react-router-dom";

import "./Loading.css";

const LoadingComponent = () =>{

    return(

        <React.Fragment>
        
         <div className="first">
        <div  className="loading">

        </div>
  
        <div className="container">
          <NavLink  to="/content">
                 <button className="cancelButton">Cancel</button>
                </NavLink>
        </div>
        </div>    
        
        
        
        </React.Fragment>

    )
    
}

export default LoadingComponent;