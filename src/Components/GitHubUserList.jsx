import { useState } from "react";
import GithubUser from "./GithubUser";

const GithubUserlist = () => {
  /* const [name, setName] = useState("");
  const [add,setAdd] = useState([]);
  const userName = []

  function handleChange(event) {
    setName(event.target.value);
  }
  function handleAddName(){
    setAdd(...add, name)
    console.log(add)
  } */

  return (
    <div>
      {/* <input type="text" onChange={handleChange} value={name}/>
      <button onClick={handleAddName}>invio</button>
      <h1>{add}</h1> */}
      <GithubUser username= "paolobaiada"/>
    </div>
  );
};

export default GithubUserlist;
