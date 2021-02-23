import 'react-native-gesture-handler';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import About from '../screens/about'
import React from 'react';
import Header from '../shared/header';

const Stack =createStackNavigator()

export default function AboutScreen({navigation}){
    return(
        <Stack.Navigator>
            <Stack.Screen options={{headerTitle:()=><Header navi={navigation} title='About GameZone'/>}} name='about' component={About}/>
        </Stack.Navigator>

        
    )
}