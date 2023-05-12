
import useGithubUser from "../useGithubUser";

const GithubUser = ({username}) => {
  const {data,fetchData,loading,error} = useGithubUser({username})

 if (loading) {
  return "loading..."
 }
  if (error) {
    return "error!"
  }
  if(!data) {
    return "is empty!"
  }
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