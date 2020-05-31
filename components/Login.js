import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, Modal, KeyboardAvoidingView } from 'react-native';

import styles from './LoginStyles';

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
        this.openNewAccountForm = this.openNewAccountForm.bind(this);
        this.closeNewAccountForm = this.closeNewAccountForm.bind(this);
        this.openForgotPasswordForm = this.openForgotPasswordForm.bind(this);
        this.closeForgotPasswordForm = this.closeForgotPasswordForm.bind(this);
        this.fillLoginCredentials = this.fillLoginCredentials.bind(this);
    }

    render() {
        return this.loginScreen()
    }

    loginScreen() {
        return (
            <KeyboardAvoidingView style={styles.mainContainer}>
                {this.logoSection()}
                {this.loginSection()}
                {this.forgotPasswordSection()}
                {this.forgotPasswordFormSection()}
                {this.forgotPasswordOrNewAccountSeparator()}
                {this.newAccountSection()}
                {this.newAccountFormSection()}
            </KeyboardAvoidingView>
        )
    }

    logoSection() {
        return (
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo.png')} />
            </View>
        )
    }

    loginSection() {
        return (
            <View style={styles.loginContainer}>
                <TextInput style={styles.logInInput} value={this.state.email} placeholder='E-mail' />
                <TextInput style={styles.logInInput} value={this.state.password} placeholder='Password' secureTextEntry />
                <TouchableOpacity style={styles.logInButton} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles.logInLabel}>Log In</Text>
                </TouchableOpacity>
            </View>
        )
    }

    forgotPasswordOrNewAccountSeparator() {
        return (
            <View style={styles.separatorContainer}>
                <View style={styles.separatorLine} />
                <Text style={styles.separatorLabel}>OR</Text>
                <View style={styles.separatorLine} />
            </View>
        )
    }

    forgotPasswordSection() {
        return (
            <View style={styles.forgotPasswordContainer}>
                <TouchableOpacity onPress={this.openForgotPasswordForm}>
                    <Text style={styles.forgotPasswordLabel}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        )
    }

    forgotPasswordFormSection() {
        return (
            <Modal animationType='slide' visible={this.state.forgotPasswordFormOpened}>
                <ForgotPassword />
                <TouchableOpacity style={styles.alreadyHaveAccountButton} onPress={this.closeForgotPasswordForm}>
                    <Text style={styles.alreadyHaveAccountButtonLabel}>Cancel</Text>
                </TouchableOpacity>
            </Modal>
        )
    }

    openForgotPasswordForm() {
        this.setState({ forgotPasswordFormOpened: true });
    }

    closeForgotPasswordForm() {
        this.setState({ forgotPasswordFormOpened: false });
    }

    newAccountSection() {
        return (
            <View style={styles.newAccountContainer}>
                <TouchableOpacity style={styles.newAccountButton} onPress={this.openNewAccountForm}>
                    <Text style={styles.newAccountLabel}>Create New Account</Text>
                </TouchableOpacity>
            </View>
        )
    }

    newAccountFormSection() {
        return (
            <Modal animationType='slide' visible={this.state.newAccountFormOpened}>
                <NewAccount onSuccess={[((account) => this.closeNewAccountForm()),
                ((account) => this.fillLoginCredentials(account))]} />
                <TouchableOpacity style={styles.alreadyHaveAccountButton} onPress={this.closeNewAccountForm}>
                    <Text style={styles.alreadyHaveAccountButtonLabel}>Already have an account?</Text>
                </TouchableOpacity>
            </Modal>
        )
    }

    fillLoginCredentials(account) {
        this.setState({ email: account.email, password: account.password });
    }

    openNewAccountForm() {
        this.setState({ newAccountFormOpened: true });
    }

    closeNewAccountForm() {
        this.setState({ newAccountFormOpened: false });
    }
}
