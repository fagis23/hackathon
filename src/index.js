import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './HomeContainer';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';

import UmumComponent from './umumContent';



const App = () =>{

    return(
        // <HomeContainer/>
        <Router>
            <Switch>
                <Route path='/' exact component={HomeContainer}/>  
                <Route path='/Umum'  component={UmumComponent}/>
                <Route path='/DONA/'  component={UmumComponent}/>
                <Route path='/FlexiFast/'  component={UmumComponent}/>
                <Route path='/AMAN/'  component={UmumComponent}/>
                <Route path='/proSERIES/'  component={UmumComponent}/>
                <Route path='/Pelunasa-Awal/'  component={UmumComponent}/>
                <Route path='/Promosi/'  component={UmumComponent}/>
                <Route path='/Pembayaran/'  component={UmumComponent}/>
                  
            </Switch>    
        </Router>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

