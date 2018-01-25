export const ACTIONS = {
  GET_DOGS_SUCCESS: 'GET_DOGS_SUCCESS',
  GET_DOGS_ERROR: 'GET_DOGS_ERROR'
}

export const getDogs = async () => {
  try {
    const dogsFetch = await fetch('https://dog.ceo/api/breeds/list/all')
    const dogs = await dogsFetch.json()
    return {
      type: ACTIONS.GET_DOGS_SUCCESS,
      dogs
    }
  }
  catch(e) {
    return {
      type: ACTIONS.GET_DOGS_ERROR,
      error: e
    }
  }
}
