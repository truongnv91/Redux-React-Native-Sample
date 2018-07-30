import {
    SHOW_PASS,
    HIDE_PASS,
    PASS_CHANGE
} from '../../actions/constants/ActionType';

//Import the sample data

export function showHidePass(isShowPass) {
    return (dispatch) => {
        if (isShowPass)
            dispatch({ type: SHOW_PASS });
        else
            dispatch({ type: HIDE_PASS });
    };
}

export function changePass(pass) {
    return (dispatch) => {
        dispatch({ type: PASS_CHANGE, payload: pass });
    };
}
