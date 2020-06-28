import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({

    /* Main */
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    /* Logo */
    logoContainer: {
        width: '100%',
        height: '36%',
        borderStyle: 'solid',
        backgroundColor: 'rgb(247, 247, 247)',
        alignItems: 'center',
        justifyContent: 'center'
    },

    /* Login info */
    loginContainer: {
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '33%',
        backgroundColor: 'white',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10
    },

    logInInput: {
        fontSize: 15,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 3,
        padding: 15,
        borderColor: 'rgb(216, 222, 226)'
    },

    logInButton: {
        borderStyle: 'solid',
        borderRadius: 7,
        padding: 13,
        backgroundColor: 'rgb(250, 218, 128)'
    },

    logInLabel: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'grey',
        fontSize: 17
    },

    /* Forgot password info */
    forgotPasswordContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '7%',
        borderStyle: 'solid',
    },

    forgotPasswordLabel: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 17,
        color: 'grey'
    },

    /* Forgot password ou new account separator */
    separatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '12%',
        paddingLeft: 10,
        paddingRight: 10,
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
        width: '35%'
    },

    /* New account info */
    newAccountContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        width: '100%',
        height: '12%',
        paddingLeft: 10,
        paddingRight: 10,
    },

    newAccountButton: {
        borderStyle: 'solid',
        borderRadius: 7,
        padding: 13,
        backgroundColor: 'rgb(247, 247, 247)'
    },

    newAccountLabel: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'rgb(244, 182, 6)',
        fontSize: 17
    },

    alreadyHaveAccountButton: {
        width: '100%',
        padding: 13,
        backgroundColor: 'rgb(247, 247, 247)'
    },

    alreadyHaveAccountButtonLabel: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'rgb(244, 182, 6)',
        fontSize: 17
    }
});

export default Styles;