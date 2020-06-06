import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View, Image, Text } from 'react-native';

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
                        keyExtractor={note => note.id} />
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

const styles = StyleSheet.create({
    notesContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10
    },

    noNotesContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10
    },

    noNotesTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 5,
        color: 'grey'
    },

    noNotesInfo: {
        fontSize: 17,
        textAlign: 'center',
        marginTop: 5,
        color: 'grey'
    }
});
