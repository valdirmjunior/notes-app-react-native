import React from 'react';
import { FlatList, SafeAreaView, View, Image, Text, Modal, TouchableOpacity } from 'react-native';
import Styles from './NotesListStyles';
import NoteItem from './NoteItem';
import ViewNote from './ViewNote';

export default class NotesList extends React.Component {

    state = {
        viewingNote: null,
        viewNoteFormOpened: false
    }

    constructor(props) {
        super(props);
    }

    render() {
        const notes = this.props.notes;
        return (
            notes.length > 0 ?
                this._notesContainer() :
                this._noNotesContainer()
        )
    }

    _notesContainer() {
        const notes = this.props.notes;
        const refreshList = (note) => this.forceUpdate();
        return (
            <View style={Styles.notesContainer}>
                <SafeAreaView>
                    <FlatList
                        data={notes}
                        renderItem={note => <NoteItem note={note.item} onDelete={[refreshList]} viewItem={this._openViewNotForm} />}
                        keyExtractor={(note) => note.id.toString()} />
                </SafeAreaView>
                <Modal animationType='slide' visible={this.state.viewNoteFormOpened}>
                    <ViewNote note={this.state.viewingNote} />
                    <TouchableOpacity style={Styles.viewNoteButton} onPress={this._closeViewNoteForm}>
                        <Text style={Styles.viewNoteButtonLabel}>Close</Text>
                    </TouchableOpacity>
                </Modal>
            </View>
        )
    }

    _openViewNotForm = (note) => {
        this.setState({ viewNoteFormOpened: true, viewingNote: note })
    }

    _closeViewNoteForm = () => {
        this.setState({ viewNoteFormOpened: false })
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

