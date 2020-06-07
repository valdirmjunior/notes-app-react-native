import React from 'react';
import { FlatList, SafeAreaView, View, Image, Text } from 'react-native';

import styles from './NotesListStyles';

import NoteItem from './NoteItem';

export default class NotesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { notes: this.props.notes }
    }

    render() {
        const notes = this.state.notes;
        return (
            notes.length > 0 ?
                this._notesContainer() :
                this._noNotesContainer()
        )
    }

    _notesContainer() {
        const notes = this.state.notes;
        const refreshList = (note) => this.forceUpdate();
        return (
            <View style={styles.notesContainer}>
                <SafeAreaView>
                    <FlatList
                        data={notes}
                        renderItem={note => <NoteItem note={note.item} onDelete={[refreshList]} />}
                        keyExtractor={(note, index) => index.toString()} />
                </SafeAreaView>
            </View>
        )
    }

    _noNotesContainer() {
        return (
            <View style={styles.noNotesContainer}>
                <Image source={require('../assets/logo.png')} />
                <Text style={styles.noNotesTitle}>No notes yet!</Text>
                <Text style={styles.noNotesInfo}>When you create notes, they'll appear here.</Text>
            </View>
        )
    }
}

