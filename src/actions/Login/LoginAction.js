import {
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../../actions/constants/ActionType';
import Networking from '../../Networking/Networking';
import ApiService from '../../Networking/ApiService';

export function requestLogin(url) {
    console.log('url', url);
    return (dispatch) => {
        Networking.httpRequestGet(url,
            (jsonData) => {
                console.log('requestLogin.response', JSON.stringify(jsonData));
                dispatch({ type: LOGIN_SUCCESS, payload: { jsonData } })
            },
            (error) => {
                console.log('requestLogin.error', error);
                dispatch({ type: LOGIN_ERROR, payload: { error } })
            });
    };
}