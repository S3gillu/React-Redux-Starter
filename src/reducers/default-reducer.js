// default reducer
// Note: You can remove this reducer and create your own reducer

import { FETCH_DATA_SUCCESS } from '../actions';

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_DATA_SUCCESS:
            return action.data;
        default:
            return state;
    }
}