
import UmumComponent from './umumContent';
import DonaComponent from './donaContent';
import FlexiFastComponent from './flexifastContent';
import AmanComponent from './amanContent';
import ProSeriesComponent from './proseriesContent';
import PelunasanAwalComponent from './pelunasanawalContent';
import PromosiComponent from './promosiContent';
import PembayaranComponent from './pembayaranContent';
import Chatbot from "./Chatbot";
import LoadingComponent from './Loading';
import SearchPage from './searchPage';



const App = () =>{

    return(
        
        <Router>
            <Switch>
                <Route path='/' exact component={HomeContainer}/>  
                <Route path='/Umum/'  component={UmumComponent}/>
                <Route path='/DONA/'  component={DonaComponent}/>
                <Route path='/FlexiFast/'  component={FlexiFastComponent}/>
                <Route path='/AMAN/'  component={AmanComponent}/>
                <Route path='/proSERIES/'  component={ProSeriesComponent}/>
                <Route path='/Pelunasan-Awal/'  component={PelunasanAwalComponent}/>
                <Route path='/Promosi/'  component={PromosiComponent}/>
                <Route path='/Pembayaran/'  component={PembayaranComponent}/>
                <Route path='/Chat/'  component={Chatbot}/>
                <Route path='/home/' component={LoadingComponent}/>
                <Route path='/kontrak/' component={LoadingComponent}/>
                <Route path='/promosi/' component={LoadingComponent}/>
                <Route path='/profile/' component={LoadingComponent}/>
                <Route path='/search' component={SearchPage}/>
            </Switch>    
        </Router>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
