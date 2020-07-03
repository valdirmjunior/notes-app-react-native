import React from 'react';
import { ScrollView, Text, TouchableOpacity, Image, View } from 'react-native';
import { createDrawerNavigator, createAppContainer, DrawerItems, SafeAreaView } from 'react-navigation';
import Styles from './HomeStyles';
import Notes from './Notes';
import SessionStorage from '../services/SessionStorage';

const Routes = {
    Notes: { screen: Notes, navigationOptions: { title: 'Notas', drawerLabel: 'Suas Notas' } }
};

const CustomDrawerComponent = props => (
    <SafeAreaView style={Styles.mainContainer}>
        <ScrollView>
            <View style={Styles.logoContainer}>
                <Image source={require('../assets/no-profile-photo.png')} />
                <Text style={Styles.helloLabel}>Olá, {SessionStorage.getLoggedAccount().firstName}.</Text>
            </View>
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