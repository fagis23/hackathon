import React from 'react';
import HeaderComponent from './header';
import profile from './Foto/user.svg';
import plusImage from './Foto/plus-sign.svg'
import Slider from "react-slick";
// import axios from 'axios';


import './umumContent.css';
import ChatComponent from './chat';
import FooterComponent from './footer';
import Container from './content';

// const response = {
//     object : {
//         status: 'success',
//         message: 'authorized',
//         obj : [
//             {
//                 id: 1,
//                 avatar: 'img, url',
//                 message: 'loremipsum',
//                 user: 'mantap'
//             }    ,
            
//             {
//                 id: 2,
//                 avatar: 'img, url',
//                 message: 'loremipsum',
//                 user: 'mantap'
//             }    ,
//         ]    
//     }
// }


const UmumComponent = ()=>{

    // const [apiData, setApiData] = useState([]);

    // const getApiAxios = () => {
    //     axios.get("http://10.58.30.164:8989/user/getall").then(res => {
    //       setApiData(res.data);
    //     });
    //   };

    const Question = props =>{

        return(
    <div className='faq-question-container'>
        <div className='question'>

        <p><span>{props.name}</span></p>
        <input type='image' src={plusImage} alt='Loading'/>
        </div>
    </div>
    )
}

    const settings = {
        dots: false,
        infinite: true,
        speed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        
        
    };
    return(
    <React.Fragment>
        <HeaderComponent/>

        <div className='topic' >
                <span>Topic</span>
        </div>
          
        <div className='user-question-container'>
            
            <Slider className='slider ' {...settings}>
           

                <div className='slider-container'>
                    <div className='user-question'>
                        <img src={profile} alt='Loading...'/>
                        <span className='question'><i>"User Question 1"</i></span>
                        <span className='username'>-Tasha</span>
                    </div>
                </div>
                     
                <div className='slider-container'>
                    <div className='user-question'>
                        <img src={profile} alt='Loading...'/>
                        <span className='question'><i>"User Question 2"</i></span>
                        <span className='username'>-Tony</span>
                    </div>
                </div>

                <div className='slider-container'>
                    <div className='user-question'>
                        <img src={profile} alt='Loading...'/>
                        <span className='question'><i>"User Question 3"</i></span>
                        <span className='username'>-Fachri</span>
                    </div>
                </div>

            </Slider> 
            
          </div>

        <div className='faq'>
            <span>Frequently Asked Question</span>
        </div>

        <Question name='Question 1'/>
        <Question name='Question 2'/>
        <Question name='Question 3'/>


        <ChatComponent/>

        <FooterComponent/>
        {/* <div>
        <table>
          <tr>
            <th>Title</th>
            <th>Director</th>
            <th>Producer</th>
          </tr>
          {apiData.map(data => (
            <tr >
              <td>{data.username}</td>
              <td>{data.email}</td>
            </tr>
          ))}
        </table>
      </div>
      <br />
      <button onClick={() => getApiAxios()}>Get API</button> */}
       

        
    </React.Fragment>
    )
}


export default UmumComponent;