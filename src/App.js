import { Route, Routes, Link } from "react-router-dom";
import Counter from "./Components/Counter";
import ShowGithubUser from "./Components/ShowGithubUser";

function App() {
  return (
    <div>
      <Link to="/">Counter</Link>
      <Link to="/ShowGithubUser">ShowGithubUser</Link>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/ShowGithubUser" element={<ShowGithubUser />} />
      </Routes>
    </div>
  );
}

export default App;
