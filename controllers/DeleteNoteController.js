import { Alert } from 'react-native';
import SessionStorage from '../services/SessionStorage';

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
        const note = this._view.props.note;
        this._currentAccount.delete(note);
        this._notifyListeners(note);
        this._alert('Nota apagada com sucesso.');
    }

    _prompt(confirm, cancel) {
        const yesButton = { text: 'Yes', onPress: confirm };
        const noButton = { text: 'No', onPress: cancel };
        Alert.alert('Apagar Nota', 'Deseja apagar essa nota?', [yesButton, noButton]);
    }

    _alert(message) {
        Alert.alert('Apagar Nota', message);
    }

    _notifyListeners(note) {
        const listeners = this._view.props.onDelete || [];
        listeners.forEach(onDelete => onDelete(note));
    }
}