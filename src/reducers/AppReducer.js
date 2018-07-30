import {
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../actions/constants/ActionType';

import { NavigationActions } from 'react-navigation';

import { RootNavigator } from '../Router/LoginRouter';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = RootNavigator.router.getActionForPathAndParams('login_screen');
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
const secondAction = RootNavigator.router.getActionForPathAndParams('HomeView');
const initialNavState = RootNavigator.router.getStateForAction(
    firstAction,
    tempNavState
);

function nav(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
        case LOGIN_SUCCESS:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'HomeView' }),
                state
            );
            break;
        case LOGIN_ERROR: {
            console.log('LOGIN_ERROR')
        }
        default:
            nextState = RootNavigator.router.getStateForAction(action, state);
            break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}

export default nav;