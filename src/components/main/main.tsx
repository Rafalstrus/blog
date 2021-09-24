import {useEffect} from 'react'

import { mapStateToProps, mapDispatchToProps } from '../../redux-store/operation';
import { connect, useSelector } from "react-redux";


import {Post} from '../post/post-container.component';

import {getPosts} from '../../fetches';

 const Main = ({setPosts} :any) => {
    const page = useSelector((state: any) => state.page)
    const posts = useSelector((state: any) => state.posts)
    useEffect(() => {
        async function getData() {
            return await getPosts(page)
        }
        setPosts(getData())// eslint-disable-next-line
      },[]);
    return (
        <div className="Main">
            {
            // posts.map((postData :any)=>{
            //     return (<Post data={postData}/>)
            // })
            }
            <p>here be posts</p>
        </div>
    );
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main);
  
