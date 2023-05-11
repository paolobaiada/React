

import React, { useEffect, useState } from "react";

const GithubUser = ({ username }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, [username]);

  
try {
    return (
        <div>
          <h2>{data.name}</h2>
          <p>Username: {data.login}</p>
          <p>Location: {data.location}</p>
        </div>
      );
} catch (error) {
    return "loading"
}
 
};

export default GithubUser;