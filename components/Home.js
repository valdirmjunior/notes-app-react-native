import React from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Notes from './Notes';
import Trash from './Trash';

const routes = {
    Notes: { screen: Notes },
    Trash: { screen: Trash }
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