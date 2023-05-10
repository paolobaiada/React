

import { LanguageContext } from "../LanguageContext"

 const DisplayLanguage = () => {
    
return <LanguageContext.Consumer>{(language) => <h1>{language}</h1>}</LanguageContext.Consumer>
}
 



export default DisplayLanguage








