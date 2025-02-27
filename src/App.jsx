import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50";

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Pokemons</h1>
      <ul>
        {data.map((post) => (
          <li key={post.name}>
            <p>{post.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
