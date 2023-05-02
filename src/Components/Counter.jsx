import {useState} from "react";

function Counter(props){
    const [count,setCount] = useState(0);

    function add(){
      setInterval(() =>
        setCount(count + props.incrementAmount),props.incrementIntervall)
    }

    return (
      <>
      <h1>{count}</h1>
      <button onClick={add}>Increment</button>
      </>
    )
    }
  


export default Counter;