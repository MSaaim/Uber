import {
    StyleSheet,
    Text,
    View,
    Pressable
} from 'react-native'
import React from 'react'
import COLORS from '../../assets/clrs/Colors'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomButton from '../../components/CustomButton'
import { Auth } from 'aws-amplify'
import Feather from 'react-native-vector-icons/Feather'


const SettingsScreen = () => {

    return (

        <View>
            <View style={styles.mainContainer}>

                <View stylele={styles.userContainer}>
                    <View style={styles.userProf}>
                        <Feather name={'user'} size={36} color={'#000'} />
                    </View>

                    <Text style={styles.userName}>Muhammad Saaim</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.star}>5.00 </Text>
                        <Ionicons name="ios-star" size={14} color="#fff" />
                    </View>

                </View>

                <Pressable onPress={() => { console.warn("Screen Not Implemened") }}>
                    <Text style={styles.doMore}>Do More with your Account!!</Text>
                </Pressable>

                <Pressable onPress={() => { console.warn("Screen Not Implemened") }}>
                    <Text style={styles.moneyDriving}>Make Money Driving</Text>
                </Pressable>
            </View>

            <CustomButton
                onPress={() => { Auth.signOut() }}
                text={'Sign Out'}
                style={styles.CustomButton}

            />

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
        backgroundColor: COLORS.orange,
        borderRadius: 100,
        borderWidth: 1,
        borderBottomColor: COLORS.green,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'

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
    CustomButton: {
        backgroundColor: COLORS.logoutRed,
        color: '#fff',
        borderRadius: 10,
        height: 50,
        width: 300,
        position: 'absolute',
        top: 600,
        left: 20

    },
})