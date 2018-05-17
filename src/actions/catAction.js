/*
* Created by pan 2018/4/25
*
*/

import axios from "axios"

export const GET_CAT_SUCCESS = "GET_CAT_SUCCESS";
export const GET_CAT_FAIL = "GET_CAT_FAIL";


export const Init = {
    isFetching: true,
    data: {},
};


const getResultSuccess = (data) => {
    return {
        type: GET_CAT_SUCCESS,
        data: data
    }
};

const getResultFail = (data) => {
    return {
        type: GET_CAT_FAIL,
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
