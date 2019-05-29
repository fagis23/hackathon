
import React from"react";

import{useState}from"react";

import "./Chatbot.css";
import axios from "axios";

const Footer = props => {
  const { change, keyUp, keyDown, value, clickHandler } = props;
  return (
    <div className="chatFooter">
      <div className="chatTextField">
        <input
          onChange={change}
          onKeyUp={keyUp}
          onKeyDown={keyDown}
          value={value}
        />
        <button onClick={clickHandler}>send</button>
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
  const [answer, setAnswer] = useState(answer);
  const [chatArray, setChatArray] = useState([]);
  // const [data, setData] = useState([]);
  // const handleSuggestion = () => {
  //   console.log("clicked");
  //   return setSuggestion(<Answer answer="hiayyy" />);
  // };

  const handleClick = () => {
    axios
      .get(`http://10.58.92.205:8989/question/split/${inputQuestion}`)
      .then(res => {
        setAnswer(res.data.map(data => data.answer));
        const chats = {
          qu: inputQuestion,
          an: answer
        };
        console.log(chats);
        setChatArray(prevState => [...prevState, chats]);
        
      });

    setInputQuestion("");
  };

  const onType = event => {
    setInputQuestion(event.target.value);
  };

  const Answer = props => {
    return (
      <div className="chatBubbleContainerAnswer">
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
        <span>Chat</span>
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
