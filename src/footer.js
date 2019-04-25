import React from 'react';
import Img1 from './Foto/sale.svg';
import Img2 from './Foto/contract.svg';
import Img3 from './Foto/profile.svg';
import Img4 from './Foto/support.svg';
import Img5 from './Foto/house.svg';
import './footer.css'

const FooterComponent = () =>{

    const Category = props =>{
        const {footerLogo,footerDesc} = props;
        return(
            <div className='footer-item' >
                <div className='footer-logo'>
                <img src={footerLogo} alt='Loading' />
                </div>  
                <div>
                <span className='footer'> {footerDesc} </span>
                </div>
            </div>
        
        )
    }


    return(
        <div className='footer-component'>
        
        <Category footerLogo={Img5} footerDesc='Beranda'/>
        <Category footerLogo={Img2} footerDesc='Kontrak'/>
        <Category footerLogo={Img1} footerDesc='Promosi'/>
        <Category footerLogo={Img4} footerDesc='Bantuan'/>
        <Category footerLogo={Img3} footerDesc='Profile'/>



        </div>
    )
}

export default FooterComponent;