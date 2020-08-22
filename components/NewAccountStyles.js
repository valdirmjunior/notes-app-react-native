import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    logoContainer: {
        width: '100%',
        height: '35%',
        backgroundColor: 'rgb(235, 235, 235)',
        alignItems: 'center',
        justifyContent: 'center'
    },

    newAccountContainer: {
        width: '100%',
        height: '65%',
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
        borderColor: 'rgb(215, 215, 215)'
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

export default Styles;