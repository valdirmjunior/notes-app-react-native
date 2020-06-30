import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, createAppContainer, DrawerItems, SafeAreaView } from 'react-navigation';
import Styles from './HomeStyles';
import Notes from './Notes';

const Routes = {
    Notes: { screen: Notes, navigationOptions: { title: 'Notas', drawerLabel: 'Notas' } }
};

const CustomDrawerComponent = props => (
    <SafeAreaView style={Styles.mainContainer}>
        <ScrollView>
            <DrawerItems {...props} />
            <TouchableOpacity style={Styles.logOutButton} onPress={() => props.navigation.navigate('Login')}>
                <Text style={Styles.logOutButtonLabel}>Sair</Text>
            </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
);

const Config = {
    drawerPosition: 'left',
    overlayColor: 'rgb(250, 218, 128)',
    contentComponent: CustomDrawerComponent,
    contentOptions: {
        activeTintColor: 'grey'
    }
};

const DrawerNavigator = createDrawerNavigator(Routes, Config);
export default createAppContainer(DrawerNavigator);