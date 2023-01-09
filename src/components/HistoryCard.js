import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../assets/clrs/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { text } from 'stream/consumers';

const HistoryCard = ({placeName,price, date}) => {
    return (
        <View>
            <TouchableOpacity style={styles.row}>
           
                <View style={styles.iconContainer}>
                    <AntDesign name={'clockcircle'} size={16} color={'#fff'} />
                </View>
                <View style={styles.middleContainer}>
                        <Text style={styles.placeName}>{placeName}</Text>


                <Text style={styles.date}>{date}</Text>
            </View>

            <View style={styles.rightContainer}>
                <Ionicons name={'pricetag'} size={16} color={COLORS.green} />
                <Text style={styles.price}>{price} /-</Text>
            </View>
            </TouchableOpacity>

        </View>
    )
}

export default HistoryCard

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#dbdbdb',

    },

    iconContainer: {
        backgroundColor: '#cccccc',
        padding: 10,
        borderRadius: 25,

    },
    prevDest: {
        marginLeft: 8,
        fontWeight: '500',
        fontSize: 16
    },
    middleContainer: {
        flex: 1,
        marginHorizontal: 10,
        justifyContent: 'space-between'
    },
    placeName:{
        color:COLORS.dark,
        fontWeight: '600'
    },
    date:{
        color:COLORS.dark,
    },
    iconContainer:{
        backgroundColor:'#000',
        padding: 10,
        borderRadius: 25,
    },
    rightContainer: {
        width: 100,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        color: '#000'
    },
    price: {
        fontWeight: '500',
        fontSize: 13,
        marginLeft: 5,
        color: '#000'
    },


})