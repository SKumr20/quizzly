import axios from 'axios';

// fetches github stars and forks

export const fetchGitHubStats = async (username, repo) => {
  try {
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    const response = await axios.get(
      `https://api.github.com/repos/${username}/${repo}`,
      {
        headers: token ? {
          Authorization: `token ${token}`
        } : {}
      }
    );
    
    return {
      stars: response.data.stargazers_count,
      forks: response.data.forks_count
    };
  } catch (error) {
    console.error('Error fetching GitHub repository stats:', error);
    
    // Return default for error
    return {
      stars: 0,
      forks: 0
    };
  }
};