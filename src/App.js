import { Route, Routes } from "react-router-dom";
import Counter from "./Components/Counter";
import ShowGithubUser from "./Components/ShowGithubUser";

function App() {
  return (
    <Routes>
      <Route path="/Counter" element={<Counter />} />
      <Route path="/users/:username" element ={<ShowGithubUser/>}/>
    </Routes>
  );
}

export default App;
