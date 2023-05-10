import { useEffect, useState } from "react"

 const ClickCounter = () => {
   const [count,setCount] = useState(0)

   const handleCounter = () => {
       setCount(count + 1)
   }
   
   useEffect(() => {
  onCounterChange(count)
    
   },[count])
return (
    <div>
        <button onClick={handleCounter}>invio</button>
       <h1>{count}</h1>
    </div>
)
}
export default ClickCounter