import {ACTIONS as DOG_ACTIONS} from 'ReduxTest/actions/dogs'
import {createReducer} from './createReducer'

const initialState = {
  dogs: {},
  error: null
}

const actions = {
  [DOG_ACTIONS.GET_DOGS_SUCCESS]: (state, action) => {
    return {
      ...state,
      error: null,
      dogs: action.dogs,
    }
  },
  [DOG_ACTIONS.GET_DOGS_ERROR]: (state, action) => {
    return {
      ...state,
      dogs: {},
      error: action.error,
    }
  },
}

export default createReducer(initialState, actions)
