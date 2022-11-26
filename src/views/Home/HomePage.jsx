import HomeCard from "../../components/HomeCard";
import SearchBar from "../../components/SearchBar";
import React, { useState } from 'react';
import jikan from "../../service/jikan";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');
  
  const handleSubmit = async (term) => {
    const data = await jikan.searchAnime(term)
    console.log(data);
    setResult(data)  
  }

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSubmit={handleSubmit} />
      {result && (
        result.data.map((a) => (
          <HomeCard key={a.mal_id} title={a.title} img={a.images.jpg.image_url} />
        ))
      )}
    </div>
    
  )
}

export default HomePage