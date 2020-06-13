import SessionStorage from '../services/SessionStorage';
import { Alert } from 'react-native';

export default class NewNoteController {

    constructor(view) {
        this._view = view;
        this._notifyListeners = this._notifyListeners.bind(this);
        this._currentAccount = SessionStorage.getLoggedAccount();
    }

    deleteNote() {
        try {
            const confirm = () => { this._delete() };
            const cancel = () => { };
            this._prompt(confirm, cancel);
        } catch (error) {
            this._alert(error);
        }
    }

    _delete() {
        const note = this._view.state.note;
        this._currentAccount.delete(note);
        this._notifyListeners(note);
        this._alert('Note deleted successfully.');
    }

    _prompt(confirm, cancel) {
        const yesButton = { text: 'Yes', onPress: confirm };
        const noButton = { text: 'No', onPress: cancel };
        Alert.alert('Delete Note', 'Do you want to delete this note?', [yesButton, noButton]);
    }

    _alert(message) {
        Alert.alert('Delete Note', message);
    }

    _notifyListeners(note) {
        const listeners = this._view.props.onDelete || [];
        listeners.forEach(onDelete => onDelete(note));
    }
}