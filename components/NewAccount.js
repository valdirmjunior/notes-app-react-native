import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Styles from './NewAccountStyles';
import NewAccountController from '../controllers/NewAccountController';

export default class NewAccount extends React.Component {

    state = {
        account: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
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
            <TouchableWithoutFeedback accessible={false} onPress={() => Keyboard.dismiss()}>
                <KeyboardAvoidingView style={Styles.mainContainer} behavior='padding'>
                    <View style={Styles.logoContainer}>
                        <Image source={require('../assets/logo.png')} />
                    </View>
                    <View style={Styles.newAccountContainer}>
                        <TextInput style={Styles.newAccountInput} placeholder='Nome' value={this.state.account.firstName} onChangeText={this._handleFirstNameInput} />
                        <TextInput style={Styles.newAccountInput} placeholder='Sobrenome' value={this.state.account.lastName} onChangeText={this._handleLastName} />
                        <TextInput style={Styles.newAccountInput} placeholder='E-mail' value={this.state.account.email} onChangeText={this._handleEmailInput} />
                        <TextInput style={Styles.newAccountInput} placeholder='Senha' value={this.state.account.password} onChangeText={this._handlePasswordInput} secureTextEntry />
                        <TouchableOpacity style={Styles.saveAccountButton} onPress={this._saveAccount}>
                            <Text style={Styles.saveAccountLabel}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        )
    }

    _saveAccount = () => {
        this._controller.saveAccount();
    }

    _handleLastName = (lastName) => {
        this.setState({ account: { ...this.state.account, lastName } });
    }

    _handleFirstNameInput = (firstName) => {
        this.setState({ account: { ...this.state.account, firstName } });
    }

    _handleEmailInput = (email) => {
        this.setState({ account: { ...this.state.account, email } });
    }

    _handlePasswordInput = (password) => {
        this.setState({ account: { ...this.state.account, password } });
    }
}
