/*
* Created by pan 2018/5/10
*/

import {
    GET_Book_SUCCESS,
    GET_Book_FAIL,
    Init
} from "../actions/bookinfoAction"

export const bookinfoReducer = (state = Init, action) => {
    switch (action.type) {
        case GET_Book_SUCCESS:
            return Object.assign({}, state, {data: action.data, isFetching: false});
        case GET_Book_FAIL:
            return Object.assign({}, state, {msg: action.msg, isFetching: false});
        default:
            return state;
    }
};