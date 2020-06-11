import React from 'react';
import { Image, Alert, TouchableOpacity } from 'react-native';
import Styles from './DeleteNoteItemStyles';
import SessionStorage from '../services/SessionStorage';

export default class DeleteNoteItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { note: this.props.note }
        this._onDelete = this.props.onDelete || [];
        this._deleteNote = this._deleteNote.bind(this);
        this._notifyListeners = this._notifyListeners.bind(this);
        this._currentAccount = SessionStorage.getLoggedAccount();
    }

    render() {
        return (
            <TouchableOpacity onPress={this._deleteNote}>
                <Image style={Styles.deleteIcon} source={require('../assets/delete-icon.png')} />
            </TouchableOpacity>
        )
    }

    _deleteNote() {
        try {
            const yesButton = { text: 'Yes', onPress: () => { this._confirmDeletion() } };
            const noButton = { text: 'No', onPress: () => { } };
            Alert.alert('Delete Note', 'Do you want to delete this note?', [yesButton, noButton]);
        } catch (error) {
            Alert.alert('Delete Note', error);
        }
    }

    _confirmDeletion() {
        const note = this.state.note;
        this._currentAccount.delete(note);
        this._notifyListeners(note);
        Alert.alert('Delete Note', 'Note deleted successfully.');
    }

    _notifyListeners(note) {
        this._onDelete.forEach(onDelete => onDelete(note));
    }
}
