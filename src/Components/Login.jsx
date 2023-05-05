import { useState } from "react";

function Login(){
    const values = {
        userName: "",
        password: ""
    };
  const [state,setState] = useState(values)
  

   function handlerInput(event){
    const name = event.target.name;
    setState({[name] : event.target.value}) 
   }
   function handlerReset(){
    setState(
        {userName : "",
        password : "",
   })
   }
   
    
    
    return(
        <>
        <input type="text" name="userName" value={state.userName} onChange={handlerInput}/>
        <input type="password" name="password" value={state.password} onChange={handlerInput}/>
        <button>Login</button>
        <button onClick={handlerReset}>Reset</button>
        </>
    )
}
export default Login;