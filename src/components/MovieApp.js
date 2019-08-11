import React from 'react';
// this component imports all of the other components
import Movie from './Movie';
import CompanyDropdownList from './CompanyDropdownList';

// inlcudes other components that use same state
function MovieApp({ data, fetchMoviesByCompany }){
  return (
    <React.Fragment>
      <h1 className='text-center p-3'>Movie App</h1>
      {/* <button onClick={() => props.fetchMoviesByCompany(521)}>Fetch by Company 521</button> */}
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
