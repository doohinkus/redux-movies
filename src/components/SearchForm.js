import React, { useState } from 'react';
import KeywordList from './KeywordList';


function SearchForm({ fetchMoviesByKeyword, fetchKeywords, keywordSuggestions }) {
  const [searchTerm, setSearchTerm] = useState("");
  
  const [isError, setErrorState] = useState(false);
  function handleError(){
    searchTerm === "" ? setErrorState(true) : setErrorState(false); 
  }
  function handleSubmit(){
    handleError();
    if (!isError) fetchMoviesByKeyword(searchTerm);
    setSearchTerm("");
  }
  function handleKeywordClick(id, name){
    setSearchTerm(name);
    fetchMoviesByKeyword(name);
    setSearchTerm("");
  }
  function handleChange(e){
    setErrorState(false);
    setSearchTerm(e.target.value);
    fetchKeywords(e.target.value);
  }
  function handleKeyPress(e){
    const key = e.keyCode;
    const element = e.target;
    console.log("KEY>>> ", key, " ", element.id)
    switch(key){
      case 13:
        handleSubmit();
        break;
      default:
        return;
    }
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
              // onKeyPress={handleKeyPress}
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
          <KeywordList 
            keywordSuggestions={keywordSuggestions}
            handleKeywordClick={handleKeywordClick}
            onKeyPress={handleKeyPress}
          />
        
        </React.Fragment>
      );
  }
  

export default SearchForm;
 