import AccountRepository from '../repositories/AccountRepository';

export default class SaveAccountService {

    save(account) {
        this._checkAccountWasProvided(account);
        this._storeAccount(account);
    }

    _checkAccountWasProvided(account) {
        if (account == null || account == undefined)
            throw 'No account info was provided.';
    }

    _checkAccountDoesNotExists(account) {
        const byEmail = this._byEmail(account);
        const matches = AccountRepository._accounts.filter(byEmail);
        if (matches.length > 0)
            throw 'E-mail already exists.';
    }

    _byEmail(account) {
        return (current) => current.email == account.email;
    }

    _storeAccount(account) {
        AccountRepository._accounts.push(account);
    }
}