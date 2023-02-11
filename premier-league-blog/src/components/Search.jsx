const Search = (props) => {

  return (
    
  <div className="Searching">
    <form onSubmit={props.getSearchResults}>  
    <input type="text"
    name="search"
    value={props.value}
    placeholder="Search Teams"
    onChange={props.onChange}/>
   <button type="submit">Search</button>
   </form>
   </div>

      
    

  )
}

export default Search