/*
* Created by pan 2018/5/10
*/


import axios from "axios"

export const GET_Book_SUCCESS = "GET_Book_SUCCESS";
export const GET_Book_FAIL = "GET_Book_FAIL";


export const Init = {
    isFetching: true,
    data: {},
};


const getBookSuccess = (data) => {
    return {
        type: GET_Book_SUCCESS,
        data: data
    }
};

const getBookFail = (data) => {
    return {
        type: GET_Book_FAIL,
        msg: data
    }
};


export const initPage = (params) => {
    return dispatch => {
        axios.get("https://api.steps.info/bookInfo", {params: {url: params.url}}).then(res => {
            if (res.data.result === 1) {
                console.log(res.data.data)
                dispatch(getBookSuccess(res.data.data))
            } else {
                dispatch(getBookFail(res.data))
            }
        }).catch(err => {
            dispatch(getBookFail(err))
        })
    }
};
