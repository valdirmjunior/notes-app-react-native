import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, TouchableWithoutFeedback, Keyboard, Image, KeyboardAvoidingView } from 'react-native';

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

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    logoContainer: {
        width: '100%',
        height: '35%',
        backgroundColor: 'rgb(247, 247, 247)',
        alignItems: 'center',
        justifyContent: 'center'
    },

    newNoteContainer: {
        width: '100%',
        height: '65%',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10
    },

    newNoteTitle: {
        fontSize: 15,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 3,
        marginTop: 5,
        padding: 15,
        borderColor: 'rgb(216, 222, 226)'
    },

    newNoteInput: {
        fontSize: 15,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 3,
        marginTop: 5,
        padding: 15,
        borderColor: 'rgb(216, 222, 226)',
        height: 150
    },

    saveNoteButton: {
        borderStyle: 'solid',
        borderRadius: 7,
        marginTop: 5,
        padding: 13,
        backgroundColor: 'rgb(250, 218, 128)'
    },

    saveNoteButtonLabel: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'grey',
        fontSize: 17
    },
})
