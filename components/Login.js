import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, Modal, KeyboardAvoidingView, Alert } from 'react-native';
import Styles from './LoginStyles';
import LoginService from '../services/LoginService';
import SessionStorage from '../services/SessionStorage';
import NewAccount from './NewAccount';
import ForgotPassword from './ForgotPassword';

export default class Login extends React.Component {

    state = {
        email: '',
        password: '',
        newAccountFormOpened: false,
        forgotPasswordFormOpened: false
    };

    constructor(props) {
        super(props);
        this._loginService = new LoginService();
        this._navigator = this.props.navigation;
        this._openNewAccountForm = this._openNewAccountForm.bind(this);
        this._closeNewAccountForm = this._closeNewAccountForm.bind(this);
        this._openForgotPasswordForm = this._openForgotPasswordForm.bind(this);
        this._closeForgotPasswordForm = this._closeForgotPasswordForm.bind(this);
        this._fillLoginCredentials = this._fillLoginCredentials.bind(this);
        this._doLogin = this._doLogin.bind(this);
    }

    render() {
        return this._loginScreen()
    }

    _loginScreen() {
        return (
            <KeyboardAvoidingView style={Styles.mainContainer}>
                {this._logoSection()}
                {this._loginSection()}
                {this._forgotPasswordSection()}
                {this._forgotPasswordFormSection()}
                {this._forgotPasswordOrNewAccountSeparator()}
                {this._newAccountSection()}
                {this._newAccountFormSection()}
            </KeyboardAvoidingView>
        )
    }

    _logoSection() {
        return (
            <View style={Styles.logoContainer}>
                <Image source={require('../assets/logo.png')} />
            </View>
        )
    }

    _loginSection() {
        return (
            <View style={Styles.loginContainer}>
                <TextInput style={Styles.logInInput} value={this.state.email} placeholder='E-mail' onChangeText={(email) => this.setState({ email })} />
                <TextInput style={Styles.logInInput} value={this.state.password} placeholder='Password' onChangeText={(password) => this.setState({ password })} secureTextEntry />
                <TouchableOpacity style={Styles.logInButton} onPress={this._doLogin}>
                    <Text style={Styles.logInLabel}>Log In</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _doLogin() {
        try {
            const email = this.state.email;
            const password = this.state.password;
            const loggedAccount = this._loginService.login(email, password);
            SessionStorage.setLoggedAccount(loggedAccount);
            this._navigator.navigate('Home');
        } catch (error) {
            Alert.alert('Log In', error);
        }
    }

    _forgotPasswordOrNewAccountSeparator() {
        return (
            <View style={Styles.separatorContainer}>
                <View style={Styles.separatorLine} />
                <Text style={Styles.separatorLabel}>OR</Text>
                <View style={Styles.separatorLine} />
            </View>
        )
    }

    _forgotPasswordSection() {
        return (
            <View style={Styles.forgotPasswordContainer}>
                <TouchableOpacity onPress={this._openForgotPasswordForm}>
                    <Text style={Styles.forgotPasswordLabel}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _forgotPasswordFormSection() {
        return (
            <Modal animationType='slide' visible={this.state.forgotPasswordFormOpened}>
                <ForgotPassword />
                <TouchableOpacity style={Styles.alreadyHaveAccountButton} onPress={this._closeForgotPasswordForm}>
                    <Text style={Styles.alreadyHaveAccountButtonLabel}>Cancel</Text>
                </TouchableOpacity>
            </Modal>
        )
    }

    _openForgotPasswordForm() {
        this.setState({ forgotPasswordFormOpened: true });
    }

    _closeForgotPasswordForm() {
        this.setState({ forgotPasswordFormOpened: false });
    }

    _newAccountSection() {
        return (
            <View style={Styles.newAccountContainer}>
                <TouchableOpacity style={Styles.newAccountButton} onPress={this._openNewAccountForm}>
                    <Text style={Styles.newAccountLabel}>Create New Account</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _newAccountFormSection() {
        const closeNewAccountForm = (account) => this._closeNewAccountForm();
        const fillLoginCredentials = (account) => this._fillLoginCredentials(account);
        return (
            <Modal animationType='slide' visible={this.state.newAccountFormOpened}>
                <NewAccount onSuccess={[closeNewAccountForm, fillLoginCredentials]} />
                <TouchableOpacity style={Styles.alreadyHaveAccountButton} onPress={this._closeNewAccountForm}>
                    <Text style={Styles.alreadyHaveAccountButtonLabel}>Already have an account?</Text>
                </TouchableOpacity>
            </Modal>
        )
    }

    _fillLoginCredentials(account) {
        this.setState({ email: account.email, password: account.password });
    }

    _openNewAccountForm() {
        this.setState({ newAccountFormOpened: true });
    }

    _closeNewAccountForm() {
        this.setState({ newAccountFormOpened: false });
    }
}
