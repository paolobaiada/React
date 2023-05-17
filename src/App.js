import { Route, Routes,Link, Router } from "react-router-dom";
import Counter from "./Components/Counter";
import ShowGithubUser from "./Components/ShowGithubUser";
import { link } from "fs";
import { directive } from "@babel/types";

function App() {
  return (
<Router>
  <link to="/">Counter</link>
 <link to= "/:username">ShowGithubUser</link>
<Routes>
      <Route path="/" element={<Counter />} />
      <Route path="/:username" Component={<ShowGithubUser/>}/>
    </Routes>
</Router>

   
  );
}

export default App;
