import {
    GET_RECWORDS_FAIL,
    GET_RECWORDS_SUCCESS,
    // GET_RECWORDS_START,
    GET_HOTWORDS_FAIL,
    GET_HOTWORDS_SUCCESS,
    // GET_HOTWORDS_START,
    Init
} from "../actions/indexAction"

export const indexReducer = (state = Init, action) => {
    console.log(action)
    switch (action.type) {
        case GET_HOTWORDS_SUCCESS:
            return Object.assign({}, state, {hotwords: action.data});
        case GET_HOTWORDS_FAIL:
            return Object.assign({}, state, {msg: action.msg});
        case GET_RECWORDS_SUCCESS:
            return Object.assign({}, state, {recwords: action.data});
        case GET_RECWORDS_FAIL:
            return Object.assign({}, state, {msg: action.msg});
        default:
            return state
    }
};