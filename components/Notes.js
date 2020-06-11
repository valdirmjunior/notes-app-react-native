import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

import styles from './NotesStyles';

import NewNote from './NewNote';
import NotesList from './NotesList';

import SessionStorage from '../services/SessionStorage';

export default class Notes extends React.Component {

    state = {
        newNoteFormOpened: false
    };

    constructor(props) {
        super(props);
        this._openNewNoteForm = this._openNewNoteForm.bind(this);
        this._closeNewNoteForm = this._closeNewNoteForm.bind(this);
        this._currentAccount = this._currentAccount.bind(this);
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                {this._notesSection()}
                {this._newNoteSection()}
                {this._newNoteFormSection()}
            </View>
        )
    }

    _notesSection() {
        const account = this._currentAccount();
        const notes = account.notes;
        return <NotesList notes={notes} />
    }

    _newNoteSection() {
        return (
            <View style={styles.newNoteContainer}>
                <TouchableOpacity style={styles.newNoteButton} onPress={this._openNewNoteForm}>
                    <Text style={styles.newNoteButtonLabel}>New Note</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _newNoteFormSection() {
        return (
            <Modal animationType='slide' visible={this.state.newNoteFormOpened}>
                <NewNote />
                <TouchableOpacity style={styles.cancelNewNoteButton} onPress={this._closeNewNoteForm}>
                    <Text style={styles.cancelNewNoteButtonLabel}>Cancel</Text>
                </TouchableOpacity>
            </Modal>
        )
    }

    _openNewNoteForm() {
        this.setState({ newNoteFormOpened: true });
    }

    _closeNewNoteForm() {
        this.setState({ newNoteFormOpened: false });
    }

    _currentAccount() {
        const loggedAccount = SessionStorage.getLoggedAccount();
        return loggedAccount.account;
    }
}

