export const GET_DATA_START = 'GET_DATA_START';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAIL = 'GET_DATA_FAIL';
import 'whatwg-fetch';

const getDataStart = () => {
    return {
        type: GET_DATA_START,
        isFetching: true
    }
};

const getDataSuccess = (data) => {
    return {
        type: GET_DATA_SUCCESS,
        data: data
    }
};

const getDataFail = (err = 0) => {
    return {
        type: GET_DATA_FAIL,
        err: err
    }
};

export const initPage = (requestUrl = "http://api.zhuishushenqi.com/cats/lv2/statistics") => {
    return null;
    // return (dispatch, getState) => {
    //     fetch(requestUrl, {
    //         headers: {
    //             "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    //         },
    //         method: 'POST',
    //         mode: 'cors',
    //     }).then(res => {
    //         if (res.ok) {
    //             dispatch(getDataSuccess(res))
    //         } else {
    //             dispatch(getDataFail(0))
    //         }
    //     }).catch(err => {
    //         dispatch(getDataFail(err))
    //     })
    // }
}