import React from 'react';
import { View, Text } from 'react-native';

import styles from './NoteItemStyles';

import DeleteNoteItem from './DeleteNoteItem';

export default class NoteItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            note: this.props.note
        }
    }

    render() {
        const note = this.state.note;
        return (
            <View style={styles.noteItemContainer}>
                <Text style={styles.noteTitle}>
                    {note.item.title}
                </Text>
                <View style={styles.deleteNoteContainer}>
                    <DeleteNoteItem note={note} />
                </View>
            </View>
        )
    }
}
