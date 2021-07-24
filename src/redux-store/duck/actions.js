import types from './types'

const get = item => ({
  type: types.GET_TOKEN, item
})

const send = item => ({
  type: types.SEND_TOKEN, item
})

const exportedObject = {
    get,
    send,
};

export default exportedObject