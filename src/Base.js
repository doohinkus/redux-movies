import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import MovieAppContainer from './containers/MovieAppContainer';


function Base() {
  return (
    <Provider store={configureStore}>
      <div className='container'>
        <MovieAppContainer />
      </div>
    </Provider>
  );
}

export default Base;
