import {
    GET_DATA_POST_START,
    GET_DATA_POST_SUCCESS,
    GET_DATA_POST_FAIL
} from "../actions/indexAction";

const Init={
    'isFetching':false,
    '_data':[]
};

export default function indexReducer(state = Init, action="GET_DATA_POST_SUCCESS") {
    console.log(Init,'_____')
    console.log(action,'_____')
    switch (action.type){
        case 'GET_DATA_POST_SUCCESS':
            return state.set('_data',action.data.data)
        default:
            return state;
    }
}