export default class LoggedAccount {

    constructor(account) {
        this._account = account;
    }

    get account() {
        return this._account;
    }
}