import ACTIONS from "./action";
import store from './store';

const mapStateToProps = (state :any) => ({
    item: state.item
});

const mapDispatchToProps = (dispatch :any) => ({
    setAuthKey: (key :any)=> dispatch(ACTIONS.setAuthKey(key))
});

export {
    mapStateToProps,
    mapDispatchToProps,
}
export default store