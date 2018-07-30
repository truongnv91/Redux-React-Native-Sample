import {
} from '../actions/constants/ActionType';

import { NavigationActions } from 'react-navigation';

const initialState = {
    disableSigninState: true,
    error_msg: '',
    vn_choosen: true
};

export const getState = (state) => ({ ...state.LoginReducer });

const LoginReducer = (state = initialState, action) => {
    let nextState;
    switch (action.type) {
        
        default: {
            return nextState || state;
        }
    }
};

export default LoginReducer;