import {useEffect, useState} from "react";


function Counter(){
    const [count,setCount] = useState(0);

   
      useEffect(() => {
      
        const interval = setInterval(() =>{
           setCount((prev)=> prev + 1);
         },1000);
         
           return () => clearInterval(interval)
       
     })
    
   
    

    return (
      <>
     
      <h1>{count}</h1>
      <button>Increment</button>
      </>
    )
    }
  


export default Counter;