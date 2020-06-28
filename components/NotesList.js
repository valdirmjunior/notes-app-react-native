import React from 'react';
import { FlatList, SafeAreaView, View, Image, Text, Modal, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Styles from './NotesListStyles';
import NoteItem from './NoteItem';
import ViewNote from './ViewNote';
import SearchNotesService from '../services/SearchNotesService';

export default class NotesList extends React.Component {

    state = {
        expression: '',
        viewingNote: null,
        viewNoteFormOpened: false
    }

    constructor(props) {
        super(props);
        this._notes = this.props.notes;
        this._searchService = new SearchNotesService();
    }

    render() {
        return (
            this._notes.length > 0 ?
                this._notesContainer() :
                this._noNotesContainer()
        )
    }

    _notesContainer() {
        const notes = this._searchService.search(this._notes, this.state.expression);
        const refreshList = (note) => this.forceUpdate();
        return (
            <View style={Styles.notesContainer}>
                <SafeAreaView>
                    <TextInput style={Styles.searchTextInput} placeholder='Search' value={this.state.expression} onChangeText={this._handleSearchExpression} />
                    <FlatList
                        data={notes}
                        renderItem={note => <NoteItem note={note.item} onDelete={[refreshList]} viewItem={this._openViewNotForm} />}
                        keyExtractor={(note) => note.id.toString()}
                        ListEmptyComponent={() => <Text style={Styles.noNotesFound}>No notes found!</Text>} />
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

    _handleSearchExpression = (expression) => {
        this.setState({ expression });
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

