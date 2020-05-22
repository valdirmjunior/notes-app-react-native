import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import styles from './ForgotPasswordStyles';

class FindAccount extends React.Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.logoContainer}>
                    <Image source={require('../assets/logo.png')} />
                </View>
                <View style={styles.findAccountContainer}>
                    <Text style={styles.findAccountTitle}>First, let's find your account</Text>
                    <TextInput style={styles.emailInput} placeholder='Enter your e-mail' />
                    <TouchableOpacity style={styles.findAccountButton}>
                        <Text style={styles.findAccountLabel}>Find Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

class EnterCode extends React.Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.logoContainer}>
                    <Image source={require('../assets/logo.png')} />
                </View>
                <View style={styles.findAccountContainer}>
                    <Text style={styles.findAccountTitle}>We just sent you a verification code to your e-mail</Text>
                    <TextInput style={styles.emailInput} placeholder='Enter code' />
                    <TouchableOpacity style={styles.findAccountButton}>
                        <Text style={styles.findAccountLabel}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

 
const stack = createStackNavigator({
    FindAccount: FindAccount,
    EnterCode: EnterCode
},{
    initialRouteName: 'FindAccount'
});
export default createAppContainer(stack);
