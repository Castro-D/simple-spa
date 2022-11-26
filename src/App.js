import React, { useState, useEffect } from 'react';
import jikan from "./service/jikan";
import SearchBar from "./components/SearchBar";

const Anime = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.duration}</p>
      <img src={props.img} alt=""/>
    </div>
  )
}

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
          <Anime key={a.mal_id} title={a.title} duration={a.duration} img={a.images.jpg.image_url} />
        ))
      )}
    </div>
  );
}

export default App;
