import axios from 'axios'
export const GET_DATA_POST_START = 'GET_DATA_POST_START';
export const GET_DATA_POST_SUCCESS = 'GET_DATA_POST_SUCCESS';
export const GET_DATA_POST_FAIL = 'GET_DATA_POST_FAIL';

const getDataStart = () => {
    return {
        type: GET_DATA_POST_START,
        isFetching: true
    }
};

const getDataSuccess = (data) => {
    return {
        type: GET_DATA_POST_SUCCESS,
        data: data
    }
};

const getDataFail = (err) => {
    return {
        type: GET_DATA_POST_FAIL,
        err: err
    }
};

export const initPage = (params, url = "http://api.zhuishushenqi.com/cats/lv2/statistics") => {
    console.log(params, url)
    return (dispatch, getState) => {
        axios.get(url, {
            params: params
        })
            .then(function (res) {
                console.log(res);
                if (res.ok == "true") {
                    dispatch(getDataSuccess(res))
                } else {
                    dispatch(getDataFail(res))
                }
            })
            .catch(function (err) {
                console.log(err)
                dispatch(getDataFail(err))
            })
    }
};