import actions from './actions'

import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const makeToken = () =>
  async (dispatch) => {
    const token = cookies.get("token")
    console.log("aaa")
     dispatch(actions.setToken(token))
  }