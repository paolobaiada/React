import { Route, Routes } from "react-router-dom";
import Counter from "./Components/Counter";
import ShowGithubUser from "./Components/ShowGithubUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Aggiungi un utente e selezionalo</h1>}/>
      <Route path="/Counter" element={<Counter />} />
      <Route path="/ShowGithubUser" element={<ShowGithubUser/>}/>
    </Routes>
  );
}

export default App;
