import React from 'react';
import { FlatList, SafeAreaView, View, Image, Text } from 'react-native';
import Styles from './NotesListStyles';
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
            <View style={Styles.notesContainer}>
                <SafeAreaView>
                    <FlatList
                        data={notes}
                        renderItem={note => <NoteItem note={note.item} onDelete={[refreshList]} />}
                        keyExtractor={(note) => note.id.toString()} />
                </SafeAreaView>
            </View>
        )
    }

    _noNotesContainer() {
        return (
            <View style={Styles.noNotesContainer}>
                <Image source={require('../assets/logo.png')} />
                <Text style={Styles.noNotesTitle}>No notes yet!</Text>
                <Text style={Styles.noNotesInfo}>When you create notes, they'll appear here.</Text>
            </View>
        )
    }
}

