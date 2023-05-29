import { useParams } from "react-router";
import GithubUser from "./GithubUser";

const ShowGithubUser = () => {
    const {username} = useParams();
    return (
        <div>
            <GithubUser username={username}/>
        </div>
    )
}
export default ShowGithubUser;