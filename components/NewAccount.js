import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, KeyboardAvoidingView } from 'react-native';

import styles from './NewAccountStyles';

import Account from '../domain/Account';
import SaveAccountService from '../services/SaveAccountService';

export default class NewAccount extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    constructor(props) {
        super(props);
        this._saveAccountService = new SaveAccountService();
        this._onSuccess = this.props.onSuccess || [];
        this._saveAccount = this._saveAccount.bind(this);
        this._createAccount = this._createAccount.bind(this);
        this._notifyListeners = this._notifyListeners.bind(this);
    }

    render() {
        return this._newAccountScreen();
    }

    _newAccountScreen() {
        return (
            <KeyboardAvoidingView style={styles.mainContainer} behavior='padding'>
                {this._logoSection()}
                {this._newAccountSection()}
            </KeyboardAvoidingView>
        )
    }

    _logoSection() {
        return (
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo.png')} />
            </View>
        )
    }

    _newAccountSection() {
        return (
            <View style={styles.newAccountContainer}>
                <TextInput style={styles.newAccountInput} placeholder='First name' value={this.state.firstName} onChangeText={(firstName) => this.setState({ firstName })} />
                <TextInput style={styles.newAccountInput} placeholder='Last name' value={this.state.lastName} onChangeText={(lastName) => this.setState({ lastName })} />
                <TextInput style={styles.newAccountInput} placeholder='E-mail' value={this.state.email} onChangeText={(email) => this.setState({ email })} />
                <TextInput style={styles.newAccountInput} placeholder='Password' value={this.state.password} onChangeText={(password) => this.setState({ password })} secureTextEntry />
                <TouchableOpacity style={styles.saveAccountButton} onPress={this._saveAccount}>
                    <Text style={styles.saveAccountLabel}>Save</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _saveAccount() {
        try {
            const account = this._createAccount();
            this._saveAccountService.save(account);
            this._cleanAccountForm();
            this._notifyListeners(account);
            Alert.alert('New Account', 'Account saved successfully!');
        } catch (error) {
            Alert.alert('New Account', error);
        }
    }

    _createAccount() {
        const firstName = this.state.firstName;
        const lastName = this.state.lastName;
        const email = this.state.email;
        const password = this.state.password;
        return new Account(firstName, lastName, email, password, []);
    }

    _cleanAccountForm() {
        const firstName = '';
        const lastName = '';
        const email = '';
        const password = '';
        this.setState({ firstName, lastName, email, password });
    }

    _notifyListeners(account) {
        this._onSuccess.forEach(onSuccess => onSuccess(account));
    }
}
