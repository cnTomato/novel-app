import axios from "axios"

export const GET_HOTWORDS_SUCCESS = "GET_HOTWORDS_SUCCESS";
export const GET_HOTWORDS_FAIL = "GET_HOTWORDS_FAILE";

export const GET_RECWORDS_SUCCESS = "GET_RECWORDS_SUCCESS";
export const GET_RECWORDS_FAIL = "GET_RECWORDS_FAILE";


export const Init = {
    isFetching: true,
    hotwords: [],
    recwords: []
};


const getHotwordsSuccess = (data) => {
    return {
        type: GET_HOTWORDS_SUCCESS,
        data: data
    }
};

const getHotwordsFail = (data) => {
    return {
        type: GET_HOTWORDS_FAIL,
        msg: data
    }
};


const getRecwordsSuccess = (data) => {
    return {
        type: GET_RECWORDS_SUCCESS,
        data: data
    }
};

const getRecwordsFail = (data) => {
    return {
        type: GET_RECWORDS_FAIL,
        msg: data
    }
};

export const initPage = () => {
    return dispatch => {
        axios.all([actionGetHotwords(), actionGetRecwords()]).then(axios.spread((hot, rec) => {
            if (hot.data.result === 1) {
                dispatch(getHotwordsSuccess(hot.data.data));
                if (rec.data.result === 1) {
                    dispatch(getRecwordsSuccess(rec.data.data))
                } else if (hot.data.result !== 1) {
                    dispatch(getRecwordsFail(rec.data))
                }
            } else if (hot.data.result !== 1) {
                dispatch(getHotwordsFail(hot.data))
            }
        })).catch(err => {
            console.log(err)
        })
    }
};

export const actionGetHotwords = () => {
    return axios.get("https://api.steps.info/hotSearchWords")
};

export const actionGetRecwords = () => {
    return axios.get("https://api.steps.info/searchRecommend")
};