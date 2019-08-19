import React from 'react';
import {useSpring, animated} from 'react-spring'

function Movie({ poster_path, title, id, release_date, overview }) {
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  const image = (
    poster_path != null
    ?  
      (<img src={`http://image.tmdb.org/t/p/w185/${poster_path}`} alt={`movie cover for ${title}`}/>)
    : 
      (<div><p>😞 😞 😞</p><p>No movie image</p></div>)
  );
  return (
    <animated.div style={props}>
      <div key={id} className="row mb-3">
        <div className="col-md-4 text-center">
          {image}
        </div>
        <div className="col-md-8">
          <h3>{title} ({release_date ? release_date.substring(0,4) : "No Date"})</h3>
          {/* <p className="text-success">{this.state.companies.find(props => id===this.state.company).name}</p> */}
          <p>{overview}</p>
        </div>
      </div>
    </animated.div>
  );
}

export default Movie;