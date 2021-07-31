import store from '../../store.js';

function Main() {
    const state = store.getState();
    const posts = state.posts
    return (
        <div className="Main">
            {posts.map(()=>{
                return true
            })}
            <p>here be posts</p>
        </div>
    );
}


export default Main;
