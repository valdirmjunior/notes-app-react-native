import React from 'react';
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';

import styles from './NotesStyles';

import NewNote from './NewNote';
import NotesList from './NotesList';

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
        const hasNotes = false;
        return hasNotes ?
            this.notesContainer() :
            this.noNotesContainer();
    }

    notesContainer() {
        const notes = [];
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

