/*
* Created by pan 2018/5/10
*/


import axios from "axios"

export const GET_CHAPTER_SUCCESS = "GET_CHAPTER_SUCCESS";
export const GET_CHAPTER_FAIL = "GET_CHAPTER_FAIL";


export const Init = {
    isFetching: true,
    data: {},
};


const getChapterSuccess = (data) => {
    return {
        type: GET_CHAPTER_SUCCESS,
        data: data
    }
};

const getChapterFail = (data) => {
    return {
        type: GET_CHAPTER_FAIL,
        msg: data
    }
};


export const initPage = (params) => {
    console.log(params,"action")
    return dispatch => {
        axios.get("https://api.steps.info/chapter", {params: {url: params.url}}).then(res => {
            if (res.data.result === 1) {
                dispatch(getChapterSuccess(res.data))
            } else {
                dispatch(getChapterFail(res.data))
            }
        }).catch(err => {
            dispatch(getChapterFail(err))
        })
    }
};