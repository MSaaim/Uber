import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../assets/clrs/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PreviousDestination = () => {
    return (
        <View >
            <TouchableOpacity style={styles.row}>
                <View style={styles.iconContainer}>
                    <AntDesign name={'clockcircle'} size={16} color={'#fff'} />
                </View>
                <Text style={styles.prevDest}> Karachi Company Bus Stop</Text>
            </TouchableOpacity>


        </View>
    )
}

export default PreviousDestination

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#dbdbdb',

    },

    iconContainer: {
        backgroundColor: COLORS.dark,
        padding: 10,
        borderRadius: 25,

    },
    prevDest: {
        marginLeft: 8,
        fontWeight: '500',
        fontSize: 16
    }
})