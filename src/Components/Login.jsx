import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState("");

  const handleUserName = (event) => {
    setUsername(event.target.value);
    
  };
  const handlePassword = (event) => {
    setPassword(event.target.value)
  };
  const handleRemember = (event) => {
    setRemember(event.target.value)
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="username"
          onChange={handleUserName}
          value={username}
        />
        <input type="password" placeholder="password" onChange={handlePassword} value={password}/>
        <input type="checkbox" name="remember" id="" onChange={handleRemember} value={remember}/>
      </form>
    </div>
  );
}
