import { Button } from "@mui/material/"

import parse from 'html-react-parser';

export const Post = ({data} :any) => {

    return(
        <div>
            {data.map((element : any)=>{
                return parse(element)
            })}
            <Button>{/* like */}</Button>
            <Button>{/* dislike */}</Button>
            <Button>{/* comment */}</Button>
        </div>
    )

}