//https://www.nafrontendzie.pl/routing-reactjs-wprowadzenie-react-router
import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import parse from 'html-react-parser';
import './add-Post.styles.css'

import store from '../../store.js';

const cookies = new Cookies();

function AddPost() {
    const state = store.getState();
    const authToken = state.token;
    const [postHtml, setPostHtml] = useState("text")
    const [file, setFile] = useState("")

    return (
        <div className="Add-Post">
            <textarea
                onChange={(e) => {
                    setPostHtml(e.target.value)
                }}
                id="post-text">
            </textarea>
            <div
                id="post-preview">
                {
                    parse(postHtml) // eslint-disable-line
                }

            </div>
            <div id="upload-images-container">
                <input
                    type="file"
                    id="fileItem"
                    onChange={(e) => handleFile(e, setFile)}
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
function handleFile(event, setFile) {
    setFile(document.getElementById('fileItem').files[0])
}


export default AddPost;

