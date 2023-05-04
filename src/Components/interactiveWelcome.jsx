import { useState } from "react";
import Welcome from "./Welcome"

const InteractiveWelcome = () => {
    const [input,setInput] = useState();
    function change(event){
        setInput(event.target.value)
    }
    return (
        <>
        <input type="text" value={input}/>
        <welcome name = {input}/>
        </>
    )
}
export default InteractiveWelcome;