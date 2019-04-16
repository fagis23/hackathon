import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeaderComponent from './header';
import ContentComponent from './content';



const App = () =>{

    return(
        <div className="container">
     <div className="header-main">
        <HeaderComponent/>
     </div>
     <div className="content">
        <ContentComponent/>
     </div>
     </div>       
        
    )
}



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

