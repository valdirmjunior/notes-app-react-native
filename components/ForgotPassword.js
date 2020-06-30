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
                    <Text style={Styles.findAccountTitle}>Primeiro, vamos encontrar sua conta</Text>
                    <TextInput style={Styles.emailInput} placeholder='E-mail' />
                    <TouchableOpacity style={Styles.findAccountButton} onPress={() => this.props.navigation.navigate('EnterCode')}>
                        <Text style={Styles.findAccountLabel}>Encontrar Conta</Text>
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
                    <Text style={Styles.findAccountTitle}>Nós enviamos um código de verificação para o seu e-mail</Text>
                    <TextInput style={Styles.emailInput} placeholder='Código de verificação' />
                    <TouchableOpacity style={Styles.findAccountButton} onPress={() => this.props.navigation.navigate('TypeNewPassword')}>
                        <Text style={Styles.findAccountLabel}>Enviar</Text>
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
                    <Text style={Styles.findAccountTitle}>Finalmente, escolha uma nova senha</Text>
                    <TextInput style={Styles.emailInput} placeholder='Nova senha' secureTextEntry />
                    <TextInput style={Styles.emailInput} placeholder='Redigite sua nova senha' secureTextEntry />
                    <TouchableOpacity style={Styles.findAccountButton}>
                        <Text style={Styles.findAccountLabel}>Confirmar</Text>
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


