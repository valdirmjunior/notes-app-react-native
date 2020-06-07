export default class Account {

    constructor(firstName, lastName, email, password) {
        this._checkAccountIsValid(firstName, lastName, email, password);
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._password = password;
        this._notes = [];
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

    hasNotes() {
        return this._notes.length > 0;
    }

    add(note) {
        this._checkNoteWasProvided(note);
        const id = this.notes.length + 1;
        note.id = id;
        this._notes.push(note);
    }

    delete(note) {
        this._checkNoteWasProvided(note);
        const index = this._notes.indexOf(note);
        if (index > -1)
            this._notes.splice(index, 1);
    }

    _checkNoteWasProvided(note) {
        if (!note)
            throw 'No note was provided.';
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