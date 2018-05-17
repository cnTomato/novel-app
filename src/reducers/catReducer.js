/*
* Created by pan 2018/4/25
*
*/

import {
    GET_CAT_FAIL,
    GET_CAT_SUCCESS,
    Init
} from "../actions/catAction"

export const catReducer = (state = Init, action) => {
    switch (action.type) {
        case GET_CAT_SUCCESS:
            return Object.assign({}, state, {data: action.data, isFetching: false});
        case GET_CAT_FAIL:
            return Object.assign({}, state, {msg: action.msg, isFetching: false});
        default:
            return state;
    }
};