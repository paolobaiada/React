import {useState} from "react";

function Counter(){
    let [count,setCount] = useState(0);
  
return (
  <>
  <h1>{count}</h1>
  <button onClick={add}>Increment</button>
  </>
)
function add(){
  setInterval(() =>
    setCount(count += 1),1000
   
  )
  return setCount;
}

}
export default Counter;