/*
* Created by pan 2018/4/28
*
*/

import axios from "axios"

export const GET_SORT_SUCCESS = "GET_SORT_SUCCESS";
export const GET_SORT_FAIL = "GET_SORT_FAIL";


export const Init = {
    isFetching: true,
    data: {},
};


const getSortSuccess = (data) => {
    return {
        type: GET_SORT_SUCCESS,
        data: data
    }
};

const getSortFail = (data) => {
    return {
        type: GET_SORT_FAIL,
        msg: data
    }
};


export const initPage = (params) => {
    console.log(params.id)
    return dispatch => {
        axios({
            methods: "POST",
            url: "https://api.steps.info/sort",
            params: {
                id: params.id
            }
        }).then(res => {
            if (res.data.result === 1) {
                dispatch(getSortSuccess(res.data.data))
            } else {
                dispatch(getSortFail(res.data))
            }
        }).catch(err => {
            dispatch(getSortFail(err))
        })
    }
};
