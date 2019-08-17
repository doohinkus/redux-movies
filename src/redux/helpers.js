
import axios from 'axios';
import C from './contants';

export default function apiCall(params = {}){
  console.log("apikey: ", C.API_KEY)

  return (dispatch) => {
    dispatch({ type: C.START_FETCH });
    dispatch({ type: params.actionType });
    return axios.get(params.baseUrl, { params: params.apiParams })
      .then(res => dispatch({
        type: params.actionType,
        payload: res.data.results,
      }))
      .then(() => dispatch({ type: C.END_FETCH_SUCCESS }))
      .catch(err => dispatch({ type: C.END_FETCH_FAIL, error: `${err}` }));
  };
}

