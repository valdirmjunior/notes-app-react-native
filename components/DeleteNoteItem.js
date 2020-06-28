import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Styles from './DeleteNoteItemStyles';
import DeleteItemController from '../controllers/DeleteNoteController';

export default class DeleteNoteItem extends React.Component {

    constructor(props) {
        super(props);
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
