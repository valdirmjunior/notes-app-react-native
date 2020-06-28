import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({

    notesContainer: {
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

    noNotesContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10
    },

    noNotesTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 5,
        color: 'grey'
    },

    noNotesInfo: {
        fontSize: 17,
        textAlign: 'center',
        marginTop: 5,
        color: 'grey'
    },

    viewNoteButton: {
        width: '100%',
        padding: 13,
        backgroundColor: 'rgb(247, 247, 247)'
    },

    viewNoteButtonLabel: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'rgb(244, 182, 6)',
        fontSize: 17
    },

    searchTextInput: {
        width: '100%',
        padding: 13,
        borderRadius: 7,
        backgroundColor: 'rgb(244, 244, 244)',
        fontSize: 17
    },

    noNotesFound: {
        fontSize: 20,
        textAlign: 'center',
        color: 'rgb(244, 182, 6)',
        fontWeight: 'bold'
    },
})

export default Styles;