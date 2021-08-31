const Types = {
    SET_AUTH_KEY: "SET_AUTH_KEY"
};
// actions
const setAuthKey = (key: any) => ({
    type: Types.SET_AUTH_KEY,
    key: key
})
const exportedObject = {
    setAuthKey,
    Types
}
export default exportedObject