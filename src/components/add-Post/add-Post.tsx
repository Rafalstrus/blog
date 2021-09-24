//https://www.nafrontendzie.pl/routing-reactjs-wprowadzenie-react-router
import React, { useState } from 'react';
import './add-Post.styles.css'

//TODO: change one textfield to buttons which be adding elements (default title,description)

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
                <div>
                    <img alt="" id="image-preview"></img>
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

