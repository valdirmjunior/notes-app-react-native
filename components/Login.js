import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default class Login extends React.Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.logoContainer}>
                    <View>
                        <Image style={styles.logoImage} source={require('../assets/many-notes2.png')} />
                    </View>
                </View>
                <View style={styles.loginContainer}>
                    <TextInput style={styles.loginFields} placeholder='Username' />
                    <TextInput style={styles.loginFields} placeholder='Password' />
                    <TouchableOpacity style={styles.logInButton}>
                        <Text style={styles.logInLabel}>Log In</Text>
                    </TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                    <View style={styles.separatorContainer}>
                        <View style={styles.separatorLine} />
                        <Text style={styles.separatorLabel}>OR</Text>
                        <View style={styles.separatorLine} />
                    </View>
                    <TouchableOpacity style={styles.newAccountButton}>
                        <Text style={styles.newAccountLabel}>Create New Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    logoContainer: {
        width: '100%',
        height: '35%',
        borderStyle: 'solid',
        backgroundColor: 'rgb(247, 247, 247)',
        alignItems: 'center',
        justifyContent: 'center'
    },

    logoImage: {
        width: 100,
        height: 100
    },

    loginContainer: {
        width: '100%',
        height: '100%',
        borderStyle: 'solid',
        backgroundColor: 'white',
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },

    loginFields: {
        fontSize: 15,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 3,
        marginTop: 5,
        padding: 15,
        borderColor: 'rgb(216, 222, 226)'
    },

    logInButton: {
        borderStyle: 'solid',
        borderRadius: 7,
        marginTop: 5,
        padding: 13,
        backgroundColor: 'rgb(254, 239, 160)'
    },

    logInLabel: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'grey',
        fontSize: 17
    },

    forgotPassword: {
        marginTop: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 17,
        color: 'grey'
    },

    separatorContainer: {
        marginTop: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },

    separatorLabel: {
        fontSize: 17,
        color: 'grey',
        fontWeight: 'bold',
        marginLeft: 5,
        marginRight: 5
    },

    separatorLine: {
        borderStyle: 'solid',
        borderColor: 'rgb(247, 247, 247)',
        borderBottomWidth: 2,
        width: '45%'
    },

    newAccountButton: {
        borderStyle: 'solid',
        borderRadius: 7,
        marginTop: 22,
        padding: 13,
        backgroundColor: 'rgb(245, 245, 245)'
    },

    newAccountLabel: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'rgb(228, 193, 0)',
        fontSize: 17
    },
})