import React from "react";
import robot from "./Foto/robot.svg";
import back from "./Foto/back.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Chatbot.css";
import axios from "axios";

const Footer = props => {
  const { change, keyUp, keyDown, value, clickHandler } = props;
  return (
    <div className="chatFooter">
      <div className="chatTextField">
        <input
          className="chatInput"
          onChange={change}
          onKeyUp={keyUp}
          onKeyDown={keyDown}
          value={value}
        />
        <button className="sendButton" onClick={clickHandler}>
          send
        </button>
      </div>
    </div>
  );
};

const Suggestion = props => {
  const { click } = props;
  return (
    <div className="suggestionContainer">
      <div className="suggestMsg">
        Here are some of the most frequently asked questions:
      </div>

      <div className="suggestButtonContainer">
        <div onClick={click} className="suggestButton">
          Apa yang saya perlukan untuk mengajukan pembiayaan?
        </div>

        <div onClick={click} className="suggestButton">
          Apa itu DONA?
        </div>

        <div onClick={click} className="suggestButton">
          Apa itu FlexiFast?
        </div>
      </div>
    </div>
  );
};

const Chatbot = () => {
  const [inputQuestion, setInputQuestion] = useState("");
  // const [suggestion, setSuggestion] = useState("");

  const [chatArray, setChatArray] = useState([]);

  // const [data, setData] = useState([]);
  // const handleSuggestion = () => {
  //   console.log("clicked");
  //   return setSuggestion(<Answer answer="hiayyy" />);
  // };
  //http://10.58.88.235:8989/question/split/${inputQuestion}

  const handleClick = () => {
    // axios
    //   .get(`http://10.58.88.235:8989/question/split/${inputQuestion}`)
    //   .then(res => {
    //     setAnswer(res.data.map(data => data.answer));

    //     const chats = {
    //       qu: inputQuestion,
    //       an: answer
    //     };
    //     console.log(chats);

    //     //
    //     // const chats = {
    //     //   type: { question, answer },
    //     //   msg: { inputQuestion, chatAnswer }
    //     // };

    //     //

    //     setChatArray(prevState => [...prevState, chats]);
    //     console.log(chatArray);
    //   });

    // setInputQuestion("");
    const userInputQuestion = {
      response: inputQuestion
    };
    axios
      .post(`http://10.58.88.71:9090/bot/response/`, userInputQuestion)
      // .post(`http://10.58.89.10:8989/question/split`, userInputQuestion)
      .then(res => {
        const chats = {
          qu: inputQuestion,
          an: res.data.response
          // an: res.data.map(data => data.answer)
        };

        setChatArray(prevState => [...prevState, chats]);
        console.log(chatArray);
        console.log(chats.qu, res.data.response);
      });

    setInputQuestion("");
  };

  const onType = event => {
    setInputQuestion(event.target.value);
  };

  const Chat = props => {
    return (
      <div
        className={
          props.type === "question"
            ? "chatBubbleContainerQuestion"
            : "chatBubbleContainerAnswer"
        }
      >
        <div>
          <img className="botAvatar" src={robot} />
        </div>
        <div
          className={
            props.type === "question"
              ? "chatBubbleQuestion"
              : "chatBubbleAnswer"
          }
        >
          {props.chatMessage}
        </div>
      </div>
    );
  };

  const Answer = props => {
    return (
      <div className="chatBubbleContainerAnswer">
        <div>
          <img className="botAvatar" src={robot} />
        </div>
        <div className="chatBubbleAnswer">{props.answerMessage}</div>
      </div>
    );
  };
  const Question = props => {
    return (
      <div className="chatBubbleContainerQuestion">
        <div className="chatBubbleQuestion">{props.questionMessage}</div>
      </div>
    );
  };

  return (
    <div className="chatbotContainer">
      <div className="chatHeader">
        <div className="backButtonContainer">
          <NavLink to="/">
            <img className="backButton" alt="Loading" src={back} />
          </NavLink>
        </div>

        <p>Sachi</p>
      </div>

      <div className="chatBody">
        <Answer answerMessage="welcome message here" />

        {chatArray.map((chat, index) => {
          return (
            <div key={`question-${index}`}>
              <Question questionMessage={chat.qu} />
              <Answer answerMessage={chat.an} />
            </div>
          );
        })}
      </div>

      <Footer
        change={onType}
        keyUp={onType}
        keyDown={event =>
          event.keyCode === 13 ? handleClick() : event.preventDefault
        }
        value={inputQuestion}
        clickHandler={handleClick}
      />
    </div>
  );
};
export default Chatbot;
