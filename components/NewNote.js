import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, Image, KeyboardAvoidingView } from 'react-native';

import SessionStorage from '../services/SessionStorage';

import Note from '../domain/Note';

import styles from './NewNoteStyles';

export default class NewNote extends React.Component {

    state = {
        note: {
            title: '',
            note: ''
        }
    }

    constructor(props) {
        super(props);
        this._onSuccess = this.props.onSuccess || [];
        this._saveNote = this._saveNote.bind(this);
        this._createNote = this._createNote.bind(this);
        this._cleanNoteForm = this._cleanNoteForm.bind(this);
        this._currentAccount = this._currentAccount.bind(this);
        this._notifyListeners = this._notifyListeners.bind(this);
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.mainContainer} behavior='padding'>
                <View style={styles.logoContainer}>
                    <Image source={require('../assets/logo.png')} />
                </View>
                <TouchableWithoutFeedback accessible={false} onPress={() => Keyboard.dismiss()}>
                    <View style={styles.newNoteContainer}>
                        <TextInput style={styles.newNoteTitle} value={this.state.note.title} placeholder='Title' onChangeText={(title) => this.setState({ note: { ...this.state.note, title } })} />
                        <TextInput style={styles.newNoteInput} value={this.state.note.note} placeholder='Type your note here' onChangeText={(note) => this.setState({ note: { ...this.state.note, note } })} multiline={true} numberOfLines={5} />
                        <TouchableOpacity style={styles.saveNoteButton} onPress={this._saveNote}>
                            <Text style={styles.saveNoteButtonLabel}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }

    _saveNote() {
        try {
            const note = this._createNote();
            const account = this._currentAccount();
            account.add(note);
            this._cleanNoteForm();
            this._notifyListeners(note);
            Alert.alert('New Note', 'Note saved successfully!');
        } catch (error) {
            Alert.alert('New Note', error);
        }
    }

    _createNote() {
        const title = this.state.note.title;
        const note = this.state.note.note;
        return new Note(title, note);
    }

    _cleanNoteForm() {
        const title = '';
        const note = '';
        this.setState({ note: { title, note } });
    }

    _currentAccount() {
        const loggedAccount = SessionStorage.getLoggedAccount();
        return loggedAccount.account;
    }

    _notifyListeners(note) {
        this._onSuccess.forEach(onSuccess => onSuccess(note));
    }
}
