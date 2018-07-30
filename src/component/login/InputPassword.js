import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/Login/InputPasswordAction';
import store from '../../store'

import Touchable from 'react-native-platform-touchable';
import BaseComponent from '../../base/BaseComponent';

class InputPassword extends BaseComponent {

    render() {
        console.log('InputPassword.render');
        const {
            isInvisiblePass,
            uriInVisiable,
          } = this.props;
        return (
            <View style={[styles.text_input_background, styles.password_view]} >
                <TextInput allowFontScaling={false} style={[styles.password]}
                    ref={(inputPass) => { this.inputPass = inputPass; }}
                    placeholder={'password'}
                    placeholderTextColor='#8A8A8F'
                    underlineColorAndroid='rgba(0,0,0,0)'
                    secureTextEntry={isInvisiblePass}
                    onChangeText={(input) => this.onPasswordChange(input)}
                />
                <TouchableOpacity onPress={() => this.onShowHidePass()}>
                    <Image
                        style={styles.visible_pass}
                        source={uriInVisiable}
                    />
                </TouchableOpacity>

            </View>
        );
    }

    onPasswordChange(text) {
        this.props.changePass(text);
    }

    onShowHidePass() {
        this.props.showHidePass(!this.props.isInvisiblePass);
    }

}

const mapStateToProps = (state) => ({ ...state.InputPasswordReducer });

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions, dispatch);
}

//   //Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(InputPassword);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    text_input_background: {
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 5,
        borderColor: '#ADADAD',
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        height: 40
    },
    text_input_margin: {
        paddingLeft: 4
    },
    password_view: {
        flexDirection: 'row',
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 3
    },
    visible_pass: {
        height: 15,
        width: 25,
        resizeMode: 'contain'
    },
    password: {
        flex: 1,
        paddingLeft: 4
    },
});