import { combineReducers } from 'redux'
import LoginReducer from '../reducers/LoginReducer';
import AppReducer from '../reducers/AppReducer';
import InputPasswordReducer from '../reducers/InputPasswordReducer';

const rootReducers = combineReducers({
    AppReducer,
    LoginReducer,
    InputPasswordReducer
});

export default rootReducers;