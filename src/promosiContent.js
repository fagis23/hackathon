import React, { useEffect, useState } from "react";
import plusImage from "./Foto/plus-sign.svg";
import Back from "./Foto/back.svg";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./umumContent.css";

import ChatComponent from "./chat";



const PromosiComponent = () => {
  const [questionUser, setQuestionUser] = useState([]);
  const [idClicked, setIdClicked] = useState("");

  //  const { questionData , setQuestionData } = useState({});

  const buttonOpen = (id) => {
    setIdClicked(id !== idClicked ? id : "");
  };

  const getQuestionUser = () => {
    axios
      .get("https://faqpagedatabasehehe.azurewebsites.net/question/searchquestionbytopic/promosi")
      .then(res => {
        const qqq = res.data;
        console.log("blabla");
        console.log(res);
        setQuestionUser(qqq);
      });
  };

  //  const clickQuestion = data.find(question => question.transactionID === transactionID);
  //  setQuestionData(clickQuestion)

  useEffect(() => {
    getQuestionUser();
  }, []);

  const Question = props => {
    const { click, name, answer} = props;

    return (
      <React.Fragment>
        <div onClick={click} className="faq-question-container">
          <div   className="question-button">
            <div className="name">
              <span>{name}</span>
            </div>
            <div className="image-button">
              <input type="image" src={plusImage} alt="Loading" />
            </div>
          </div>
        </div>

        <div className={props.clicked ? "scroll-downShow" : "scroll-downHide"}>
          <div className="question-faq">
            <p>{answer}</p>
          </div>
        </div>
      </React.Fragment>
    );
  };

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 3000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   arrows: false
  // };

  return (

    
    <div className="container-umum">
      <div className="header-umum">
        <div className="component-image">
          <NavLink to="/content">
            <img alt="Loading" src={Back} />
          </NavLink>
        </div>

        <div className="component-help">
          <p>
            <span>Bantuan</span>
          </p>
        </div>
      </div>
      
    <div className="body-container">
      <div className="topic">
        <span>Promosi</span>
      </div>

      {/* <div className="user-question-container">
        <Slider className="slider " {...settings}>
          {questionUser.map(data => (
            <div key={data.transactionID} className="slider-container">
              <div className="user-question">
                <span className="question">
                  <i>{data.questionModelT.question}</i>
                </span>
                <span className="username"> -{data.userModelT.username} </span>
              </div>
            </div>
          ))}
        </Slider>
      </div> */}
     
      <div className="faq">
        <span>Frequently Asked Question</span>
      </div>

      {questionUser.map(data => (
          <Question key={data.questionID} className="faq-container"
            click={() => buttonOpen(data.questionID) }
            questionID={data.questionID}
            name={data.question}
            answer={data.answer} 
            clicked={idClicked === data.questionID}
          />
      ))}

      <div className="chat-content">
      <NavLink to="/Chat">
        <ChatComponent />
        </NavLink>
      </div>
    </div>
     
    </div>
  );
};

export default PromosiComponent;
