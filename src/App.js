import Filteredlist from "./Components/FilteredList";




  
  function App() {
    const person = [
      {
        name: "paolo",
        id: 1,
        age: 19,
      },
      {
        name: "luca",
        id: 2,
        age: 15,
      },
      {
        name: "giulia",
        id: 3,
        age: 21,
      },
    ];
    return (
   
   <Filteredlist list= {person}/>
    )
    }
    
  


export default App;
