import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({

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

    findAccountTitle: {
        fontSize: 20,
        color: 'grey',
        textAlign: 'center'
    },

    findAccountContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '65%',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10
    },

    emailInput: {
        fontSize: 15,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 3,
        marginTop: 5,
        padding: 15,
        borderColor: 'rgb(216, 222, 226)'
    },

    findAccountButton: {
        borderStyle: 'solid',
        borderRadius: 7,
        marginTop: 5,
        padding: 13,
        backgroundColor: 'rgb(250, 218, 128)'
    },

    findAccountLabel: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'grey',
        fontSize: 17
    },
})

export default Styles;