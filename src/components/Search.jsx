const Search = ({ search, setSearch }) => {
  return (
   <div className="search">
    <p>Pesquisar:</p>
    <input 
        type="text" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder="Digite para pesquisar..." 
        />
   </div>
  )
}

export default Search