//https://www.nafrontendzie.pl/routing-reactjs-wprowadzenie-react-router
import { useState } from 'react';
import './add-Post.styles.css'

import { Button, Grid } from '@mui/material';

//TODO: change one textfield to buttons which be adding elements (default title,description)

function AddPost() {
    const [file, setFile] = useState("")

    return (
        <Grid container spacing={2} 
        className="Add-Post">
            <Grid item xs={6}>
            <Grid container spacing={2} >
            <Grid item xs={12}>
            <input
                placeholder="title"
            >

            </input>
            </Grid>
            <Grid item xs={12}>
            <textarea
                onChange={(e) => {
                    console.log(e.target.value)
                }}
                id="post-text">
            </textarea>
            </Grid>
            <Button></Button>
            </Grid>
            </Grid>
            <Grid item xs={6}>
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
            </Grid>
            <button
                id="send-post-button"
                onClick={() => {
                    //send post
                }}>Add Post</button>
        </Grid>
    );
}

function handleFile(event: any, setFile: any) {
    //setFile(document!.getElementById('fileItem')!.files[0])
}


export default AddPost;

