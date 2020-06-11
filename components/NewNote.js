import React from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Image, KeyboardAvoidingView } from 'react-native';
import Styles from './NewNoteStyles';
import NewNoteController from '../controllers/NewNoteController';

export default class NewNote extends React.Component {

    state = {
        note: {
            title: '',
            note: ''
        }
    }

    constructor(props) {
        super(props);
        this._controller = new NewNoteController(this);
    }

    render() {
        return (
            <KeyboardAvoidingView style={Styles.mainContainer} behavior='padding'>
                <View style={Styles.logoContainer}>
                    <Image source={require('../assets/logo.png')} />
                </View>
                <TouchableWithoutFeedback accessible={false} onPress={() => Keyboard.dismiss()}>
                    <View style={Styles.newNoteContainer}>
                        <TextInput style={Styles.newNoteTitle} value={this.state.note.title} placeholder='Title' onChangeText={this._handleTitleInputChanges} />
                        <TextInput style={Styles.newNoteInput} value={this.state.note.note} placeholder='Type your note here' onChangeText={this._handleNoteInputChanges} multiline={true} numberOfLines={5} />
                        <TouchableOpacity style={Styles.saveNoteButton} onPress={this._saveNote}>
                            <Text style={Styles.saveNoteButtonLabel}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }

    _handleTitleInputChanges = (title) => {
        this.setState({ note: { ...this.state.note, title } });
    }

    _handleNoteInputChanges = (note) => {
        this.setState({ note: { ...this.state.note, note } });
    }

    _saveNote = () => {
        this._controller.saveNote();
    }
}
