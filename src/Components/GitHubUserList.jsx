import { useState } from "react";
import GithubUser from "./GithubUser";

const GithubUserlist = () => {
  const [name, setName] = useState("");
  const [userName,setUserName] = useState([])

  function handleChange(event) {
    setName(event.target.value);
    
  }
  function handleAddName(){
    
    setUserName([...userName, name])
    setName("")
  }

  return (
    <div>
      <input type="text" onChange={handleChange} value={name}/>
      <button onClick={handleAddName}>invio</button>
      
        <GithubUser username={name} />
      
    </div>
  );
};

export default GithubUserlist;