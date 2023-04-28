import Welcome from "./Components/Welcome";
import Age from "./Components/Age";
import React from "react";
import Counter from "./Components/Counter";
class App extends React.Component{

  render(){
   
   return (
    <>
     <Welcome age = {64} name = 'John'/> 
    <Age />
    <Counter/>
    </>
   
   )
    
   
   
   
   
   
  
     
    


    
    
    
       
     
    
  }
 
}
export default App;