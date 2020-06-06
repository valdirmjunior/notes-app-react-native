export default class SessionStorage {

    static _loggedAccount;

    static setLoggedAccount(loggedAccount) {
        SessionStorage._loggedAccount = loggedAccount;
    }

    static getLoggedAccount() {
        return SessionStorage._loggedAccount;
    }
}