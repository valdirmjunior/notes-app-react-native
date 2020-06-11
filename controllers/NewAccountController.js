import Account from '../domain/Account';
import SaveAccountService from '../services/SaveAccountService';
import { Alert } from 'react-native';

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
            this._alert('Account saved successfully!');
        } catch (error) {
            this._alert(error);
        }
    }

    _createAccount() {
        const firstName = this._view.state.firstName;
        const lastName = this._view.state.lastName;
        const email = this._view.state.email;
        const password = this._view.state.password;
        return new Account(firstName, lastName, email, password);
    }

    _cleanAccountForm() {
        const firstName = '';
        const lastName = '';
        const email = '';
        const password = '';
        this._view.setState({ firstName, lastName, email, password });
    }

    _notifyListeners(account) {
        const listeners = this._view.props.onSuccess || [];
        listeners.onSuccess.forEach(onSuccess => onSuccess(account));
    }

    _alert(message) {
        Alert.alert('New Account', message);
    }
}