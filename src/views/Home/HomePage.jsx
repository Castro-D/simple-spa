import HomeCard from "../../components/HomeCard";
import SearchBar from "../../components/SearchBar";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Loading from "../../components/Loading";
import { useDispatch, useSelector } from 'react-redux'
import { fetchCards, cardsSelector } from '../../store/fetch/fetch.slice'

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
  const dispatch = useDispatch();
  const { cards, loading, hasErrors } = useSelector(cardsSelector);
  
  console.log('initial state is', loading);
  const handleSubmit = async (term) => {
    dispatch(fetchCards(term))
  }
  return (
    <Wrapper>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSubmit={handleSubmit} />
      {loading && <Loading />}
      <CardsWrapper>
        {cards && (
          cards.map((a) => (
            <HomeCard key={a.mal_id} title={a.title} img={a.images.jpg.image_url} />
          ))
        )}
      </CardsWrapper>
      
    </Wrapper>
    
  )
}

export default HomePage