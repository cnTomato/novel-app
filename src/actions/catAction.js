/*
* Created by pan 2018/4/25
*
*/

import axios from "axios"

export const GET_RESULT_SUCCESS = "GET_RESULT_SUCCESS";
export const GET_RESULT_FAIL = "GET_RESULT_FAIL";


export const Init = {
    isFetching: true,
    data: {},
};


const getResultSuccess = (data) => {
    return {
        type: GET_RESULT_SUCCESS,
        data: data
    }
};

const getResultFail = (data) => {
    return {
        type: GET_RESULT_FAIL,
        msg: data
    }
};


export const initPage = () => {
    return dispatch => {
        axios.get("https://api.steps.info/cat").then(res => {
            if (res.data.result === 1) {
                dispatch(getResultSuccess(res.data.data))
            } else {
                dispatch(getResultFail(res.data))
            }
        }).catch(err => {
            dispatch(getResultFail(err))
        })
    }
};
