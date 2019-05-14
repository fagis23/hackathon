



import React from"react";

import{useState}from"react";

import "./Chatbot.css";

import axios from "axios";
 

const Suggestion=props=>{

return (

<div className="suggestionContainer">

<div className="suggestMsg">

 Here are some of the most frequently asked questions:

</div>

<div className="suggestButtonContainer">

<div onClick={props.click} className="suggestButton">

 Apa yang saya perlukan untuk mengajukan pembiayaan?

</div>

<div onClick={props.click} className="suggestButton">

 Apa itu DONA?

</div>

<div onClick={props.click} className="suggestButton">

 Apa itu FlexiFast?

</div>

</div>

</div>

 );

};
 

const Chatbot=()=>{

const[question,setQuestion]=useState([]);

// const [answer, setAnswer] = useState([]);

const[inputQuestion,setInputQuestion]=useState("");

// const [isAsking, setIsAsking] = useState([]);

const[suggestion,setSuggestion]=useState([]);
 

const handleSuggestion=()=>{

console.log("clicked");

return setSuggestion===<Answer answer="jjajaja"/>;

};
 

const handleClick=()=>{

const message={

 msg:inputQuestion

};

axios

.post("https://jsonplaceholder.typicode.com/users",message)

.then(res=>{

console.log(res.data);

});

setQuestion(prevState=> [...prevState,message]);

setInputQuestion("");

};
 

const handleKeyDown=e=>{

if (e.keyCode===13) {

const message={

 msg:inputQuestion

};

axios

.post("https://jsonplaceholder.typicode.com/users",message)

.then(res=>{

console.log(res.data);

});

setQuestion(prevState=> [...prevState,message]);

setInputQuestion("");

}

};
 

const onType=event=>{

setInputQuestion(event.target.value);

};
 

const Answer=props=>{

return (

<div className="chatBubbleContainerAnswer">

<div className="chatBubbleAnswer">{props.answer}</div>

</div>

 );

};
 

const Question=props=>{

return (

<div className="chatBubbleContainerQuestion">

<div className="chatBubbleQuestion">{props.question}</div>

</div>

 );

};
 

console.log(question);

// console.log(answer);

return (

<div className="chatbotContainer">

<div className="chatHeader">

<span>Chat</span>

</div>

<div className="chatBody">

<Answer answer="welcome message here"/>

<Answer answer={<Suggestion click={()=>handleSuggestion()}/>}/>

{suggestion}

{question.map(el=>{

return (

<div>

<Question question={el.msg}/>

<Answer answer={el.msg}/>

</div>

 );

})}

</div>

<div className="chatFooter">

<div className="chatTextField">

<input

onChange={onType}

onKeyUp={onType}

onKeyDown={handleKeyDown}

value={inputQuestion}

/>

<button onClick={handleClick}>send</button>

</div>

</div>

</div>

 );

};
 

export default Chatbot;



