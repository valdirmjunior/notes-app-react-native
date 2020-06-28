import React from 'react';
import { View, Text, TouchableOpacity, Modal, StatusBar } from 'react-native';
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
        const notes = this._currentAccount.notes;
        return (
            <View style={Styles.mainContainer}>
                <StatusBar hidden />
                <NotesList notes={notes} />
                <View style={Styles.newNoteContainer}>
                    <TouchableOpacity style={Styles.newNoteButton} onPress={this._openNewNoteForm}>
                        <Text style={Styles.newNoteButtonLabel}>New Note</Text>
                    </TouchableOpacity>
                </View>
                <Modal animationType='slide' visible={this.state.newNoteFormOpened}>
                    <NewNote />
                    <TouchableOpacity style={Styles.cancelNewNoteButton} onPress={this._closeNewNoteForm}>
                        <Text style={Styles.cancelNewNoteButtonLabel}>Cancel</Text>
                    </TouchableOpacity>
                </Modal>
            </View>
        )
    }

    _openNewNoteForm = () => {
        this.setState({ newNoteFormOpened: true });
    }

    _closeNewNoteForm = () => {
        this.setState({ newNoteFormOpened: false });
    }
}

