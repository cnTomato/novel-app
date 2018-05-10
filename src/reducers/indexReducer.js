import {
    GET_RECWORDS_FAIL,
    GET_RECWORDS_SUCCESS,
    GET_HOTWORDS_FAIL,
    GET_HOTWORDS_SUCCESS,
    Init
} from "../actions/indexAction"

export const indexReducer = (state = Init, action) => {
    switch (action.type) {
        case GET_HOTWORDS_SUCCESS:
            return Object.assign({}, state, {hotwords: action.data});
        case GET_HOTWORDS_FAIL:
            return Object.assign({}, state, {msg: action.msg, isFetching: false});
        case GET_RECWORDS_SUCCESS:
            return Object.assign({}, state, {recwords: action.data, isFetching: false});
        case GET_RECWORDS_FAIL:
            return Object.assign({}, state, {msg: action.msg, isFetching: false});
        default:
            return state
    }
};