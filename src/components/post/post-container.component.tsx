import { Button } from "@mui/material/"

import {} from './post0elements.components'

export const Post = ({data} :any) => {

    return(
        <div>
            {/*TODO
            element.type = 'h1'/'p' itp.
            element.value = 'post name ... '
            */}
            {data.map((element : any)=>{
                    const PostComponent = components[element.type];
                    return <PostComponent data={element.value} />;
            })}
            <Button>{/* like */}</Button>
            <Button>{/* dislike */}</Button>
            <Button>{/* comment */}</Button>
        </div>
    )

}