import React from 'react';
import { Transition } from 'react-spring/renderprops';
import { Grid } from '@material-ui/core';

import Movie from './Movie'; 

function MovieList({ movies }) {
  return (
    <Grid container spacing={2}>
      <Transition
        items={movies} 
        keys={movie => movie.id}
        from={{ opacity: 0 }}
        leave={{ opacity: 0 }}
        enter={{ opacity: 1 }}>
            {movie => props => (
                    <Movie
                      style={props}
                      title={movie.original_title}
                      release_date={movie.release_date}
                      overview={movie.overview}
                      poster_path={movie.poster_path}
                    />
                )
            }
      </Transition>
    </Grid>
    // <Grid container spacing={3}>
    //   {movies.map(movie => (
    //       <Movie
    //         title={movie.original_title}
    //         release_date={movie.release_date}
    //         overview={movie.overview}
    //         poster_path={movie.poster_path}
    //       />
    //     ))
    //   }
    // </Grid>
  )
}

export default MovieList;