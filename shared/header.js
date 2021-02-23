import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { images } from '../styles/global';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

export default function Header({navi, title}) {
    const styleIm= title=='GameZone'?('headerImageG'):('headerImageA')
       
        
    

    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}> 
            <MaterialIcons name='menu' onPress ={()=>navi.openDrawer()} size={28} style={styles.icon}/>
            <Image style={styles[styleIm]} source={require('../assets/heart_logo.png')}></Image>
            <Text style={styles.headerText}>{title}</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        flex:1,
        padding:0,
        margin : 0,
        width:Dimensions.get('screen').width,
        height:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon:{
        position:'absolute',
        left:10
    },
    headerImageG:{
        position:'absolute',
        left:100,
        width:26,
        height:26,
    },
    headerImageA:{
        position:'absolute',
        left:70,
        width:26,
        height:26,
    }
});