import { Route, Routes, Link} from "react-router-dom";
import Counter from "./Components/Counter";
import ShowGithubUser from "./Components/ShowGithubUser";
import NotFound from "./Components/NotFound";
import GithubUserlist from "./Components/GitHubUserList";

function App() {
  return (
    <div>
      <Link to="/Counter">Counter</Link>
      <Link to="/ShowGithubUser">ShowGithubUser</Link>
      <Routes>
      <Route path="/Counter" element={<Counter/>} />
      <Route path="/ShowGithubUser" element={<ShowGithubUser />} />
      <Route path="/GithubUserList" element={<GithubUserlist/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>

    
  );
}

export default App;
