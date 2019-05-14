import React ,{useEffect , useState} from 'react';
import plusImage from './Foto/plus-sign.svg'
import Back from './Foto/back.svg'
import Slider from "react-slick";
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import './umumContent.css'

import ChatComponent from './chat';
import FooterComponent from './footer';

const UmumComponent = ()=>{

        const [questionUser, setQuestionUser] = useState( []
         
        );

        const [isButtonClick, setIsButtonClick] = useState(false);
     
    const getQuestionUser = () => {
        axios.get("http://dongoabc.free.beeceptor.com/proseries").then(res => {
        const qqq = res.data;
        console.log("blabla");
        console.log(res) 
        setQuestionUser(qqq);
        });
      };

      useEffect(()=>{
        getQuestionUser();
      },[]);

    const Question = props =>{

        return(
    <React.Fragment>
      <div onClick={isButtonClick} className='faq-question-container'>
          <div className='question-button'>
            <span>{props.name}</span>
            <input  type='image' src={plusImage} alt='Loading'/>
          </div>
      </div>

      <div  className='scroll-downShow'> 
        <div className='question-faq'>
          <p>Lorem ipsum</p>
        </div>
      </div>
    </React.Fragment>
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

    // const handleClick = () =>{


    // }

return(

  <React.Fragment>
          
        <div className='header-umum'>
            <div className='component-image'>
                <NavLink to='/'>
                  <img alt='Loading' src={Back}/>
                </NavLink>
            </div>

            <div className='component-help'>
              <p><span>Bantuan</span></p>
            </div>
        </div>
        
        <div className='topic' >
                <span>ProSeries</span>
        </div>
          
        <div className='user-question-container'>
            
            <Slider className='slider ' {...settings}>
           
            {questionUser.map((data =>

              <div key={data.transactionID} className='slider-container'>
               
                    <div  className='user-question'>
                        
                        <span className='question'><i>{data.questionModelT.question}</i></span>
                        <span className='username'> -{data.userModelT.username} </span>
                    </div>
                    
              </div>
                ))}  
            </Slider> 
            
          </div>

        <div className='faq'>
            <span>Frequently Asked Question</span>
        </div>

       

        <div className='faq-container'>
        <Question name='Question 1'/>
        {/* <Question name='Question 2'/>
        <Question name='Question 3'/> */}
        </div>
        
        <div className='chat-content'>
        <ChatComponent/>
        </div>
         <FooterComponent />
        </React.Fragment>
    )
}

export default UmumComponent;

