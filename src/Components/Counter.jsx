import {useState} from "react";

function Counter(props){
    const [count,setCount] = useState(0);
  
    setInterval(() =>{
      setCount((count) => count + props.incrementAmount);
    },props.incrementIntervall);
 
return (
  <>
  <h1>{count}</h1>
  </>
) 
 
  

}


export default Counter;