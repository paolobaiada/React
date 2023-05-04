import Welcome from "./Components/Welcome";
import Age from "./Components/Age";
import React from "react";
import Counter from "./Components/Counter";
import InteractiveWelcome from "./Components/InteractiveWelcome";
class App extends React.Component{

  render(){
   
   return (
    <>
      <Welcome age = {64} name = 'John'/>  
    <Age />
    {/* <Counter incrementAmount = {1} incrementIntervall = {1000}/> */}
    
    <InteractiveWelcome/>
    </>
   
   )
    
   
   
   
   
   
  
     
    


    
    
    
       
     
    
  }
 
}
export default App;