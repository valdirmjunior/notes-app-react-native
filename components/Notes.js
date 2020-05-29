import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Modal } from 'react-native';

import NewNote from './NewNote';
import NotesList from './NotesList';
import { TextInput } from 'react-native-gesture-handler';

export default class Notes extends React.Component {

    state = {
        newNoteFormOpened: false
    };

    constructor(props) {
        super(props);
        this.openNewNoteForm = this.openNewNoteForm.bind(this);
        this.closeNewNoteForm = this.closeNewNoteForm.bind(this);
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                {this.showNotesContainer()}
                {this.newNoteSection()}
                {this.newNoteFormSection()}
            </View>
        )
    }

    showNotesContainer() {
        const hasNotes = true;
        return hasNotes ?
                this.notesContainer() :
                this.noNotesContainer();
    }

    notesContainer() {
        const notes = [
            {
                id: '1',
                title: 'A.W. Tozer quote'
            },
            {
                id: '2',
                title: 'C.S. Lewis quote'
            }
        ];
        return (
            <View style={styles.notesContainer}>
                <NotesList notes={notes} />
            </View>
        )
    }

    noNotesContainer() {
        return (
            <View style={styles.noNotesContainer}>
                <Image source={require('../assets/logo.png')} />
                <Text style={styles.noNotesTitle}>No notes yet!</Text>
                <Text style={styles.noNotesInfo}>When you create notes, they'll appear here.</Text>
            </View>
        )
    }

    newNoteSection() {
        return (
            <View style={styles.newNoteContainer}>
                <TouchableOpacity style={styles.newNoteButton} onPress={this.openNewNoteForm}>
                    <Text style={styles.newNoteButtonLabel}>New Note</Text>
                </TouchableOpacity>
            </View>
        )
    }

    newNoteFormSection() {
        return (
            <Modal animationType='slide' visible={this.state.newNoteFormOpened}>
                <NewNote />
                <TouchableOpacity style={styles.cancelNewNoteButton} onPress={this.closeNewNoteForm}>
                    <Text style={styles.cancelNewNoteButtonLabel}>Cancel</Text>
                </TouchableOpacity>
            </Modal>
        )
    }

    openNewNoteForm() {
        this.setState({ newNoteFormOpened: true });
    }

    closeNewNoteForm() {
        this.setState({ newNoteFormOpened: false });
    }
}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

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

    newNoteContainer: {
        width: '100%'
    },

    newNoteButton: {
        width: '100%',
        padding: 13,
        backgroundColor: 'rgb(247, 247, 247)'
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
        backgroundColor: 'rgb(247, 247, 247)'
    },

    cancelNewNoteButtonLabel: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'rgb(244, 182, 6)',
        fontSize: 17
    }
})
