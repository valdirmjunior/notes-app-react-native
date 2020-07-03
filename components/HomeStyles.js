import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({

    mainContainer: {
        flex: 1
    },

    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },

    logOutButton: {
        width: '100%',
        paddingVertical: 12,
        paddingHorizontal: 16
    },

    logOutButtonLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'grey'
    },

    helloLabel: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'grey'
    }
})

export default Styles;