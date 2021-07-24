import types from './types'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const INITIAL_STATE = {
  token: cookies.get("token"),
  posts: []
}

const storeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_TOKEN:
      return {
        ...state, token: action.token
      }
    case types.SET_POSTS:
      return {
        ...state, posts: [action.posts]
      }
    default:
      return state
  }
}

export default storeReducer