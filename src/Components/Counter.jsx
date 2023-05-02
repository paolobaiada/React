import {useState} from "react";

function Counter(props){
    let [count,setCount] = useState(0);
  
return (
  <>
  <h1>{props.count}</h1>
  </>
) 
 
  setInterval(() =>
    setCount(count += props.incrementAmount),props.incrementIntervall
   
  )
 return {count}

}


export default Counter;