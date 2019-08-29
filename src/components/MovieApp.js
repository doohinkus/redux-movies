import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

// this component imports all of the other components
import CompanyDropdownList from './CompanyDropdownList';
import SearchForm from './SearchForm';
import MovieList from './MovieList';


// includes other components that use same redux store /  state
function MovieApp({ data, fetchMoviesByCompany, fetchMoviesByKeyword, fetchKeywords, clearKeywords }){
  
  return (
    <React.Fragment>
      <CssBaseline />
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
