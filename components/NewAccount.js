import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, KeyboardAvoidingView } from 'react-native';

import styles from './NewAccountStyles';

import Account from '../services/new_account/Account';
import Accounts from '../services/new_account/Accounts';

export default class NewAccount extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    constructor(props) {
        super(props);
        this.accounts = new Accounts();
        this.onSuccess = this.props.onSuccess || [];
        this.saveAccount = this.saveAccount.bind(this);
        this.createAccount = this.createAccount.bind(this);
        this.notifyListeners = this.notifyListeners.bind(this);
    }

    render() {
        return this.newAccountScreen();
    }

    newAccountScreen() {
        return (
            <KeyboardAvoidingView style={styles.mainContainer} behavior='padding'>
                {this.logoSection()}
                {this.newAccountSection()}
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

    newAccountSection() {
        return (
            <View style={styles.newAccountContainer}>
                <TextInput style={styles.newAccountInput} placeholder='First name' value={this.state.firstName} onChangeText={(firstName) => this.setState({ firstName })} />
                <TextInput style={styles.newAccountInput} placeholder='Last name' value={this.state.lastName} onChangeText={(lastName) => this.setState({ lastName })} />
                <TextInput style={styles.newAccountInput} placeholder='E-mail' value={this.state.email} onChangeText={(email) => this.setState({ email })} />
                <TextInput style={styles.newAccountInput} placeholder='Password' value={this.state.password} onChangeText={(password) => this.setState({ password })} secureTextEntry />
                <TouchableOpacity style={styles.saveAccountButton} onPress={this.saveAccount}>
                    <Text style={styles.saveAccountLabel}>Save</Text>
                </TouchableOpacity>
            </View>
        )
    }

    saveAccount() {
        try {
            const account = this.createAccount();
            this.accounts.save(account);
            this.cleanAccountForm();
            this.notifyListeners(account);
            this.alert('Account saved successfully!');
        } catch (error) {
            this.alert(error);
        }
    }

    createAccount() {
        const firstName = this.state.firstName;
        const lastName = this.state.lastName;
        const email = this.state.email;
        const password = this.state.password;
        return new Account(firstName, lastName, email, password);
    }

    cleanAccountForm() {
        const firstName = '';
        const lastName = '';
        const email = '';
        const password = '';
        this.setState({ firstName, lastName, email, password });
    }

    notifyListeners(account) {
        this.onSuccess.forEach(onSuccess => onSuccess(account));
    }

    alert(message) {
        Alert.alert('New Account', message);
    }
}
