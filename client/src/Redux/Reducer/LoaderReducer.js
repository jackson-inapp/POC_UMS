import { LOADER } from "../type";

const initialState = {
    loading: false
}

const setLoading = (state, condition) => {
    let newState = { ...state };
    newState.loading = condition;

    return newState;

}

function loaderReducer(state = initialState, action) {
    if (action.type === LOADER) {
        return setLoading(state, action.payload);
    } else {
        return state;
    }
}

export default loaderReducer;