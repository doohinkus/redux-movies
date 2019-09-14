import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Chip, Container } from '@material-ui/core';

// this component imports all of the other components
import CompanyDropdownList from './CompanyDropdownList';
import SearchForm from './SearchForm';
import MovieList from './MovieList';


// includes other components that use same redux store /  state
function MovieApp({ data, fetchMoviesByCompany, fetchMoviesByKeyword, fetchKeywords, clearKeywords }){
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="mt-2">
        <Router>
          <h1 className='text-center p-3'>Movie App</h1>
          <Link to="/"><Chip label="Search by Company" clickable={true} /></Link>
          <Link to="/search"><Chip label="Search by Keyword" clickable={true} /></Link>
          <Route path="/search" exact render={() => (<SearchForm 
            fetchMoviesByKeyword={fetchMoviesByKeyword}
            fetchKeywords={fetchKeywords}
            keywordSuggestions={data.keywords}
            clearKeywords={clearKeywords}
          />)} />
          <Route path="/" exact render={() => (<CompanyDropdownList 
            companies={data.approvedCompanies}
            getCompany={fetchMoviesByCompany}
          />)} />
          {data.movies && (<MovieList movies={data.movies} />)}
        </Router>
      </Container>
      
    
      
    </React.Fragment>
  );
};

export default MovieApp;
