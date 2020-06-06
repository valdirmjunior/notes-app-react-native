import AccountRepository from '../repositories/AccountRepository';
import LoggedAccount from "../domain/LoggedAccount";

export default class LoginService {

    login(email, password) {
        this._checkCredentialsWasProvided(email, password);
        const account = this._findAccountByCredentials(email, password);
        return new LoggedAccount(account);
    }

    _checkCredentialsWasProvided(email, password) {
        this._checkEmailWasProvided(email);
        this._checkPasswordWasProvided(password);
    }

    _checkEmailWasProvided(email) {
        if (email == '')
            throw 'E-mail is required.'
    }

    _checkPasswordWasProvided(password) {
        if (password == '')
            throw 'Password is required.'
    }

    _findAccountByCredentials(email, password) {
        const byCredentials = this._byCredentials(email, password);
        const matchedAccounts = AccountRepository._accounts.filter(byCredentials);
        if (matchedAccounts.length === 0)
            throw 'Invalid e-mail or password.';
        return matchedAccounts.pop();
    }

    _byCredentials(email, password) {
        return (account) => account.email == email && account.password == password;
    }
}