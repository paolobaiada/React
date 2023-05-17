
import useSWR from 'swr'
const useGithubUser = ({ username }) => {
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error:', error);
      throw error;
    }
  };

  const { data, error } = useSWR(`https://api.github.com/users/${username}`, fetchData);

  return {
    data,
    error,
  };
};

export default useGithubUser;