import AccountRepository from '../repositories/AccountRepository';

export default class LoginService {

    login(email, password) {
        this._checkEmailWasProvided(email);
        this._checkPasswordWasProvided(password);
        return this._findAccountByCredentials(email, password);
    }

    _checkEmailWasProvided(email) {
        if (!email)
            throw 'E-mail é obrigatório.'
    }

    _checkPasswordWasProvided(password) {
        if (!password)
            throw 'Senha é obrigatória.'
    }

    _findAccountByCredentials(email, password) {
        const byCredentials = this._byCredentials(email, password);
        const matchedAccounts = AccountRepository._accounts.filter(byCredentials);
        if (matchedAccounts.length === 0)
            throw 'E-mail ou senha inválidos.';
        return matchedAccounts.pop();
    }

    _byCredentials(email, password) {
        return (account) =>
            account.email == email &&
            account.password == password;
    }
}