import CarDetails from "./Components/CarDetails";


  
  function App() {
    const car = {
      brand: "ferrari",
      model : "458italia",
      year : 2010,
      color : "red"
    }
    return (
   <CarDetails initialData = {car}/>
    )
    }
    
  


export default App;


