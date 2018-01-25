import { Platform } from 'react-native'

const API = Platform.OS === 'android' ? 'http://10.0.3.2:3000/v1' : 'http://localhost:3000/v1'

export const reducer = (state = { movies: [], loading: true }, action) => {
  switch (action.type) {
    case 'GET_MOVIE_DATA_LOADING':
      return {
        ...state,                   // keep the existing state,
        loading: true,              // but change loading to true
      };
    case 'GET_MOVIE_DATA_RECEIVED':
      return {
        loading: false,             // set loading to false
        movies: action.data.movies, // update movies array with reponse data
      };
    case 'GET_MOVIE_DATA_ERROR':
      return state
    default:
      return state
    }
};
