import AccountRepository from '../repositories/AccountRepository';

export default class LoginService {

    login(email, password) {
        this._checkEmailWasProvided(email);
        this._checkPasswordWasProvided(password);
        return this._findAccountByCredentials(email, password);
    }

    _checkEmailWasProvided(email) {
        if (!email)
            throw 'E-mail is required.'
    }

    _checkPasswordWasProvided(password) {
        if (!password)
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
        return (account) =>
            account.email == email &&
            account.password == password;
    }
}