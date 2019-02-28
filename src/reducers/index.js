import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { DATA_SAVE_SUCCESS } from '../actions/index';

// calling the default reducer to create a link
import defaultReducer from './default-reducer';

const rootReducers = combineReducers({
    // add reducer files references here
    default: defaultReducer,
    form:formReducer.plugin({
        'AppForm': (state, action) => {
            switch(action.type) {
                case DATA_SAVE_SUCCESS:
                    return undefined;       // <--- blow away form data
                default:
                    return state;
            }
        }
    })
});

export default rootReducers;