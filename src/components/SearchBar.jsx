import * as React from 'react';
import Button from '@mui/material/Button';
import Input from "@mui/material/TextField";
import styled from 'styled-components';

const Wrapper = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  align-items: center;
`

const Title = styled.h1`
  color:#ffffff;
`

const SearchBar = (props) => {
  return(
    <Wrapper>
      <Title>MyAnime app</Title>
      <Input style={{backgroundColor: "#ffffff", color: "#222222"}} onChange={(e) => props.setSearchTerm(e.target.value)} value={props.searchTerm} placeholder="Naruto.." />
      <Button variant="contained" onClick={() => props.handleSubmit(props.searchTerm)}>Go</Button>  
    </Wrapper>
  )
}

export default SearchBar