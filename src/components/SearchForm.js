import React, { useState } from 'react';
import Keyword from './Keyword';


function SearchForm({ fetchMoviesByKeyword, fetchKeywords, keywordSuggestions, clearKeywords }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isError, setErrorState] = useState(false);
  function handleError(){
    searchTerm === "" ? setErrorState(true) : setErrorState(false); 
  }
  function handleSubmit(e){
    handleError();
    if (!isError) fetchMoviesByKeyword(searchTerm);
    setSearchTerm("");
  }
  function handleKeywordClick(id, name){
    console.log(id, " ", name);
    setSearchTerm(name);
    clearKeywords();
    fetchMoviesByKeyword(name);

  }
  function handleChange(e){
    setErrorState(false);
    setSearchTerm(e.target.value);
    fetchKeywords(e.target.value);
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
              id="search"
              value={searchTerm}
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
          <ul className="list-group">
            {keywordSuggestions && keywordSuggestions.map(keyword => (
                  <Keyword 
                      id={keyword.id}
                      key={keyword.id}
                      name={keyword.name}
                      handleKeywordClick={handleKeywordClick}
                  />
                )
              )
            }
          </ul>
        </React.Fragment>
      );
  }
  

export default SearchForm;
 