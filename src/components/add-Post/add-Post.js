//https://www.nafrontendzie.pl/routing-reactjs-wprowadzenie-react-router
import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import './add-Post.styles.css'

import store from '../../store.js';

const cookies = new Cookies();

function AddPost() {
    const state = store.getState();
    const authToken = state.token;
    const [file, setFile] = useState("")
    return (
        <div className="Add-Post">
            <textarea
                id="post-text">
            </textarea>
            <div
                id="post-preview">
            </div>
            <div id="upload-images-container">
                <input
                    type="file"
                    id="fileItem"
                    onChange={(e)=>handleFile(e)}
                />
                <img src={file} alt="" />
                <button
                    id="upload-image-button"

                >Upload image</button>
                <div id="images-list">

                </div>
            </div>
            <button
                id="send-post-button"
                onClick={() => {
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
        .then((response) => (response.json()))
}
function handleFile(event) {
    console.log(event)
    console.log(document.getElementById('fileItem').files[0])
}
export default AddPost;

