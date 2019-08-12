// Api Key
import { ApiKey  } from '../apiKey';
import axios from 'axios';
// --------------- ACTIONS ---------------------
// Action Type Constants--this allows for VS Code autosuggest
const C = {
  SET_COMPANY: 'SET_COMPANY',
  SET_KEYWORD: 'SET_KEYWORD',
  FETCH_MOVIES_BY_COMPANY: 'FETCH_MOVIES_BY_COMPANY',
  FETCH_MOVIES_BY_KEYWORD: 'FETCH_MOVIES_BY_KEYWORD',
  FILTER_MOVIES_BY_RATING: 'FILTER_MOVIES_BY_RATING',
  FILTER_MOVIES_BY_APPROVAL: 'FILTER_MOVIES_BY_APPROVAL',
  START_FETCH: 'START_FETCH',
  END_FETCH_SUCCESS: 'END_FETCH_SUCCESS',
  END_FETCH_FAIL: 'END_FETCH_FAIL',
}

export function fetchMoviesByCompany(company){
  const baseUrl = 'https://api.themoviedb.org/3/discover/movie?';
  const companyParams = {
    api_key: `${ApiKey}`,
    append_to_response: 'videos',
    sort_by: 'popularity.desc',
    //make me dynamic
    with_companies: `${company}`,
    pages: '1'
    //end make me dynamic
  };
  return (dispatch) => {
    dispatch({ type: C.START_FETCH });
    dispatch({ type: C.FETCH_MOVIES_BY_COMPANY });
    return axios.get(baseUrl, { params: companyParams })
      // .then(res => console.log("RESULTS>>>>> ", res.data.results))
      .then(res => dispatch({
        type: C.FETCH_MOVIES_BY_COMPANY,
        payload: res.data.results,
      }))
      .then(() => dispatch({ type: C.END_FETCH_SUCCESS }))
      .catch(err => dispatch({ type: C.END_FETCH_FAIL, error: `${err}` }));
  };
}
export function fetchMoviesByKeyword(keyword){
  return {
    type: C.FETCH_MOVIES_BY_KEYWORD,
    payload: keyword
  }
}
export function startFetch(){
  return {
    type: C.START_FETCH,
    fetching: true,
  }
}
export function endFetchSuccess(){
  return {
    type: C.END_FETCH_SUCCESS,
    fetching: false,
    isError: false,
  }
}
export function endFetchFail(){
  return {
    type: C.END_FETCH_FAIL,
    fetching: false,
    isError: true,
  }
}
export function filterMoviesByRating(rating){
  return {
    type: C.FILTER_MOVIES_BY_RATING,
    payload: rating
  }
}
export function filterMoviesByApproval(){
  return {
    type: C.FILTER_MOVIES_BY_APPROVAL,
  }
}


// -------------------- REDUCERS ----------------------
const initialState = {
  movies: [],
  approvedCompanies:[
    {
      "name" : 'Dreamworks Animation SKG',
      "id" : '521'
    },
    {
      "name" : 'Twentieth Century Fox Film Corp.',
      "id": '25'
    },
    {
      "name" : 'Fox Searchlight Pictures',
      "id" : '43'},
    {
      "name": 'Fox 2000 Films',
      "id" : '711'
    },
    {
      "name": 'STX Entertainment',
      "id" : '47729'
    }
  ],
  fetching: false,
  totalPages: null,
  currentPage: null,
  showPagination: false,
  isError: false,
  company: null,
  keyword: null,
  isApprovedCompany: false,
}


export default function movieReducer(state=initialState, action){
  switch (action.type){
    case C.FETCH_MOVIES_BY_COMPANY:
      return {
        ...state,
        movies: action.payload
      }
    case C.SET_COMPANY:
      return {
        ...state,
        company: action.payload
      }
    case C.SET_KEYWORD:
      return {
        ...state,
        keyword: action.payload
      }
    case C.FETCH_MOVIES_BY_KEYWORD:
      return {
        ...state,
        movies: action.payload
      }
    case C.FILTER_MOVIES_BY_RATING:
      return {
        ...state,
        movies: action.payload
      }
    case C.FILTER_MOVIES_BY_APPROVAL:
      return {
        ...state,
        movies: action.payload      
      }
    case C.END_FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        isError: false,
      }    
    case C.END_FETCH_FAIL:
      return {
        ...state,
        fetching: false,
        isError: true,
      }    
    default: 
      return state;
  }
}