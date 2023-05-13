

import { LanguageContext } from "../LanguageContext"
import useContext from "../useContext"

 const DisplayLanguage = () => {
    
return <LanguageContext.Consumer>{(language) => <h1>{language}</h1>}</LanguageContext.Consumer>
}
 



export default DisplayLanguage








