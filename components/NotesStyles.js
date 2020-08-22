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

    newNoteContainer: {
        width: '100%'
    },

    newNoteButton: {
        width: '100%',
        padding: 13,
        backgroundColor: 'rgb(235, 235, 235)'
    },

    newNoteButtonLabel: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'rgb(244, 182, 6)',
        fontSize: 17
    },

    cancelNewNoteButton: {
        width: '100%',
        padding: 13,
        backgroundColor: 'rgb(235, 235, 235)'
    },

    cancelNewNoteButtonLabel: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'rgb(244, 182, 6)',
        fontSize: 17
    }
})

export default Styles;