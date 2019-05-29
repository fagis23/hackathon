
import React from 'react';

import ContentComponent from './content';
import FooterComponent from './footer';



const HomeContainer = () =>{
    return(
        <React.Fragment>
            <ContentComponent/>
            <FooterComponent/>
        </React.Fragment>
    )
}


export default HomeContainer;
