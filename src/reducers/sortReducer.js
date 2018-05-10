/*
* Created by pan 2018/4/25
*
*/

import {
    GET_SORT_FAIL,
    GET_SORT_SUCCESS,
    Init
} from "../actions/sortAction"

export const sortReducer = (state = Init, action) => {
    switch (action.type) {
        case GET_SORT_SUCCESS:
            return Object.assign({}, state, {data: action.data, isFetching: false});
        case GET_SORT_FAIL:
            return Object.assign({}, state, {msg: action.msg, isFetching: false});
        default:
            return state;
    }
};