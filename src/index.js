import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
import React from 'react';
import ReactDOM from "react-dom";
import UmumComponent from './umumContent';
import DonaComponent from './donaContent';
import FlexiFastComponent from './flexifastContent';
import AmanComponent from './amanContent';
import ProSeriesComponent from './proseriesContent';
import PelunasanAwalComponent from './pelunasanawalContent';
import PromosiComponent from './promosiContent';
import PembayaranComponent from './pembayaranContent';
import Chatbot from "./Chatbot";
import HomeContainer from './HomeContainer';
import LoginComponent from "./login";



const App = () =>{

    return(
        
        <Router>
            <Switch>
                <Route path='/' exact component={LoginComponent}/>
                <Route path='/content' component={HomeContainer}/>  
                <Route path='/umum/'  component={UmumComponent}/>
                <Route path='/DONA/'  component={DonaComponent}/>
                <Route path='/flexifast/'  component={FlexiFastComponent}/>
                <Route path='/AMAN/'  component={AmanComponent}/>
                <Route path='/proSERIES/'  component={ProSeriesComponent}/>
                <Route path='/pelunasan-awal/'  component={PelunasanAwalComponent}/>
                <Route path='/promosi/'  component={PromosiComponent}/>
                <Route path='/pembayaran/'  component={PembayaranComponent}/>
                <Route path='/chat/'  component={Chatbot}/>

            </Switch>    
        </Router>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
