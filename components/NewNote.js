import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, Image, KeyboardAvoidingView } from 'react-native';

import styles from './NewNoteStyles';

export default class NewNote extends React.Component {

    render() {
        return (
            <KeyboardAvoidingView style={styles.mainContainer} behavior='padding'>
                <View style={styles.logoContainer}>
                    <Image source={require('../assets/logo.png')} />
                </View>
                <TouchableWithoutFeedback accessible={false} onPress={() => Keyboard.dismiss()}>
                    <View style={styles.newNoteContainer}>
                        <TextInput style={styles.newNoteTitle} placeholder='Title' />
                        <TextInput style={styles.newNoteInput} placeholder='Type your note here' multiline={true} numberOfLines={5} />
                        <TouchableOpacity style={styles.saveNoteButton} onPress={this.saveNote}>
                            <Text style={styles.saveNoteButtonLabel}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }

    saveNote() {
        Alert.alert('New Note', 'Note saved successfully!');
    }
}
