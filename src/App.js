import React, { useState, useEffect } from 'react';
import jikan from "./service/jikan";
import SearchBar from "./components/SearchBar";
import HomeCard from "./components/HomeCard";


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');
  
  const handleSubmit = async (term) => {
    const data = await jikan.searchAnime(term)
    console.log(data);
    setResult(data)
    
  }
  
  return (
    <div className="App">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSubmit={handleSubmit} />
      {result && (
        result.data.map((a) => (
          <HomeCard key={a.mal_id} title={a.title} img={a.images.jpg.image_url} />
        ))
      )}
    </div>
  );
}

export default App;
