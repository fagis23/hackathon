import React from 'react';
import Img from './Foto/glass.png';
import Img2 from './Foto/microphone.png';
import Img3 from './Foto/umum1.PNG';
import Img4 from './Foto/dona3.PNG';
import Img5 from './Foto/flexi2.PNG';
import Img6 from './Foto/aman2.PNG';
import Img7 from './Foto/pro2.PNG';
import Img8 from './Foto/pelunasan3.PNG';
import Img9 from './Foto/promosi2.PNG';
import Img10 from './Foto/pelunasan2.PNG';

import './content.css';

const ContentComponent = ()=>{
    const Category = props =>{
        const {categoryLogo} = props;
        return(
         
        
            <div className='category-item' >
                <div className='category-logo'>
                <img src={categoryLogo} alt='Loading' />
                </div>
                
            </div>
        
        )
    }

    return(

    <div className='content-container'>

        <p><span>Hai 'Username' !</span></p>
        <p><span>Ada yang bisa kami bantu?</span></p>

        <div className='search-container'>
            <div className='search-content'>
                <div className='image1'>
                <img alt='Loading' src={Img}/>
                </div>
                <div>
                <input type='text' placeholder='Search'/>
                </div>
                <div className='image2'>
                <img alt='Loading' src={Img2}/>
                </div>
            </div>
        </div>

        <p><span>Pilih kategori masalah anda</span></p>


    <div className='category-container'>
        
        <Category categoryLogo={Img3} />
        <Category categoryLogo={Img4} />
        <Category categoryLogo={Img5} />
        <Category categoryLogo={Img6} />
        <Category categoryLogo={Img7} />
        <Category categoryLogo={Img8} />
        <Category categoryLogo={Img9} />
        <Category categoryLogo={Img10} />
    </div>

        <p>Hubungi Kami</p>

        <div className='help-container'>
        <div className='help-content'>
            
        </div>

        </div>
        

    </div>
    )
}

export default ContentComponent;