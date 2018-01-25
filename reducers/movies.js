import {ACTIONS as MOVIE_ACTIONS} from 'ReduxTest/actions/movies'
import {createReducer} from './createReducer'

const initialState = {
  movies: {},
  errors: {}
}

const actions = {
  [MOVIE_ACTIONS.GET_MOVIES_SUCCESS]: (state, action) => {
    return {
      ...state,
      movies: action.payload,
    }
  },
  [MOVIE_ACTIONS.GET_MOVIES_ERROR]: (state, action) => {
    return {
      ...state,
      movies: action.errors,
    }
  },
}

export default createReducer(initialState, actions)
