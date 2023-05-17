
import useGithubUser from "../useGithubUser";

const GithubUser = ({username}) => {
  const {data} = useGithubUser({username})

 
  
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