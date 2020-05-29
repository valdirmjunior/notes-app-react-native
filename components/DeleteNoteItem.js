import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import styles from './DeleteNoteItemStyles'

export default class DeleteNoteItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            note: this.props.note
        }
    }

    render() {
        return (
            <TouchableOpacity>
                <Image style={styles.deleteIcon} source={require('../assets/delete-icon.png')} />
            </TouchableOpacity>
        )
    }
}
