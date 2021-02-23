import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const Stack =createStackNavigator()

export default function HomeScreen({navigation}){
    return(
            <Stack.Navigator>
                <Stack.Screen name='home' 
                options={{ headerTitle:()=><Header navi={navigation} title='GameZone'/>,
                headerStyle: {
            backgroundColor: 'white',
                 }}} 
                 component={Home} />
                <Stack.Screen name='details' 
                options={({route})=>({
                    title:'Review of '+route.params.title.title,
                    headerStyle: {
            backgroundColor: 'white',
          },
                    })} 
                    component={ReviewDetails} />
            </Stack.Navigator>
        
    )
}