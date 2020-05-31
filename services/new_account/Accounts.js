export default class Accounts {

    static _accounts = [];

    save(account) {
        this._validateAccount(account);
        this._checkAccountDoesNotExists(account);
        this._storeAccount(account);
    }

    matches(matches) {
        return Accounts._accounts.filter(matches);
    }

    _validateAccount(account) {
        this._checkFirstNameWasProvided(account);
        this._checkLastNameWasProvided(account);
        this._checkEmailWasProvided(account);
        this._checkPasswordWasProvided(account);
    }

    _checkFirstNameWasProvided(account) {
        if (account.firstName == '')
            throw 'First name is required.';
    }

    _checkLastNameWasProvided(account) {
        if (account.lastName == '')
            throw 'Last name is required.';
    }

    _checkEmailWasProvided(account) {
        if (account.email == '')
            throw 'E-mail is required.';
    }

    _checkPasswordWasProvided(account) {
        if (account.password == '')
            throw 'Password is required.';
    }

    _checkAccountDoesNotExists(account) {
        const matchesByEmail = (current) => current.email == account.email;
        const matches = this.matches(matchesByEmail);
        if (matches.length > 0)
            throw 'E-mail already exists.';
    }

    _storeAccount(account) {
        Accounts._accounts.push(account);
    }
}