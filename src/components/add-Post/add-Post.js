//https://www.nafrontendzie.pl/routing-reactjs-wprowadzenie-react-router
import React, { useState } from 'react';
import parse from 'html-react-parser';
import './add-Post.styles.css'

function AddPost() {
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
                    //send post
                }}>Add Post</button>
        </div>
    );
}

function handleFile(event, setFile) {
    setFile(document.getElementById('fileItem').files[0])
}


export default AddPost;

