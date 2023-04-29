import {useState} from "react";

function CounterDisplay(props){
    let [count,setCount] = useState(props.number);
  
return (
  <>
  <h1>{count}</h1>
  </>
)
}
export default CounterDisplay;