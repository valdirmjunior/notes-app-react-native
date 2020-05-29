import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';

import NoteItem from './NoteItem';

export default class NotesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: this.props.notes
        }
    }

    render() {
        const notes = this.state.notes;
        return (
            <SafeAreaView>
                <FlatList
                    data={notes}
                    renderItem={note => <NoteItem note={note} />}
                    keyExtractor={note => note.id} />
            </SafeAreaView>
        )
    }
}
