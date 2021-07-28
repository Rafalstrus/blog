import types from './types'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const INITIAL_STATE = {
  token: cookies.get("token") ? cookies.get("token") : "missing",
  posts: []
}

const storeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_TOKEN:
      return {
        ...state, token: action.item
      }
    case types.SET_POSTS:
      return {
        ...state, posts: [action.posts]
      }
    default:
      return {
        ...state
      }
  }
}

export default storeReducer