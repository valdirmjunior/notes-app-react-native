export default class Accounts {

    static _accounts = [];

    constructor() {
        this._validateAccount = this._validateAccount.bind(this);
        this._checkAccountDoesNotExists = this._checkAccountDoesNotExists.bind(this);
    }

    save(account) {
        this._validateAccount(account);
        this._checkAccountDoesNotExists(account);
        this._storeAccount(account);
    }

    _validateAccount(account) {
        if (account.firstName == '') throw 'First name is mandatory.';
        if (account.lastName == '') throw 'Last name is mandatory.';
        if (account.email == '') throw 'E-mail is mandatory.';
        if (account.password == '') throw 'Password is mandatory.';
    }

    _checkAccountDoesNotExists(account) {
        const email = account.email;
        Accounts._accounts.forEach(element => {
            if (element.email == email)
                throw 'E-mail already exists.'
        });
    }

    _storeAccount(account) {
        Accounts._accounts.push(account);
    }
}