import types from './types'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const INITIAL_STATE = {
  token: cookies.get("token"),
  list: []
}

const storeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_TOKEN:
      return {
        ...state, token: cookies.get("token")
      }
    case types.SEND_TOKEN:
      return {
        ...state, list: []
      }
    default:
      return state
  }
}

export default storeReducer