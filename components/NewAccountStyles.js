import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
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

    newAccountContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10
    },

    newAccountInput: {
        fontSize: 15,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 3,
        marginTop: 5,
        padding: 15,
        borderColor: 'rgb(216, 222, 226)'
    },

    saveAccountButton: {
        borderStyle: 'solid',
        borderRadius: 7,
        marginTop: 5,
        padding: 13,
        backgroundColor: 'rgb(250, 218, 128)'
    },

    saveAccountLabel: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'grey',
        fontSize: 17
    },
})

export default styles;