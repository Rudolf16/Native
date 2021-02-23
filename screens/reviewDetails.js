import React from 'react'
import { StyleSheet,View,Text,Button,Image } from 'react-native'
import Card from '../shared/card'
import {globalStyles,images} from '../styles/global'

export default function ReviewDetails({route,navigation}){
    const {title}=route.params;
    return(
        <View>
            <Card>
                <Text style={globalStyles.container}>{title.title}</Text>
                <Text style={globalStyles.container}>{title.body}</Text>
                <Text style={globalStyles.container}>{title.rating}</Text>
                <View>
                    <Text>GameZone rating</Text>
                    <Image source={images.ratings[title.rating]}></Image>
                </View>
                <Button title ='back home' onPress={()=>{navigation.goBack()}}></Button>
            </Card>
        </View>
    )
} 

