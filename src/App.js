
import DisplayLanguage from "./Components/DisplayLanguage";
import { LanguageContext } from "./LanguageContext";



  
  function App() {
 
    return (
      <LanguageContext.Provider value="it">
      <DisplayLanguage />
    </LanguageContext.Provider>
    )
    }
    
  


export default App;
