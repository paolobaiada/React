import { useEffect, useState } from "react"

const useGithubUser = ({username}) => {

     const [data,setData] = useState(null)

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
    

    return{data}
}
export default useGithubUser