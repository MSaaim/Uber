import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import React from 'react';
import COLORS from '../assets/clrs/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useNavigation } from '@react-navigation/native';



const HomeSearch = () => {

    const navigation = useNavigation();
    const goToSearch = () => {
        navigation.navigate('DestinationSearch')
    }
    return (
        <Pressable onPress={goToSearch} style={styles.mainSearch}>
            <Text style={styles.search}>Where To?</Text>
            <View style={styles.timeContainer}>
                <AntDesign name={"clockcircle"} size={16} color={"#000"} />
                <Text style={styles.timeContainerText}>Now</Text>
                <MaterialIcons name={'keyboard-arrow-down'} size={20} color={COLORS.dark} />
            </View>
        </Pressable>
    )
}

export default HomeSearch

const styles = StyleSheet.create({

    mainSearch: {
        backgroundColor: COLORS.grey,
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10

    },
    search: {
        color: COLORS.dark,
        fontSize: 16,
        fontWeight: '600',
    },

    timeContainer: {
        flexDirection: 'row',
        width: 100,
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 50
    },

    timeContainerText: {
        color: COLORS.dark,
        paddingLeft: 5

    }
})