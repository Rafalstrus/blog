//https://www.nafrontendzie.pl/routing-reactjs-wprowadzenie-react-router
import React from 'react';
import Cookies from 'universal-cookie';

import store from '../../store.js';

const cookies = new Cookies();

function AddPost() {
    const state = store.getState();
    const authToken = state.token;
    return (
        <div className="Add-Post">
            <p>working</p>
            <input id="post-text"></input>
            <button onClick= {() => {
                sendPostToApi(authToken)

            }}>Add Post</button>
        </div>
    );
}
async function sendPostToApi(authToken) {
     fetch(`http://localhost:9000/api-connection/post-create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
          token: authToken
      })
    })
    .then((response) =>(response.json()))
  }
export default AddPost;

