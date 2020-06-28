import React from 'react';
import { View, TextInput, Image } from 'react-native';
import Styles from './NewNoteStyles';

export default class ViewNote extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={Styles.mainContainer}>
                <View style={Styles.logoContainer}>
                    <Image source={require('../assets/logo.png')} />
                </View>
                <View style={Styles.newNoteContainer}>
                    <TextInput style={Styles.newNoteTitle} value={this.props.note.title} editable={false} />
                    <TextInput style={Styles.newNoteInput} value={this.props.note.note} editable={false} multiline={true} numberOfLines={5} />
                </View>
            </View>
        )
    }
}
