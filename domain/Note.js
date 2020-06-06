export default class Note {

    constructor(title, note) {
        this._checkNoteIsValid(title, note);
        this._title = title;
        this._note = note;
    }

    _checkNoteIsValid(title, note) {
        this._checkTitleWasProvided(title);
        this._checkNoteWasProvided(note);
    }

    _checkTitleWasProvided(title) {
        if (title == '')
            throw 'Title is required.';
    }

    _checkNoteWasProvided(note) {
        if (note == '')
            throw 'Note is required.';
    }

    get title() {
        return this._title;
    }

    get note() {
        return this._note;
    }
}