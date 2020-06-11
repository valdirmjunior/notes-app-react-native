import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import Styles from './NotesStyles';
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
        this._currentAccount = SessionStorage.getLoggedAccount();
    }

    render() {
        return (
            <View style={Styles.mainContainer}>
                {this._notesSection()}
                {this._newNoteSection()}
                {this._newNoteFormSection()}
            </View>
        )
    }

    _notesSection() {
        const notes = this._currentAccount.notes;
        return <NotesList notes={notes} />
    }

    _newNoteSection() {
        return (
            <View style={Styles.newNoteContainer}>
                <TouchableOpacity style={Styles.newNoteButton} onPress={this._openNewNoteForm}>
                    <Text style={Styles.newNoteButtonLabel}>New Note</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _newNoteFormSection() {
        return (
            <Modal animationType='slide' visible={this.state.newNoteFormOpened}>
                <NewNote />
                <TouchableOpacity style={Styles.cancelNewNoteButton} onPress={this._closeNewNoteForm}>
                    <Text style={Styles.cancelNewNoteButtonLabel}>Cancel</Text>
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
}

