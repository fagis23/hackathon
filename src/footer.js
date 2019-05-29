import React , {useState} from 'react';
import Img1 from './Foto/sale.svg';
import Img2 from './Foto/contract.svg';
import Img3 from './Foto/profile.svg';
import Img4 from './Foto/support.svg';
import Img5 from './Foto/house.svg';
import { NavLink } from 'react-router-dom';


import ContentComponent from "./content.js"
import './footer.css'
import LoadingComponent from './Loading';

const FooterComponent = () =>{

        const [selectedMenu, setSelectedMenu] = useState("bantuan");

        const setMenu = chosenMenu => {
          if (chosenMenu === "home") {
            setSelectedMenu("home");
          } else if (chosenMenu === "kontrak"){
            setSelectedMenu("kontrak");
          } else if (chosenMenu === "promosi"){
            setSelectedMenu("promosi");
          }else if ( chosenMenu === "bantuan"){
            setSelectedMenu("bantuan");
          }else if ( chosenMenu === "profile"){
            setSelectedMenu("profile");
          }
        };

        const ContentContainer = props => {
            if (props.menu === "home") {
              return <LoadingComponent />;
            } else if (props.menu === "kontrak") {
              return <LoadingComponent />;
            } else if (props.menu === "promosi") {
              return <LoadingComponent />;
            } else if (props.menu === "bantuan") {
              return null;
            } else if (props.menu === "profile") {
              return <LoadingComponent />;
              }
            }


        const Category = props =>{
        return(

            <div onClick= {props.Menu} className='footer-item' >
                <div className='footer-logo'>
                    <img src={props.footerLogo} alt='Loading' />
                </div>  
                <div className='footer'>
                    <span > {props.footerDesc} </span>
                </div>
            </div>
        
        )
    }


    return(
        <React.Fragment>
        <div className="bla">
        <div className='footer-component'> 

        <NavLink to='/home/' style={{textDecoration:'none' , color:'black'}}>
        <Category onClick={() => setMenu("home")} footerLogo={Img5} footerDesc='home'/>
        </NavLink>

        <NavLink to='/home/' style={{textDecoration:'none' , color:'black'}}>
        <Category onClick={() => setMenu("kontrak")} footerLogo={Img2} footerDesc='Kontrak'/>
        </NavLink>

        
        <NavLink to='/home/' style={{textDecoration:'none' , color:'black'}}>
        <Category onClick={() => setMenu("promosi")} footerLogo={Img1} footerDesc='Promosi'/>
        </NavLink>

        <Category onClick={() => setMenu("bantuan")} footerLogo={Img4} footerDesc='Bantuan'/>

        
        <NavLink to='/home/' style={{textDecoration:'none' , color:'black'}}>
        <Category onClick={() => setMenu("profile")} footerLogo={Img3} footerDesc='Profile'/>
        </NavLink>

        </div>
        </div>
        <ContentContainer menu={selectedMenu}/>
        </React.Fragment>
    ) 
}

export default FooterComponent;