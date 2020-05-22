import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import styles from './NewAccountStyles';

export default class NewAccount extends React.Component {

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logoImage} source={require('../assets/logo.png')} />
                </View>
                <View style={styles.newAccountContainer}>
                    <TextInput style={styles.newAccountInput} placeholder='First name' />
                    <TextInput style={styles.newAccountInput} placeholder='Last name' />
                    <TextInput style={styles.newAccountInput} placeholder='E-mail' />
                    <TextInput style={styles.newAccountInput} placeholder='Password' secureTextEntry />
                    <TouchableOpacity style={styles.saveAccountButton} onPress={this.accountIsSavedAlert}>
                        <Text style={styles.saveAccountLabel}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    accountIsSavedAlert() {
        Alert.alert('New Account', 'Account saved successfully!');
    }
}
