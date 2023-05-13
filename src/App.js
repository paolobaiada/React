import { useState } from "react";



  
  function App() {
    const [language,setLanguage] = useState()
    return (
      <LanguageContext.Provider value={language}>
      <DisplayLanguage />
    </LanguageContext.Provider>
    )
    }
    
  


export default App;
