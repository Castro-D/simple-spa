import React, { useState, useEffect } from 'react';
import jikan from "./service/jikan";

const Anime = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.duration}</p>
    </div>
  )
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');
  
  const handleSubmit = async (term) => {
    const data = await jikan.searchAnime(term)
    setResult(data)
  }
  
  return (
    <div className="App">
      <h1>MyAnime app</h1>
      <h2>Search for an anime</h2>
      <input onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} placeholder="Naruto.." />
      <button onClick={() => handleSubmit(searchTerm)}>Go</button>
      {result && (
        result.data.map((a) => (
          <Anime key={a.mal_id} title={a.title} duration={a.duration} />
        ))
      )}
    </div>
  );
}

export default App;
