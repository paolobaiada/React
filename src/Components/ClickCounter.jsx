import { useState } from "react"

 const ClickCounter = () => {
   const [count,setCount] = useState(0)
   const handleCounter = () => {
       setCount(count + 1)
   }
return (
    <div>
        <button onClick={handleCounter}>invio</button>
       <h1>{count}</h1>
       {handleCounter}
    </div>
)
}
export default ClickCounter