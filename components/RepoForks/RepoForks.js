import { useEffect, useState } from "react";
import axios from "axios";

const RepoForks = ({ repoName }) => {
  const [forks, setForks] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForks = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://api.github.com/repos/${repoName}`);
        setForks(response.data.forks_count);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    };
    fetchForks();
  }, [repoName]);

  return (
    <a href="http://github.com/faradeen-ja/portfolio360" target="_blank" rel="noreferrer">
    <div className="gap-1 flex justify-center items-center">
    
      <h2 className="text-sm font-bold">Forks</h2>
      {isLoading && <p>Loading</p>}
      {error && <p>Error: {error.message}</p>}
      {forks !== null && <p className="text-sm">{forks}</p>}
      
    </div>
    </a>
  );
};

export default RepoForks;

