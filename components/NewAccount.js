import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './NewAccountStyles';

export default class NewAccount extends React.Component {

    render() {
        return (
            <View style={styles.mainContainer}>
                <TextInput style={styles.newAccountInput} placeholder='First name' />
                <TextInput style={styles.newAccountInput} placeholder='Last name' />
                <TextInput style={styles.newAccountInput} placeholder='Username' />
                <TextInput style={styles.newAccountInput} placeholder='Password' secureTextEntry />
                <TouchableOpacity style={styles.saveAccountButton}>
                    <Text style={styles.saveAccountLabel}>Save</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
