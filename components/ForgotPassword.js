import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Styles from './ForgotPasswordStyles';

class FindAccount extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style={Styles.mainContainer}>
                <View style={Styles.logoContainer}>
                    <Image source={require('../assets/logo.png')} />
                </View>
                <View style={Styles.findAccountContainer}>
                    <Text style={Styles.findAccountTitle}>First, let's find your account</Text>
                    <TextInput style={Styles.emailInput} placeholder='Enter your e-mail' />
                    <TouchableOpacity style={Styles.findAccountButton} onPress={() => this.props.navigation.navigate('EnterCode')}>
                        <Text style={Styles.findAccountLabel}>Find Account</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

class EnterCode extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style={Styles.mainContainer}>
                <View style={Styles.logoContainer}>
                    <Image source={require('../assets/logo.png')} />
                </View>
                <View style={Styles.findAccountContainer}>
                    <Text style={Styles.findAccountTitle}>We just sent you a verification code to your e-mail</Text>
                    <TextInput style={Styles.emailInput} placeholder='Enter code' />
                    <TouchableOpacity style={Styles.findAccountButton} onPress={() => this.props.navigation.navigate('TypeNewPassword')}>
                        <Text style={Styles.findAccountLabel}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

class TypeNewPassword extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style={Styles.mainContainer}>
                <View style={Styles.logoContainer}>
                    <Image source={require('../assets/logo.png')} />
                </View>
                <View style={Styles.findAccountContainer}>
                    <Text style={Styles.findAccountTitle}>Finally, choose a new password</Text>
                    <TextInput style={Styles.emailInput} placeholder='New password' secureTextEntry />
                    <TextInput style={Styles.emailInput} placeholder='Retype new password' secureTextEntry />
                    <TouchableOpacity style={Styles.findAccountButton}>
                        <Text style={Styles.findAccountLabel}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const stackProperties = {
    FindAccount: {
        screen: FindAccount,
        navigationOptions: {
            header: null
        }
    },
    EnterCode: {
        screen: EnterCode,
        navigationOptions: {
            header: null
        }
    },
    TypeNewPassword: {
        screen: TypeNewPassword,
        navigationOptions: {
            header: null
        }
    }
};

const AppStack = createStackNavigator(stackProperties);
const AppContainer = createAppContainer(AppStack);
export default AppContainer;


