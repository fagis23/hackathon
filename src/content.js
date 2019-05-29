
import React from 'react';
import umum from './Foto/budget.svg';
import DONA from './Foto/wallet.svg';
import FlexiFast from './Foto/dashboard.svg';
import AMAN from './Foto/shield.svg';
import proSERIES from './Foto/shield1.svg';
import Pelunasan from './Foto/bill.svg';
import promosi from './Foto/discount.svg';
import pembayaran from './Foto/pay2.svg';
import email from './Foto/mail.svg';
import support from './Foto/support1.svg';
import { NavLink } from 'react-router-dom';
import './footer.css';
import './content.css';
import ChatComponent from './chat';
<<<<<<< HEAD
import HeaderComponent from './header';

=======
import Chatbot from "./Chatbot";
>>>>>>> 9f83d2d4d4bc6af1813324aa93c346a795085f24

const ContentComponent = ()=>{

    const Help = props =>{
        const {helpLogo,helpName,helpLink}=props;

        return(
        <div className='help-content' >
            
            <div className='help-logo'>
                <img src={helpLogo} alt='Loading'/>
            </div>

            <div className='help-name'> 
             <a href={helpLink}> <p><span>{helpName}</span></p> </a>
            </div>
        </div>
    
        )
    }

    const Category = props =>{

        const {categoryLogo,categoryDesc} = props;
        return(

        <div className='category-item' >
            <div className='category-logo'>
                <img src={categoryLogo} alt='Loading' />
              
            </div>  
            <span className='umum'> {categoryDesc} </span>
        </div>
        
        )
    }

    return(
        <React.Fragment>

        <HeaderComponent/>
    <div className='content-container'>
        
        <div className="body-container">
        <p><span>Hai Cristiane !</span></p>
        <p><span>Ada yang bisa kami bantu?</span></p>

        <div className='search-container'>
<<<<<<< HEAD
               
                <form className="form-search">
                    <input type='text' placeholder='Type...'/>
                    <NavLink to='/search' style={{textDecoration:'none' , color:'black'}} >
                    <input type="button" name="" value="Search"  />
                    </NavLink>
                </form>
            
=======
            <div className='search-content'>
                <div className='image1'>
                    <img alt='Loading' src={glass}/>
                </div>
                <div className = "form-text">
                    <input type='text' placeholder='Search'/>
                </div>
                <div className='image2'>
                    <img alt='Loading' src={microphone}/>
                </div>

            </div>
          </div>
>>>>>>> 9f83d2d4d4bc6af1813324aa93c346a795085f24
        </div>


        <p><span>Pilih kategori masalah anda</span></p>


    <div className='category-container'>

        <NavLink to='/Umum/' style={{textDecoration:'none' , color:'black'}}>
            <Category categoryLogo={umum} categoryDesc='Umum' />
        </NavLink>

        <NavLink to='/DONA/' style={{textDecoration:'none' , color:'black'}} >
            <Category categoryLogo={DONA} categoryDesc='DONA' />
        </NavLink>

        <NavLink to='/FlexiFast/' style={{textDecoration:'none' , color:'black'}}>
            <Category categoryLogo={FlexiFast} categoryDesc='FlexiFast'  />
        </NavLink>

        <NavLink to='/AMAN/' style={{textDecoration:'none' , color:'black'}}>
            <Category categoryLogo={AMAN} categoryDesc='AMAN' />
        </NavLink>

        <NavLink to='/proSERIES/' style={{textDecoration:'none' , color:'black'}}>
            <Category categoryLogo={proSERIES} categoryDesc='proSERIES'  />
        </NavLink>

        <NavLink to='/Pelunasan-Awal/' style={{textDecoration:'none' , color:'black'}}>
            <Category categoryLogo={Pelunasan} categoryDesc='Pelunasan Awal' />
        </NavLink>

        <NavLink to='/Promosi/' style={{textDecoration:'none' , color:'black'}}>
            <Category categoryLogo={promosi} categoryDesc='Promosi' />
        </NavLink>

        <NavLink to='/Pembayaran' style={{textDecoration:'none' , color:'black' }}>
            <Category categoryLogo={pembayaran} categoryDesc='Pembayaran' />
        </NavLink>
        
    </div>
   
        <div className='help'>
            <p>Hubungi Kami</p>
        </div>

        
            
            <Help helpLink='https://www.homecredit.co.id/Hubungi-Kami'  helpLogo={email} helpName='care@homecredit.co.id'/>
            

           
            <Help helpLink= "tel:02129539600" helpLogo={support} helpName='(021)2953 9600'/>
            

            <NavLink to="/Chat">
            <ChatComponent/>
            </NavLink>
            </div>
            

        
        
    
    
    </div>

    </React.Fragment>
  );
};

export default ContentComponent;
