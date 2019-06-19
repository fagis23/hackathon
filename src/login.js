import React , {  useState } from "react";
import "./login.css";
import { NavLink } from "react-router-dom";




const LoginComponent =()=>{
    // const [login, setLogin] = useState({
    //     isLoginOpen:true,
    //     isRegisterOpen:false
    // }
        
    // );

    // const showRegisterBox=()=>{
    //     setLogin({isRegisterOpen:true, isLoginOpen:false})
    // }

    // const showLoginBox=()=>{
    //     setLogin({isLoginOpen:true, isRegisterOpen:false})
    // }

    return(
        <div className="root-container">

            

            <div className="box-container">

            
             <LoginBoxComponent/>
              {/* {login.isRegisterOpen && <RegisterBoxComponent/>}  */}

            </div>
        </div>
    )
}


const LoginBoxComponent = () =>{

    const [data,setData] = useState({
        username:"",
        email:""
    })

    const valid =(item,type)=>{
        
        // console.warn("value",item.target.value)
        let itemValueEmail= item.target.value;
        let itemValueUsername= item.target.value;
        
        // eslint-disable-next-line default-case
        switch(type){
            
            case "username":{
                if(itemValueUsername.length<=4){
                    item.target.style.color ="red";
                    setData({username:itemValueUsername, email:itemValueEmail});
                }
                else{
                    item.target.style.color ="";
                    setData({username:itemValueUsername, email:itemValueEmail});
                    
                }
                
            }
            
            // eslint-disable-next-line no-lone-blocks
            // eslint-disable-next-line no-fallthrough
           
            
        }
        console.warn("all",data)
    }
    

    // function showValidationErr  (elm , msg){
    //             data((prevState)=>({errors:[...prevState.errors, {elm , msg }]}))
    //         }
        
   
    function submitLogin (){
        
        // if(data.username === ""){
        //             showValidationErr("username" , "Username Cannot Be Empty");
        //               }  
        //             if(data.email === ""){
        //             showValidationErr("email" , "Email Cannot Be Empty");
        //                 }    
    
        let obj={}
        obj.username=data.username;
        obj.email=data.email;

        console.warn("SubmitData",obj)

       localStorage.setItem('username',JSON.stringify(data.username));
       localStorage.setItem('emailInfo',JSON.stringify(data.email));
      
       
    }
    return(
        <div className="inner-container">

            <div className="header1">
                Form
            </div>
            <div className="box">
                
                <div className="input-group">
                    <label className="login-label" htmlFor="username">Username</label>
                    <input  type="text" name="username" className="login-input" placeholder="Username"
                     onChange={(item)=> valid(item,"username")}/>
                </div>

                <div className="input-group">
                    <label className="login-label" htmlFor="email">Email</label>
                    <input  type="text" name="email" className="login-input" placeholder="Email"
                     onChange={(item)=> valid(item,"email")}  />
                </div>
                
            <NavLink  to="/content">
            <button type="button" className="login-btn" onClick={() => submitLogin()}>Submit</button>
            </NavLink>
            </div>

        </div>
    )
}

// const RegisterBoxComponent = () =>{

//     const [error , setError] = useState({
//         errors:[] , username:"" , email :"",password:"",pwdState:null,
//     })

//     function showValidationErr  (elm , msg){
//         error((prevState)=>({errors:[...prevState.errors, {elm , msg }]}))
//     }

//     function clearValidationErr (elm){
//         setError((prevState)=>{
//             let newArr = [];
//             for(let err of prevState.errors){
//                 if(elm !== err.elm){
//                     newArr.push(err);
//                 } 
//             }
//             return newArr;
//         });
//     }

//     function onUsernameChange(e){
//         setError({username: e.target.value });
//         clearValidationErr("username");
//     }

//     function onEmailChange(e){
//         setError({email: e.target.value });
//         clearValidationErr("email");
//     }

//     function onPasswordChange(e){
//         setError({password: e.target.value });
//         clearValidationErr("password");

//         setError({pwdState:"weak"})
//         if(e.target.value.length > 8){
//             setError({pwdState:"medium"})
//         }else if (e.target.value.length > 12)
//         setError({pwdState:"strong"})
//     }

//     function submitRegister (e){

//         if(error.username === ""){
//         showValidationErr("username" , "Username Cannot Be Empty");
//           }  
//         if(error.email === ""){
//         showValidationErr("email" , "Email Cannot Be Empty");
//             } 
//         if (error.password === ""){
//         showValidationErr("Password" , "Password Cannot Be Empty");
//             }

        
//     }

//     let usernameErr = null , passwordErr= null , emailErr= null;
//     for(let err of error.errors){
//         if(err.elm === "username"){
//             usernameErr = err.msg;

//         } if (err.alm === "password"){
//             passwordErr = err.msg;

//         }if (err.alm === "email"){
//             emailErr = err.msg;
//         }
//     }

//     let pwdWeak = false , pwdMedium = false , pwdStrong = false;

//     if(error.pwdState === "weak"){
//         pwdWeak = true;
//     } else if (error.pwdState === "mediium"){
//         pwdWeak= true;
//         pwdMedium=true;
//     }else if (error.pwdState === "strong"){
//         pwdWeak= true;
//         pwdMedium=true;
//         pwdStrong=true;
//     }

    
//     return(
//         <div className="inner-container">

//             <div className="header1">
//                 Register
//             </div>
            
//             <div className="box">

//                 <div className="input-group">
//                     <label htmlFor="username">Username</label>
//                     <input type="text" name="username" className="login-input" placeholder="Username"
//                     onChange={onUsernameChange}/>
//                     <small className="danger-error">{usernameErr ? usernameErr : ""}</small>
//                 </div>

//                 <div className="input-group">
//                     <label htmlFor="email">Email</label>
//                     <input type="text" name="email" className="login-input" placeholder="Email"
//                     onChange={onEmailChange}/>
//                     <small className="danger-error">{emailErr ? emailErr : ""}</small>
//                 </div>

//                 <div className="input-group">
//                     <label htmlFor="password">Password</label>
//                     <input type="password" name="password" className="login-input" placeholder="Password"
//                     onChange={onPasswordChange}/>
//                     <small className="danger-error">{passwordErr ? passwordErr : ""}</small>
//                 </div>

//                 { error.password && <div className="password-state">
//                     <div className={" pwd pwd-weak " + (pwdWeak ? "show" : "") } ></div>
//                     <div className={"pwd pwd-medium" + (pwdMedium ? "show" : "") }></div>
//                     <div className={"pwd pwd-strong" + (pwdStrong ? "show" : "") }></div>

//                 </div>}

//             <button type="button" className="login-btn" onClick={submitRegister}>Register</button>

//             </div>

//         </div>
//     )
// }


export default LoginComponent;