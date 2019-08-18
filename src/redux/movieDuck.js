// --------------- ACTIONS ---------------------
// Action Type Constants--this allows for VS Code autosuggest
import C from './contants';
import apiCall from './helpers';
import { ApiKey } from '../apiKey';


export function fetchKeywords(keyword){

  const keywordParams = {
    baseUrl: 'https://api.themoviedb.org/3/search/keyword?',
    actionType: C.FETCH_KEYWORDS,
    apiParams: {
        api_key: `${ApiKey}`,
        query: `${keyword}`,
        pages: '1',
    }
  }
  return apiCall(keywordParams);
}

export function fetchMoviesByCompany(company){

  const companyParams = {
    baseUrl: 'https://api.themoviedb.org/3/discover/movie?',
    actionType: C.FETCH_MOVIES_BY_COMPANY,
    apiParams: {
        api_key: `${ApiKey}`,
        append_to_response: 'videos',
        sort_by: 'popularity.desc',
        with_companies: `${company}`,
        pages: '1',
    }
  }
  return apiCall(companyParams);
}

export function fetchMoviesByKeyword(keyword){
  const keywordParams = {
    baseUrl: `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}`,
    actionType: C.FETCH_MOVIES_BY_KEYWORD,
    apiParams: {
        query: `${keyword}`,
        language: 'en-US',
        include_adult: false,
        page: 1,
    }
  }
  return apiCall(keywordParams);
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
    // payload: filter payload in reducer ...
  }
}
export function filterMoviesByApproval(){
  return {
    type: C.FILTER_MOVIES_BY_APPROVAL,
  }
}
export function clearKeywords(){
  return {
    type: C.CLEAR_KEYWORDS,
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
  isApprovedCompany: false,
}


export default function movieReducer(state=initialState, action){
  switch (action.type){
    case C.FETCH_MOVIES_BY_COMPANY:
      return {
        ...state,
        movies: action.payload
      }
    case C.FETCH_KEYWORDS:
      return {
        ...state,
        keywords: action.payload
      }
    case C.CLEAR_KEYWORDS:
      return {
        ...state,
        keywords: []
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
        // apply filter function
        movies: action.payload
      }
    case C.FILTER_MOVIES_BY_APPROVAL:
      return {
        ...state,
        // apply filter function
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