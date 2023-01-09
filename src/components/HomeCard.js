import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import COLORS from '../assets/clrs/Colors';

const HomeCard = () => {
    return (
        <View>
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <Entypo name={'home'} size={16} color={'#fff'} />
                </View>
                <Text style={styles.prevDest}> COMSATS University Islamabad</Text>

            </View>
        </View>
    )
}

export default HomeCard

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#dbdbdb',

    },

    iconContainer: {
        backgroundColor: COLORS.orange,
        padding: 10,
        borderRadius: 25,

    },
    prevDest: {
        marginLeft: 8,
        fontWeight: '500',
        fontSize: 16
    }
})