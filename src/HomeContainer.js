
import React from 'react';

import ContentComponent from './content';
import FooterComponent from './footer';
import HeaderComponent from './header';


const HomeContainer = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <ContentComponent />
      <FooterComponent />
    </React.Fragment>
  );
};

export default HomeContainer;
