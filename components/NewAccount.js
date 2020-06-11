import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Styles from './NewAccountStyles';
import NewAccountController from '../controllers/NewAccountController';

export default class NewAccount extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    constructor(props) {
        super(props);
        this._controller = new NewAccountController(this);
    }

    render() {
        return this._newAccountScreen();
    }

    _newAccountScreen() {
        return (
            <KeyboardAvoidingView style={Styles.mainContainer} behavior='padding'>
                {this._logoSection()}
                {this._newAccountSection()}
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

    _newAccountSection() {
        return (
            <TouchableWithoutFeedback accessible={false} onPress={() => Keyboard.dismiss()}>
                <View style={Styles.newAccountContainer}>
                    <TextInput style={Styles.newAccountInput} placeholder='First name' value={this.state.firstName} onChangeText={this._handleFirstNameInput} />
                    <TextInput style={Styles.newAccountInput} placeholder='Last name' value={this.state.lastName} onChangeText={this._handleLastName} />
                    <TextInput style={Styles.newAccountInput} placeholder='E-mail' value={this.state.email} onChangeText={this._handleEmailInput} />
                    <TextInput style={Styles.newAccountInput} placeholder='Password' value={this.state.password} onChangeText={this._handlePasswordInput} secureTextEntry />
                    <TouchableOpacity style={Styles.saveAccountButton} onPress={this._saveAccount}>
                        <Text style={Styles.saveAccountLabel}>Save</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    _saveAccount = () => {
        this._controller.saveAccount();
    }

    _handleLastName = (lastName) => {
        this.setState({ lastName });
    }

    _handleFirstNameInput = (firstName) => {
        this.setState({ firstName });
    }

    _handleEmailInput = (email) => {
        this.setState({ email });
    }

    _handlePasswordInput = (password) => {
        this.setState({ password });
    }
}
