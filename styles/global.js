import { StyleSheet } from 'react-native'

export const globalStyles=StyleSheet.create({
    container:{
        flex:1,
        padding:20
    },
    styleText:{
        fontFamily: 'lobster',
        color: '#333'
    },
    paragraph:{
        marginVertical:8,
        lineHeight:20,
    },
    input:{
        borderRadius:6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {width:1,height:1},
        shadowOpacity:0.3,
        shadowRadius:2,
        shadowColor:'#333',
        marginHorizontal:4,
        marginVertical:6,
        padding:20
    }
})
export const images={
    ratings:{
        '1':require('../assets/rating-1.png'),
        '2':require('../assets/rating-2.png'),
        '3':require('../assets/rating-3.png'),
        '4':require('../assets/rating-4.png'),
        '5':require('../assets/rating-5.png'),
    }
}