import React from 'react';
import Styles from './DeleteNoteItemStyles';
import { TouchableOpacity, Image } from 'react-native';
import DeleteItemController from '../controllers/DeleteNoteController';

export default class DeleteNoteItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { note: this.props.note }
        this._controller = new DeleteItemController(this);
    }

    render() {
        return (
            <TouchableOpacity onPress={this._deleteNote}>
                <Image style={Styles.deleteIcon} source={require('../assets/delete-icon.png')} />
            </TouchableOpacity>
        )
    }

    _deleteNote = () => {
        this._controller.deleteNote();
    }
}
