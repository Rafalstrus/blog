import types from './types'

const setToken = item => ({
  type: types.SET_TOKEN, item
})

const setPosts = item => ({
  type: types.SET_POSTS, item
})

const exportedObject = {
    setToken,
    setPosts,
};

export default exportedObject