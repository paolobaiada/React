import { useEffect, useState } from "react";

const useGithubUser = ({ username }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);


    

  const fetchData = async () => {
    setError(false)
    setLoading(true)
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setData(data);
      setLoading(false)
    } catch (error) {
        setError(true)
      console.log("Error:", error);
    }
  };
  const fetching = () => {
    fetchData();
  }
  useEffect(() => {
    fetchData();
  }, [username]);

  return { data, fetching,loading,error };
};
export default useGithubUser;
