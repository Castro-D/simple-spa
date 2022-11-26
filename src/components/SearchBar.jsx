

const SearchBar = (props) => {
  return(
    <div>
      <h1>MyAnime app</h1>
      <h2>Search for an anime</h2>
      <input onChange={(e) => props.setSearchTerm(e.target.value)} value={props.searchTerm} placeholder="Naruto.." />
      <button onClick={() => props.handleSubmit(props.searchTerm)}>Go</button>  
    </div>
  )
}

export default SearchBar