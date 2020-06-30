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
        if (!title)
            throw 'Título é obrigatório.';
    }

    _checkNoteWasProvided(note) {
        if (!note)
            throw 'Nota é obrigatória.';
    }

    get title() {
        return this._title;
    }

    get note() {
        return this._note;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }
}