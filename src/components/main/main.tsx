import {useState,useEffect} from 'react'

import { mapStateToProps, mapDispatchToProps } from './store-redux/operations';
import { connect, useSelector } from "react-redux";


import {Post} from '../post/post-container.component';

import {getPosts} from '../../fetches.tsx';

 const Main = ({setPosts} :any) => {
    const page = useSelector((state: any) => state.page)
    const posts = useSelector((state: any) => state.posts)
    useEffect(() => {
        async function getData() {
            var posts = await getPosts(page)
        }
        setPosts(posts)
      },[]);
    return (
        <div className="Main">
            {
            posts.map((postData :any)=>{
                return (<POST data={postData}/>)
            })
            }
            <p>here be posts</p>
        </div>
    );
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main);
  
