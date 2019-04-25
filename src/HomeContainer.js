import React from 'react';
import HeaderComponent from './header';
import ContentComponent from './content';
import FooterComponent from './footer';




const HomeContainer = () =>{
    return(
        <React.Fragment>
            <HeaderComponent/>
            <ContentComponent/>
            <FooterComponent/>
        </React.Fragment>
    )
}


export default HomeContainer;