
import { Link } from "react-router-dom";

const GithubUserlist = () => {
 /*  const [name, setName] = useState("");
  const [userName, setUserName] = useState([]);

  function handleChange(event) {
    setName(event.target.value);
  }
  function handleAddName() {
    setUserName([...userName, name]);
    console.log(userName);
    setName("");
  } */
  const array = ["Luca","Giulia","Marco"]

  return (
    <div>
      {/* <input type="text" onChange={handleChange} value={name} />
      <button onClick={handleAddName}>invio</button> */}

      {/*  <GithubUser username={name} /> */}
      
      {array.map((el) => {
       return <li key={el}>
          <Link to={`/users/${el}`}>{el}</Link>
        </li>;
      })}
    </div>
  );
};

export default GithubUserlist;
