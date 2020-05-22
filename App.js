import Login from './components/Login';
import Home from './components/Home';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const SwitchNavigator = createSwitchNavigator({ Login: Login, Home: Home });
const App = createAppContainer(SwitchNavigator);
export default App;
