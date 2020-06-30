import { Alert } from 'react-native';
import SessionStorage from '../services/SessionStorage';
import Note from '../domain/Note';

export default class NewNoteController {

    constructor(view) {
        this._view = view;
        this._createNote = this._createNote.bind(this);
        this._cleanNoteForm = this._cleanNoteForm.bind(this);
        this._notifyListeners = this._notifyListeners.bind(this);
        this._currentAccount = SessionStorage.getLoggedAccount();
    }

    saveNote() {
        try {
            const note = this._createNote();
            this._currentAccount.add(note);
            this._notifyListeners();
            this._cleanNoteForm();
            this._alert('Nota salva com sucesso!');
        } catch (error) {
            this._alert(error);
        }
    }

    _createNote() {
        const title = this._view.state.note.title;
        const note = this._view.state.note.note;
        return new Note(title, note);
    }

    _cleanNoteForm() {
        const title = '';
        const note = '';
        this._view.setState({ note: { title, note } });
    }

    _notifyListeners(note) {
        const listeners = this._view.props.onSuccess || [];
        listeners.forEach(onSuccess => onSuccess(note));
    }

    _alert(message) {
        Alert.alert('Nova Nota', message);
    }
}