import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import styles from './ForgotPasswordStyles';

class FindAccount extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.mainContainer}>
                <View style={styles.logoContainer}>
                    <Image source={require('../assets/logo.png')} />
                </View>
                <View style={styles.findAccountContainer}>
                    <Text style={styles.findAccountTitle}>First, let's find your account</Text>
                    <TextInput style={styles.emailInput} placeholder='Enter your e-mail' />
                    <TouchableOpacity style={styles.findAccountButton} onPress={() => this.props.navigation.navigate('EnterCode')}>
                        <Text style={styles.findAccountLabel}>Find Account</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

class EnterCode extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.mainContainer}>
                <View style={styles.logoContainer}>
                    <Image source={require('../assets/logo.png')} />
                </View>
                <View style={styles.findAccountContainer}>
                    <Text style={styles.findAccountTitle}>We just sent you a verification code to your e-mail</Text>
                    <TextInput style={styles.emailInput} placeholder='Enter code' />
                    <TouchableOpacity style={styles.findAccountButton} onPress={() => this.props.navigation.navigate('TypeNewPassword')}>
                        <Text style={styles.findAccountLabel}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

class TypeNewPassword extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.mainContainer}>
                <View style={styles.logoContainer}>
                    <Image source={require('../assets/logo.png')} />
                </View>
                <View style={styles.findAccountContainer}>
                    <Text style={styles.findAccountTitle}>Finally, choose a new password</Text>
                    <TextInput style={styles.emailInput} placeholder='New password' secureTextEntry />
                    <TextInput style={styles.emailInput} placeholder='Retype new password' secureTextEntry />
                    <TouchableOpacity style={styles.findAccountButton}>
                        <Text style={styles.findAccountLabel}>Submit</Text>
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


