import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from './NoteItemStyles';
import DeleteNoteItem from './DeleteNoteItem';

export default class NoteItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const note = this.props.note;
        const onDelete = this.props.onDelete;
        return (
            <TouchableOpacity onPress={() => this.props.viewItem(note)}>
                <View style={Styles.noteItemContainer}>
                    <Image source={require('../assets/note-item.png')} style={Styles.noteIcon} />
                    <Text style={Styles.noteTitle}>
                        {note.title}
                    </Text>
                    <View style={Styles.deleteNoteContainer}>
                        <DeleteNoteItem note={note} onDelete={onDelete} />
                    </View>
                </View>
            </TouchableOpacity >
        )
    }
}
