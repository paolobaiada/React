import {useState} from "react";
import CounterDisplay from "./CounterDisplay";

function Counter(props){
    const [count,setCount] = useState(0);

    function add(){
      setInterval(() =>{
        setCount(props.count + props.incrementAmount);
      },props.incrementIntervall);
      
        
    }

    return (
      <>
     
      <CounterDisplay/>
      <button onClick={add}>Increment</button>
      </>
    )
    }
  


export default Counter;