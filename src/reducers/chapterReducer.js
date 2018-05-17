/*
* Created by pan 2018/5/10
*/

import {
    GET_CHAPTER_FAIL,
    GET_CHAPTER_SUCCESS,
    Init
} from "../actions/chapterAction"

export const chapterReducer = (state = Init, action) => {
    switch (action.type) {
        case GET_CHAPTER_SUCCESS:
            return Object.assign({}, state, {data: action.data, isFetching: false});
        case GET_CHAPTER_FAIL:
            return Object.assign({}, state, {msg: action.msg, isFetching: false});
        default:
            return state;
    }
};