import { Button } from "@mui/material/"

export const H1Post = ({data} :any) => {
    return <h1>{data}</h1>
}

export const PPost = ({data} :any) => {
    return <p>{data}</p>
}

export const ImgPost = ({data} :any) => {
    return <img alt='' src={data}></img>
}

export const LikeButtonPost = ({data} :any) => {
    return <Button onClick={}></Button>
}

export const DisLikeButtonPost = ({data} :any) => {

    return <Button onClick={setLikeOrDisLike(authKey,'like',data.PostId)}></Button>
}

export const CommentButtonPost = ({data} :any) => {
    
    return <Button onClick={setLikeOrDisLike(authKey,'dislike',data.PostId)}></Button>
}