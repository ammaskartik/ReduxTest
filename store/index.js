import { createStore, applyMiddleware } from 'redux'
import reducers from 'ReduxTest/reducers'
import asyncMiddleware from 'ReduxTest/middleware/asyncMiddleware'

export default createStore(reducers, applyMiddleware(asyncMiddleware))
