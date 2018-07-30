import React from 'react';
import { createStackNavigator } from 'react-navigation';

import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

import LoginView from '../component/login/LoginView';
import HomeView from '../component/login/HomeView';


const RootNavigator = createStackNavigator(
    {
        login_screen: {
            screen: LoginView
        },
        HomeView: {
            screen: HomeView
        },
    }
    ,
    {
        navigationOptions: {
            header: null
        },
        // initialRouteName: 'login_screen'
    }

);

const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.AppReducer
);

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
    state: state.AppReducer,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };