import React, { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import DisplayLanguage from "./Components/DisplayLanguage";

  
  function App() {
    const [language,setLanguage] = useState("it")
   function handleChange(event){
      setLanguage(event.target.value)
    }
    return (
      <>
        <select onChange={handleChange} value={language}>
          <option value="it">it</option>
          <option value="en">en</option>
        </select>
        <LanguageContext.Provider value={language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </>
    );
  }


export default App;
