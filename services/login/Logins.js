import Accounts from "../new_account/Accounts";
import LoggedAccount from "./LoggedAccount";

export default class Logins {

    constructor() {
        this._accounts = new Accounts();
    }

    login(email, password) {
        this._checkEmailWasProvided(email);
        this._checkPasswordWasProvided(password);
        const account = this._findAccountMatchesCredentials(email, password);
        return new LoggedAccount(account);
    }

    _checkEmailWasProvided(email) {
        if (email == '')
            throw 'E-mail is required.'
    }

    _checkPasswordWasProvided(password) {
        if (password == '')
            throw 'Password is required.'
    }

    _findAccountMatchesCredentials(email, password) {
        const matchesByCredentials = (account) => account.email == email && account.password == password;
        const matchedAccounts = this._accounts.matches(matchesByCredentials);
        if (matchedAccounts.length === 0)
            throw 'Invalid e-mail or password.';
        return matchedAccounts.pop();
    }
}