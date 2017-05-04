import {
    GET_DATA_START,
    GET_DATA_SUCCESS,
    GET_DATA_FAIL
} from "../actions/catAction";
import _ from "lodash";
const Init = {
    isFetching: true,
    data: [1, 2, 3]
};

function catReducer(state = Init, action) {
    switch (action.type) {
        case GET_DATA_START:
            return state;
        case GET_DATA_SUCCESS:
            return _.assign(state, action.data);
        case GET_DATA_FAIL:
            return _.assign(state, action.err);
        default:
            return state;
    }
}

export default catReducer;