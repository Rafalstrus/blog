import ACTIONS from "./action";
import store from './store';

const mapStateToProps = (state :any) => ({
    item: state.item
});

const mapDispatchToProps = (dispatch :any) => ({
    setAuthKey: (key :any)=> dispatch(ACTIONS.setAuthKey(key)),
    setPosts: (posts :any)=> dispatch(ACTIONS.setPosts(posts)),
    setPage: (page :number)=>dispatch(ACTIONS.setPage(page))
});

export {
    mapStateToProps,
    mapDispatchToProps,
}
export default store