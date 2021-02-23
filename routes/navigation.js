import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AboutScreen from './aboutStack';
import HomeScreen from './homeStack';
import { createDrawerNavigator } from '@react-navigation/drawer';



const Draw=createDrawerNavigator();

export default function Navigator(){
    
    return(
        <NavigationContainer>
            <Draw.Navigator>
            <Draw.Screen name='Home' component={HomeScreen}/>
            <Draw.Screen name='About' component={AboutScreen}/>
            </Draw.Navigator>
        </NavigationContainer>
    )
    
}

