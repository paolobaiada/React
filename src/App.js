import ClickCounter from "./Components/ClickCounter";





  
  function App() {
    return (
    <ClickCounter onCounterChange = {(count) => {
      console.log("The Counter value is:", count);
    }}/>
    )
    }
    
  


export default App;
