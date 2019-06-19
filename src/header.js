import React from 'react';
import { NavLink } from "react-router-dom";
import exit from './Foto/exit.svg';

import './header.css';

const HeaderComponent = ()=>{

  const exitButton = ()=>{
    window.localStorage.clear();
  }

    return(
        <div className='header'>
            <div className='header-component'>

             <p><span>Bantuan</span></p>
            </div>

            <div className="component-image">
          <NavLink to="/">
            <input onClick={exitButton} type="image" alt="Loading" src={exit} />
          </NavLink>
        </div>

        </div>
    )
}

export default HeaderComponent;