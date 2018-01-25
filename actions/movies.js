export const ACTIONS = {
  GET_MOVIES_SUCCESS: 'GET_MOVIES_SUCCESS',
  GET_MOVIES_ERROR: 'GET_MOVIES_ERROR'
}

export const getMovies = async (query) => {
  return {
    type: ACTIONS.GET_MOVIES_SUCCESS,
    query
  }
}
