import HomeCard from "../../components/HomeCard";
import SearchBar from "../../components/SearchBar";
import React, { useState } from 'react';
import jikan from "../../service/jikan";
import styled from 'styled-components';
import Loading from "../../components/Loading";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #023047;
`

const CardsWrapper = styled.div`
  width:70%;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');
  
  const handleSubmit = async (term) => {
    const data = await jikan.searchAnime(term)
    setResult(data)  
  }

  return (
    <Wrapper>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSubmit={handleSubmit} />
      <CardsWrapper>
        {result && (
          result.data.map((a) => (
            <HomeCard key={a.mal_id} title={a.title} img={a.images.jpg.image_url} />
          ))
        )}
      </CardsWrapper>
      
    </Wrapper>
    
  )
}

export default HomePage