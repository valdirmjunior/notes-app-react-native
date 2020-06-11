export default class Account {

    constructor(firstName, lastName, email, password) {
        this._checkAccountIsValid(firstName, lastName, email, password);
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._password = password;
        this._notes = [];
        this._notesIndex = 0;
    }

    _checkAccountIsValid(firstName, lastName, email, password) {
        this._checkFirstNameWasProvided(firstName);
        this._checkLastNameWasProvided(lastName);
        this._checkEmailWasProvided(email);
        this._checkPasswordWasProvided(password);
    }

    _checkFirstNameWasProvided(firstName) {
        if (!firstName)
            throw 'First name is required.';
    }

    _checkLastNameWasProvided(lastName) {
        if (!lastName)
            throw 'Last name is required.';
    }

    _checkEmailWasProvided(email) {
        if (!email)
            throw 'E-mail is required.';
    }

    _checkPasswordWasProvided(password) {
        if (!password)
            throw 'Password is required.';
    }

    _checkNoteWasProvided(note) {
        if (!note)
            throw 'No note was provided.';
    }

    hasNotes() {
        return this._notes.length > 0;
    }

    add(note) {
        this._checkNoteWasProvided(note);
        note.id = ++this._notesIndex;
        this._notes.push(note);
    }

    delete(note) {
        this._checkNoteWasProvided(note);
        let indexToRemove = -1;
        this._notes.forEach((value, index) => {
            if (value.id === note.id) {
                indexToRemove = index;
            }
        });
        if (indexToRemove === -1)
            throw 'Note not found!';
        this._notes.splice(indexToRemove, 1);
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }

    get notes() {
        return this._notes;
    }
}