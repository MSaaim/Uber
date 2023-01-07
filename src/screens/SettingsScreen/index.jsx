import {
    StyleSheet,
    Text,
    View,
    Pressable
} from 'react-native'
import React from 'react'
import COLORS from '../../assets/clrs/Colors'
import { BorderlessButton } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'


const SettingsScreen = () => {
    return (
        <View style={styles.mainContainer}>

            <View stylele={styles.userContainer}>
                <View style={styles.userProf}></View>

                <Text style={styles.userName}>Muhammad Saaim</Text>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.star}>5.00 </Text>
                    <Ionicons name="ios-star" size={14} color="#fff" />
                </View>

            </View>

            <Pressable onPress={() => { console.warn("hello 1") }}>
                <Text style={styles.doMore}>Do More with your Account!!</Text>
            </Pressable>

            <Pressable onPress={() => { console.warn("hello 2") }}>
                <Text style={styles.moneyDriving}>Make Money Driving</Text>
            </Pressable>

        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: COLORS.dark,
        padding: 15,
    },
    userContainer: {
        flexDirection: 'row'
    },
    userProf: {
        height: 60,
        width: 60,
        backgroundColor: COLORS.blue,
        borderRadius: 100,
        borderWidth: 1,
        borderBottomColor: COLORS.green,
        marginVertical: 10

    },
    userName: {
        color: COLORS.white,
        fontSize: 18
    },
    star: {
        color: COLORS.white,
        marginBottom: 15,
        fontSize: 16
    },
    doMore: {
        color: COLORS.greyfont,
        paddingVertical: 6,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    moneyDriving: {
        color: COLORS.white,
        paddingVertical: 6,
    },
})