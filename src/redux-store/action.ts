const Types = {
    SET_AUTH_KEY: "SET_AUTH_KEY",
    SET_POSTS: "SET_POSTS",
    SET_PAGE: "SET_PAGE"
};
// actions
const setAuthKey = (key: any) => ({
    type: Types.SET_AUTH_KEY,
    key: key
})
const setPosts = (posts :any) => ({
    type: Types.SET_POSTS,
    posts: posts
})
const setPage = (page :number) => ({
    type: Types.SET_PAGE,
    page: page
})
const exportedObject = {
    setAuthKey,
    setPosts,
    setPage,
    Types
}
export default exportedObject