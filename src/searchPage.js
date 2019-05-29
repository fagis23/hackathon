import React from 'react';
import Back from './Foto/back.svg';
import { NavLink } from "react-router-dom";


const SearchPage = ()=>{

    return(
        <div className="page-container">
            <div className="header-page">
                <div className="image-back">
                    <NavLink to="/">
                        <img alt="Loading" src={Back} />
                    </NavLink>
                </div>

                <div className="component-help">
                    <p>
                     <span>Bantuan</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SearchPage;