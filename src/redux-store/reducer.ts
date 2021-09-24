import ACTIONS from "./action";

interface DefaultState {
    authKey: any,
    posts : any,
    page : number
}

const defaultState: DefaultState = {
    authKey: "",
    posts : {},
    page: 0
};

const Reducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case ACTIONS.Types.SET_AUTH_KEY: {
            return {
                ...state,
                authKey: action.authKey
            }
        }
        case ACTIONS.Types.SET_POSTS: {
            return{
                ...state,
                posts: action.posts
            }
        }
        case ACTIONS.Types.SET_PAGE: {
            return{
                ...state,
                page: action.page
            }
        }
        default:
            return state;
    }
};

export default Reducer;