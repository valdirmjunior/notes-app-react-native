import AccountRepository from '../repositories/AccountRepository';

export default class SaveAccountService {

    save(account) {
        this._checkAccountWasProvided(account);
        this._checkAccountDoesNotExists(account);
        this._storeAccount(account);
    }

    _checkAccountWasProvided(account) {
        if (!account)
            throw 'Nenhuma informação da conta foi fornecida.';
    }

    _checkAccountDoesNotExists(account) {
        const byEmail = this._byEmail(account);
        const matches = AccountRepository._accounts.filter(byEmail);
        if (matches.length > 0)
            throw 'E-mail já existe.';
    }

    _byEmail(account) {
        return (current) => current.email == account.email;
    }

    _storeAccount(account) {
        AccountRepository._accounts.push(account);
    }
}