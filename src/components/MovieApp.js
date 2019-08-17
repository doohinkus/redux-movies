import React from 'react';
// this component imports all of the other components
import Movie from './Movie';
import CompanyDropdownList from './CompanyDropdownList';
import SearchForm from './SearchForm';

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
      {data.movies && data.movies.map(movie => (
          <Movie
            key={movie.id}
            title={movie.original_title}
            release_date={movie.release_date}
            overview={movie.overview}
            poster_path={movie.poster_path}
          />
        )
      )}
    </React.Fragment>
  );
};

export default MovieApp;
