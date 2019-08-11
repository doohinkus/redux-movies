import React from 'react';
import {useTransition, animated} from 'react-spring'

function Movie(props) {
  const image = (
    props.poster_path != null
    ?  
      (<img src={`http://image.tmdb.org/t/p/w185/${props.poster_path}`} alt={`movie cover for ${props.title}`}/>)
    : 
      (<div><p>😞 😞 😞</p><p>No movie image</p></div>)
  );
  return (
    <div key={props.id} className="row mb-3">
      <div className="col-md-4 text-center">
        {image}
      </div>
      <div className="col-md-8">
        <h3>{props.title} ({props.release_date ? props.release_date.substring(0,4) : "No Date"})</h3>
        {/* <p className="text-success">{this.state.companies.find(props => props.id===this.state.company).name}</p> */}
        <p>{props.overview}</p>
      </div>
    </div>
  );
}

export default Movie;