import React, { useEffect, useState } from 'react';
import './HomePage.css'; // Import specific styles for HomePage

function HomePage() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Fetch repositories from GitHub API (Arsenicode)
    fetch('https://api.github.com/users/Arsenicode/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="page">
      <h2>My Repositories</h2>
      <div className="repo-grid">
        {repos.map((repo) => (
          <div key={repo.id} className="repo-card">
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-link">View on GitHub</a>
          </div>
        ))}
      </div>

      {/* Download CV Button */}
      <a href="./ElioFrancis.pdf" download>
        <button className="download-btn">Download My CV</button>
      </a>
    </div>
  );
}

export default HomePage;
