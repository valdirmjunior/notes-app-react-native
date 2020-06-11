import React from 'react';
import { View, Text } from 'react-native';
import Styles from './NoteItemStyles';
import DeleteNoteItem from './DeleteNoteItem';

export default class NoteItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { note: this.props.note }
    }

    render() {
        const note = this.state.note;
        return (
            <View style={Styles.noteItemContainer}>
                <Text style={Styles.noteTitle}>
                    {note.title}
                </Text>
                <View style={Styles.deleteNoteContainer}>
                    <DeleteNoteItem note={note} onDelete={this.props.onDelete} />
                </View>
            </View>
        )
    }
}
