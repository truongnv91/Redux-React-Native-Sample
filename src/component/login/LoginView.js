import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/Login/LoginAction';
import { store } from '../../../App';

import { Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Touchable from 'react-native-platform-touchable'
import BaseComponent from '../../base/BaseComponent';
import ApiService from '../../Networking/ApiService';
import InputPassword from './InputPassword';

class LoginView extends BaseComponent {


    constructor(props) {
        super(props);
        this.phone = '';
    }

    render() {
        console.log('LoginView.render');
        const {
            disableSigninState,
            error_msg,
            vn_choosen
          } = this.props;
        return (
            <View style={styles.container} >
                <View style={{ flex: 1, justifyContent: 'center' }}>

                    <View style={{ flexDirection: 'column' }} >
                        <View style={styles.text_input_background}>
                            <TextInput allowFontScaling={false} style={{ flex: 1, padding: 4, fontSize: 14, lineHeight: 18 }}
                                ref={(inputphone) => { this.inputphone = inputphone; }}
                                placeholder={'phone'}
                                placeholderTextColor='#8A8A8F'
                                underlineColorAndroid='rgba(0,0,0,0)'
                                keyboardType='numeric'
                                onChangeText={this.onPhoneChange.bind(this)}
                            // value={this.state.phone}
                            // onSubmitEditing={this.onNextPasswordFocus.bind(this)}
                            />
                        </View>

                        <InputPassword
                            passwordChange={(input) => this.onPasswordChange(input)} />


                        <Touchable style={{ marginTop: 20, borderColor: 'red', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}
                            onPress={this.onSignInClick.bind(this)}>
                            <Text style={{ fontSize: 15, color: '#000', padding: 20 }} >Login</Text>
                        </Touchable>

                    </View>

                </View>

            </View>
        );
    }

    componentDidMount() {
        store.subscribe(() => {
            var state = store.getState().InputPasswordReducer.password;
            console.log('PassChange', state)
        });
    }

    onBackPress() {
        if (this.props.navigation != null) {
            this.props.navigation.goBack();
        }
    }

    onPhoneChange(text) {
        this.phone = text;
    }

    onSignInClick() {
        console.log('onSignInClick', this.props)
        let phone = this.phone;
        let inputPass = store.getState().InputPasswordReducer.password;
        let password = this.getUtils().sha256(inputPass);
        let url = this.getConfig().BASE_URL + ApiService.user_login(phone, password);
        this.props.requestLogin(url);
    }

    onShowHidePass() {
        this.props.showHidePass(!this.props.isInvisiblePass);
    }
}

const mapStateToProps = (state) => ({...state.LoginReducer });

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions, dispatch);
}

//   //Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(LoginView);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    row_center: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    left: {
        flex: 1,
        justifyContent: 'center'
    },
    middle: {
        flex: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bottom: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        bottom: 0
    },
    right: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    password: {
        flex: 1,
        paddingLeft: 4
    },
    signin_button: {
        backgroundColor: "#4294F7",
        height: 50,
        marginLeft: 15,
        marginRight: 15
    },
    signup_button: {
        backgroundColor: "#28C233",
        height: 50,
        marginLeft: 15,
        marginRight: 15
    },
    button_disable: {
        backgroundColor: '#B9B9B9',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 80,
        width: 80
    },

    text_forgot_pass: {
        color: '#919191',
        alignItems: 'center',
        justifyContent: 'center',
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
    error_text: {
        color: '#FF0000',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 15,
        fontSize: 14,
        marginBottom: 5
    },
    language_group: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    vietnam: {
        marginLeft: 5,
        marginRight: 5,
        //color: '#00ABA7'
    },
    english: {
        marginLeft: 5,
        marginRight: 5,
        //color: '#919191'
    }

});