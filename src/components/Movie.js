import React from 'react';
// import {useSpring, animated} from 'react-spring';
// import { useSpring, animated } from 'react-spring';

function Movie({ poster_path, title, release_date, overview, style }) {
  const image = (
    poster_path != null
    ?  
      (<img src={`http://image.tmdb.org/t/p/w185/${poster_path}`} alt={`movie cover for ${title}`}/>)
    : 
      (<div><p>😞 😞 😞</p><p>No movie image</p></div>)
  );
  return (
  
      <div className="row mb-3">
        <div className="col-md-4 text-center">
          {image}
        </div>
        <div className="col-md-8">
          <h3>{title} ({release_date ? release_date.substring(0,4) : "No Date"})</h3>
          {/* <p className="text-success">{this.state.companies.find(props => id===this.state.company).name}</p> */}
          <p>{overview}</p>
        </div>
      </div>
  
  );
}

export default Movie;