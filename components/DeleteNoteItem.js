import React from 'react';
import { Image, Alert, TouchableOpacity } from 'react-native';

import styles from './DeleteNoteItemStyles';

import SessionStorage from '../services/SessionStorage';

export default class DeleteNoteItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { note: this.props.note }
        this._onDelete = this.props.onDelete || [];
        this._deleteNote = this._deleteNote.bind(this);
        this._notifyListeners = this._notifyListeners.bind(this);
    }

    render() {
        return (
            <TouchableOpacity onPress={this._deleteNote}>
                <Image style={styles.deleteIcon} source={require('../assets/delete-icon.png')} />
            </TouchableOpacity>
        )
    }

    _deleteNote() {
        try {
            const note = this.state.note;
            const account = this._currentAccount();
            account.delete(note);
            this._notifyListeners(note);
            this._alert('Note deleted successfully.');
        } catch (error) {
            this._alert(error);
        }
    }

    _currentAccount() {
        const loggedAccount = SessionStorage.getLoggedAccount();
        return loggedAccount.account;
    }

    _notifyListeners(note) {
        this._onDelete.forEach(onDelete => onDelete(note));
    }

    _alert(message) {
        Alert.alert('Delete Note', message);
    }
}
