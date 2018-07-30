/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    BackHandler,
    ToastAndroid,
    NetInfo,
    Alert
} from 'react-native';
import Config from '../Config';
import utils from '../Utils';

export default class BaseComponent extends Component {
    constructor(props) {
        super(props);
       
    }

    getConfig() {
        return Config;
    }

    getUtils() {
        return utils;
    }

}
