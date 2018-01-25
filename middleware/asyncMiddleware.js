const isPromise = val => val && typeof val.then === 'function'
const asyncMiddleware = store => next => action => isPromise(action) ? action.then(res => store.dispatch(res)) : next(action)
export default asyncMiddleware


// **actions.js**
// use async/await
/*
export async function getInfo(id){
  const data = await fetch('/getUserInfo/' + id).then(res => res.json())
  return {
    type: 'GET_USERINFO',
    data
  }
}
// use Promise
export function getList(){
  return fetch('/getList').then(res => res.json()).then(data => ({
    type: 'GET_LIST',
    data
  }))
}

----------------
// dispatch
try{
  const data = await store.dispatch(getInfo(20)) // resolve, data === action.data
} catch(e) {
  console.log(e) // reject
}*/
