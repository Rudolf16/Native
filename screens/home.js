import { NavigationContainer } from '@react-navigation/native'
import React, {useState} from 'react'
import { StyleSheet,View,Text, FlatList,TouchableOpacity,Modal, Keyboard,TouchableWithoutFeedback } from 'react-native'
import {globalStyles} from '../styles/global'
import Card from '../shared/card'
import { MaterialIcons } from '@expo/vector-icons';
import ReviewFrom from './reviewFrom'
//import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function Home({navigation}){
    const unicId=()=>{
       const id=Math.random()
        if(reviews.find(el=>{el.key==id})){
           unicId()
        }
        else{return id}
    }
const [modalOpen,setModalOpen]=useState(false)

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
      ]);
const reviewChange=(review)=>{
    setReviews([...reviews,{...review,key:unicId()}])
    setModalOpen(modalOpen==false?(true):(false))
}
    return(
        <View style={globalStyles.container}>

        <Modal visible={modalOpen} animationType='slide'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={globalStyles.container}>
            <MaterialIcons name='close' 
        size={24} 
        onPress={()=>setModalOpen(modalOpen==false?(true):(false))}>

        </MaterialIcons>
                <ReviewFrom reviewChange={reviewChange}/>
            </View>
            </TouchableWithoutFeedback>
        </Modal>

        <MaterialIcons name='add' 
        size={24} 
        onPress={()=>setModalOpen(modalOpen==false?(true):(false))}>

        </MaterialIcons>

           <FlatList
               data={reviews}
               renderItem={({item})=>(
                   <TouchableOpacity onPress={()=>navigation.navigate('details',{title:item})}>
                      <Card>
                      <Text style={globalStyles.styleText}>{item.title}</Text>
                      </Card>
                   </TouchableOpacity>
               )}
           />
        </View>
    )
} 

