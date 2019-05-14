import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './HomeContainer';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';

import UmumComponent from './umumContent';
import DonaComponent from './donaContent';
import FlexiFastComponent from './flexifastContent';
import AmanComponent from './amanContent';
import ProSeriesComponent from './proseriesContent';
import PelunasanAwalComponent from './pelunasanawalContent';
import PromosiComponent from './promosiContent';
import PembayaranComponent from './pembayaranContent';



const App = () =>{

    return(
        // <HomeContainer/>
        <Router>
            <Switch>
                <Route path='/' exact component={HomeContainer}/>  
                <Route path='/Umum'  component={UmumComponent}/>
                <Route path='/DONA/'  component={DonaComponent}/>
                <Route path='/FlexiFast/'  component={FlexiFastComponent}/>
                <Route path='/AMAN/'  component={AmanComponent}/>
                <Route path='/proSERIES/'  component={ProSeriesComponent}/>
                <Route path='/Pelunasan-Awal/'  component={PelunasanAwalComponent}/>
                <Route path='/Promosi/'  component={PromosiComponent}/>
                <Route path='/Pembayaran/'  component={PembayaranComponent}/>
                  
            </Switch>    
        </Router>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

