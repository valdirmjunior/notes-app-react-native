import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import Notes from './Notes';

const routes = {
    Notes: { screen: Notes }
};

const config = {
    drawerPosition: 'left',
    overlayColor: 'rgb(250, 218, 128)',
    contentOptions: {
        activeTintColor: 'grey',
        activeBackgroundColor: 'rgb(250, 218, 128)'
    }
};

const DrawerNavigator = createDrawerNavigator(routes, config);
export default createAppContainer(DrawerNavigator);