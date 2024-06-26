import React, { useEffect, useState } from 'react';

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then(data => setBackendData(data))
      .catch(error => console.error('error fetching data:', error));
  }, []);

  return (
    <>
      <div>
        {(typeof backendData.users === 'undefined') ? (
          <p>loading...</p>
        ) : (
          backendData.users.map((user, i) => (
            <p key={i}>{user}</p>
          ))
        )}
      </div>
    </>
  );
}

export default App;