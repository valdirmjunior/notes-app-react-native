import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import styles from './ForgotPasswordStyles';

export default class ForgotPassword extends React.Component {

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logoImage} source={require('../assets/logo.png')} />
                </View>
                <View style={styles.forgotPasswordContainer}>
                    <TextInput style={styles.emailInput} placeholder='E-mail' />
                    <TouchableOpacity style={styles.sentEmailButton} onPress={this.sentEmail}>
                        <Text style={styles.sentEmailLabel}>Sent</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    sentEmail() {
        Alert.alert('Forgot Password', 'A link has been sent for your e-mail.');
    }
}
