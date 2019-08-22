import React from 'react';
import { Transition } from 'react-spring/renderprops';
import Movie from './Movie'; 


function MovieList({ movies }) {
  return (
      <Transition
          items={movies} keys={movie => movie.id}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}>
              {movie => props => (
                      <div style={props}>
                        <Movie
                          title={movie.original_title}
                          release_date={movie.release_date}
                          overview={movie.overview}
                          poster_path={movie.poster_path}
                        />
                      </div>
                    )
              }
      </Transition>
  );
}

export default MovieList;