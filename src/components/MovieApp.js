import React from 'react';
// this component imports all of the other components
import CompanyDropdownList from './CompanyDropdownList';
import SearchForm from './SearchForm';
import MovieList from './MovieList';
import Movie from './Movie'; 


// inlcudes other components that use same state
function MovieApp({ data, fetchMoviesByCompany, fetchMoviesByKeyword, fetchKeywords, clearKeywords }){
  
  return (
    <React.Fragment>
      <h1 className='text-center p-3'>Movie App</h1>
      <SearchForm 
        fetchMoviesByKeyword={fetchMoviesByKeyword}
        fetchKeywords={fetchKeywords}
        keywordSuggestions={data.keywords}
        clearKeywords={clearKeywords}
      />
      <CompanyDropdownList 
        companies={data.approvedCompanies}
        getCompany={fetchMoviesByCompany}
      />
      {data.movies && (<MovieList movies={data.movies} />)}
      
    </React.Fragment>
  );
};

export default MovieApp;
