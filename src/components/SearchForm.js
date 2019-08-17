import React, { useState } from 'react';

function SearchForm({ fetchMoviesByKeyword }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isError, setErrorState] = useState(false);
  function handleError(){
    searchTerm === "" ? setErrorState(true) : setErrorState(false); 
  }
  function handleSubmit(e){
    handleError();
    fetchMoviesByKeyword(searchTerm);
  }
  function handleChange(e){
    setSearchTerm(e.target.value);
  }

  const errorMessage = (  
    <div 
      className="alert alert-danger" 
      role="alert">
      Please enter a search term.
    </div>
  );

  return (
        <React.Fragment>  
          {isError && errorMessage}
          <div className="input-group md-form form-sm form-2 pl-0">
            <input 
              className="form-control my-0 py-1 lime-border" 
              type="text" 
              placeholder="Search" 
              aria-label="Search"
              onChange={handleChange} 
            />
            <div className="input-group-append">
              <button 
                className="input-group-text lime lighten-2" 
                id="search"
                onClick={handleSubmit}
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </React.Fragment>
      );
  }
  

export default SearchForm;
 