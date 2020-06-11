import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, Image, KeyboardAvoidingView } from 'react-native';
import SessionStorage from '../services/SessionStorage';
import Note from '../domain/Note';
import Styles from './NewNoteStyles';

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
        this._notifyListeners = this._notifyListeners.bind(this);
        this._currentAccount = SessionStorage.getLoggedAccount();
    }

    render() {
        return (
            <KeyboardAvoidingView style={Styles.mainContainer} behavior='padding'>
                <View style={Styles.logoContainer}>
                    <Image source={require('../assets/logo.png')} />
                </View>
                <TouchableWithoutFeedback accessible={false} onPress={() => Keyboard.dismiss()}>
                    <View style={Styles.newNoteContainer}>
                        <TextInput style={Styles.newNoteTitle} value={this.state.note.title} placeholder='Title' onChangeText={(title) => this.setState({ note: { ...this.state.note, title } })} />
                        <TextInput style={Styles.newNoteInput} value={this.state.note.note} placeholder='Type your note here' onChangeText={(note) => this.setState({ note: { ...this.state.note, note } })} multiline={true} numberOfLines={5} />
                        <TouchableOpacity style={Styles.saveNoteButton} onPress={this._saveNote}>
                            <Text style={Styles.saveNoteButtonLabel}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }

    _saveNote() {
        try {
            const note = this._createNote();
            this._currentAccount.add(note);
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

    _notifyListeners(note) {
        this._onSuccess.forEach(onSuccess => onSuccess(note));
    }
}
