import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';

function Movie({ poster_path, title, release_date, overview, style }) {
  const image = (
    poster_path != null
    ?  
      (<img src={`http://image.tmdb.org/t/p/w185/${poster_path}`} alt={`movie cover for ${title}`}/>)
    : 
      (<div><p>😞 😞 😞</p><p>No movie image</p></div>)
  );
  return (
    <Fragment>
        <Grid item md={4} xs={12} align="center" style={style}>
          {image}
        </Grid>
        <Grid item md={8} xs={12} style={style}>
          <h3>{title} ({release_date ? release_date.substring(0,4) : "No Date"})</h3>
          {/* <p className="text-success">{this.state.companies.find(props => id===this.state.company).name}</p> */}
          <p>{overview}</p>
        </Grid>
    </Fragment>
  );
}

export default Movie;