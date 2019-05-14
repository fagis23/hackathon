import React, { useEffect, useState } from "react";
import plusImage from "./Foto/plus-sign.svg";
import Back from "./Foto/back.svg";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./umumContent.css";

import ChatComponent from "./chat";
import FooterComponent from "./footer";

const UmumComponent = () => {
  const [questionUser, setQuestionUser] = useState([]);

  const [isButtonClick, setIsButtonClick] = useState(false);

  const buttonOpen = () => {
    if (isButtonClick === false) {
      setIsButtonClick(true);
    } else {
      setIsButtonClick(false);
    }
  };

  const getQuestionUser = () => {
    axios
      .get("http://10.58.92.163:8989/transaction/ambiltiga/umum")
      .then(res => {
        const qqq = res.data;
        console.log("blabla");
        console.log(res);
        setQuestionUser(qqq);
      });
  };

  useEffect(() => {
    getQuestionUser();
  }, []);

  const Question = props => {
    return (
      <React.Fragment>
        <div onClick={props.click} className="faq-question-container">
          <div className="question-button">
            <div className="name">
              <span>{props.name}</span>
            </div>
            <div className="image-button">
              <input type="image" src={plusImage} alt="Loading" />
            </div>
          </div>
        </div>

        <div className={isButtonClick ? "scroll-downShow" : "scroll-downHide"}>
          <div className="question-faq">
            <p>{props.answer}</p>
          </div>
        </div>
      </React.Fragment>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false
  };

  return (
    <div className="container">
      <div className="header-umum">
        <div className="component-image">
          <NavLink to="/">
            <img alt="Loading" src={Back} />
          </NavLink>
        </div>

        <div className="component-help">
          <p>
            <span>Bantuan</span>
          </p>
        </div>
      </div>

      <div className="topic">
        <span>Umum</span>
      </div>

      <div className="user-question-container">
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
      </div>

      <div className="faq">
        <span>Frequently Asked Question</span>
      </div>

      {questionUser.map(data => (
        <div key={data.transactionID} className="faq-container">
          <Question
            click={() => buttonOpen()}
            name={data.questionModelT.question}
            answer={data.questionModelT.answer}
          />
        </div>
      ))}

      <div className="chat-content">
        <ChatComponent />
      </div>
      <FooterComponent />
    </div>
  );
};

export default UmumComponent;
