import {
    SHOW_PASS,
    HIDE_PASS,
    PASS_CHANGE
} from '../actions/constants/ActionType';

const initialState = {
    password: '',
    disableSigninState: true,
    isInvisiblePass: true,
    uriInVisiable: require('../images/invisible.png'),
};

const InputPasswordReducer = (state = initialState, action) => {
    let nextState;
    switch (action.type) {
        case SHOW_PASS: {
            return {
                ...state,
                isInvisiblePass: true,
                uriInVisiable: require('../images/invisible.png'),
            };
        }
        case HIDE_PASS: {
            return {
                ...state,
                isInvisiblePass: false,
                uriInVisiable: require('../images/visible.png'),
            };
        }
        case PASS_CHANGE: {
            return {
                ...state,
                password: action.payload,
            };
        }
        default: {
            return nextState || state;
        }
    }
};

export default InputPasswordReducer;