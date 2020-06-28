import { Alert } from 'react-native';
import SessionStorage from '../services/SessionStorage';
import LoginService from '../services/LoginService';

export default class LoginController {

    constructor(view) {
        this._view = view;
        this._loginService = new LoginService();
    }

    login() {
        try {
            const email = this._view.state.email;
            const password = this._view.state.password;
            const loggedAccount = this._loginService.login(email, password);
            SessionStorage.setLoggedAccount(loggedAccount);
            this._view.props.navigation.navigate('Home');
        } catch (error) {
            this._alert(error);
        }
    }

    _alert(message) {
        Alert.alert('Log In', message);
    }
}