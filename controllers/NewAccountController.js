import { Alert } from 'react-native';
import Account from '../domain/Account';
import SaveAccountService from '../services/SaveAccountService';

export default class NewAccountController {

    constructor(view) {
        this._view = view;
        this._saveService = new SaveAccountService();
        this._createAccount = this._createAccount.bind(this);
        this._cleanAccountForm = this._cleanAccountForm.bind(this);
        this._notifyListeners = this._notifyListeners.bind(this);
    }

    saveAccount() {
        try {
            const account = this._createAccount();
            this._saveService.save(account);
            this._cleanAccountForm();
            this._notifyListeners(account);
            this._alert('Conta salva com sucesso!');
        } catch (error) {
            this._alert(error);
        }
    }

    _createAccount() {
        const firstName = this._view.state.account.firstName;
        const lastName = this._view.state.account.lastName;
        const email = this._view.state.account.email;
        const password = this._view.state.account.password;
        return new Account(firstName, lastName, email, password);
    }

    _cleanAccountForm() {
        const firstName = '';
        const lastName = '';
        const email = '';
        const password = '';
        this._view.setState({ account: { firstName, lastName, email, password } });
    }

    _notifyListeners(account) {
        const listeners = this._view.props.onSuccess || [];
        listeners.forEach(onSuccess => onSuccess(account));
    }

    _alert(message) {
        Alert.alert('Nova Conta', message);
    }
}