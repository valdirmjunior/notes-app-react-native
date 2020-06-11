import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, createAppContainer, DrawerItems, SafeAreaView } from 'react-navigation';
import Notes from './Notes';

const routes = {
    Notes: { screen: Notes }
};

const CustomDrawerComponent = props => (
    <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
            <DrawerItems {...props} />
            <TouchableOpacity style={{width: '100%', paddingVertical: 12, paddingHorizontal: 16}} onPress={() => props.navigation.navigate('Login')}>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: 'grey'}}>Log Out</Text>
            </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
);

const config = {
    drawerPosition: 'left',
    overlayColor: 'rgb(250, 218, 128)',
    contentComponent: CustomDrawerComponent,
    contentOptions: {
        activeTintColor: 'grey'
    }
};

const DrawerNavigator = createDrawerNavigator(routes, config);
export default createAppContainer(DrawerNavigator);