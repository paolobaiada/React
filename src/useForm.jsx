import { useState } from "react";
const useForm = () => {
  const [ username, setUserName ] = useState("");
  const [ password, setPassword ] = useState("");


  const handleInput = (event) => {
    setUserName(event.target.value);
  };


  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return { username,password,handleInput,handlePassword };
};

export default useForm;
