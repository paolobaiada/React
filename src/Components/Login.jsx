import { useState } from "react";

function Login(){
  const [state,setState] = useState(true)
    function onLog(){
            setState(false)
    }
    
    return(
        <>
        <input onChange={onLog} type="text" />
        <input onChange={onLog} type="password" />
        <button onClick={onLog} disabled = {state}>Login</button>
        </>
    )
}
export default Login;