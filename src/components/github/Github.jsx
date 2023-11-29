import React, { useEffect, useState } from 'react';
import './Github.css';

function Github() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/AmeerHamza6758')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='githubContainer'>
      <section >
        Github Followers: {data.followers}
        </section>
        <section>
        <img style={{width:'350px', height:'350px'}} src={data.avatar_url} alt="Github Picture" />
      </section>
    </div>
  );
}

export default Github;
