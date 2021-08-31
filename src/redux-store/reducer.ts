import ACTIONS from "./action";

interface DefaultState {
    authKey: any
}

const defaultState: DefaultState = {
    authKey: ""
};

const Reducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case ACTIONS.Types.SET_AUTH_KEY: {
            return {
                ...state,
                authKey: action.authKey
            }
        }
        default:
            return state;
    }
};

export default Reducer;