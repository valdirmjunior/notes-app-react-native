import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, Modal, Button } from 'react-native';
import styles from './LoginStyles';
import NewAccount from './NewAccount';

export default class Login extends React.Component {

    state = {
        visible: false
    };

    constructor(props) {
        super(props);
        this.openNewAccountForm = this.openNewAccountForm.bind(this);
        this.closeNewAccountForm = this.closeNewAccountForm.bind(this);
    }

    render() {
        return this.loginScreen()
    }

    loginScreen() {
        return (
            <View style={styles.mainContainer}>
                {this.logoSection()}
                {this.loginSection()}
                {this.forgotPasswordSection()}
                {this.forgotPasswordOrNewAccountSeparator()}
                {this.newAccountSection()}
                {this.newAccountFormSection()}
            </View>
        )
    }

    logoSection() {
        return (
            <View style={styles.logoContainer}>
                <Image style={styles.logoImage} source={require('../assets/logo.png')} />
            </View>
        )
    }

    loginSection() {
        return (
            <View style={styles.loginContainer}>
                <TextInput style={styles.loginInput} placeholder='Username' />
                <TextInput style={styles.loginInput} placeholder='Password' secureTextEntry />
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
                <TouchableOpacity>
                    <Text style={styles.forgotPasswordLabel}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        )
    }

    newAccountSection() {
        return (
            <View  style={styles.newAccountContainer}>
                <TouchableOpacity style={styles.newAccountButton} onPress={this.openNewAccountForm}>
                    <Text style={styles.newAccountLabel}>Create New Account</Text>
                </TouchableOpacity>
            </View>
        )
    }

    newAccountFormSection() {
        return (
            <Modal animationType='slide' visible={this.state.visible}>
                <NewAccount />
                <TouchableOpacity style={styles.alreadyHaveAccountButton} onPress={this.closeNewAccountForm}>
                    <Text style={styles.alreadyHaveAccountButtonLabel}>Already have an account?</Text>
                </TouchableOpacity>
            </Modal>
        )
    }

    openNewAccountForm() {
        this.setState({ visible: true });
    }

    closeNewAccountForm() {
        this.setState({ visible: false });
    }
}
