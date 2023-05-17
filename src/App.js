import { Route, Routes } from "react-router-dom";
import Counter from "./Components/Counter";
import ShowGithubUser from "./Components/ShowGithubUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Counter />} />
      <Route path="/:username" Component={ShowGithubUser}/>
    </Routes>
  );
}

export default App;
