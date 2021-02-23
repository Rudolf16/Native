import React from 'react'
import {Button,TextInput,View, Text} from 'react-native'
import {Formik} from 'formik'
import { globalStyles } from '../styles/global'
import * as yup from 'yup'

const ReviewSchema=yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating:yup.string().required().test('number 1-5',
    'rating must be a number 1-5',
    (val)=>parseInt(val)<6&&parseInt(val)>0)
})

export default function ReviewFrom({reviewChange}){
    return(
        <View style={globalStyles.container}>
            <Formik
            initialValues={{title:'',body:'',rating:''}}
            validationSchema={ReviewSchema}
            onSubmit={values=>{
                reviewChange(values)
            }}
            >
            {(props)=>(
                    
                    <View>
                    <TextInput
                    style={globalStyles.input}
                        placeholder='review title'
                        onChangeText={props.handleChange('title')}
                        value={props.values.title}
                        onBlur={props.handleBlur('title')}
                    />

                    <Text>{props.touched.title&&props.errors.title}</Text>
                    
                     <TextInput
                     style={globalStyles.input}
                        multiline
                        placeholder='review body'
                        onChangeText={props.handleChange('body')}
                        value={props.values.body}
                        onBlur={props.handleBlur('body')}
                        
                    />
                    <Text>{props.touched.body&&props.errors.body}</Text>  

                     <TextInput
                        style={globalStyles.input}
                        placeholder='review rating'
                        onChangeText={props.handleChange('rating')}
                        value={props.values.rating}
                        keyboardType='numeric'
                        onBlur={props.handleBlur('rating')}
                    />

                    <Text>{props.touched.rating&&props.errors.rating}</Text>

                    <Button title='sumbit' onPress={props.handleSubmit}/>
                </View>
                
            )}
            </Formik>
        </View>
    )
}