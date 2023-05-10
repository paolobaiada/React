import { useEffect, useState } from "react"

 const ClickCounter = (props) => {
   const [count,setCount] = useState(0)

   const handleCounter = () => {
       setCount(count + 1)
   }
   function onCounterChange(count){
    console.log("The Counter value is:", count)
   }
   useEffect(() => {
  props.render(count,onCounterChange)
    
   },[count])
return (
    <div>
        <button onClick={handleCounter}>invio</button>
       <h1>{count}</h1>
    </div>
)
}
export default ClickCounter