import {
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native'
import React from 'react'
import TypeRowUber from './TypeRowUber'
import typesData from '../assets/data/types'
import CustomButton from './CustomButton'
import COLORS from '../assets/clrs/Colors'

const UberTypes = () => {
    const confirm = () => {

    }
    return (
        <View style={{ backgroundColor: COLORS.white, height: '100%' }}>
            {typesData.map(type => (
                <TypeRowUber type={type} key={type.id} />))}

            <CustomButton text={'Confirm Ride'} style={styles.CustomButton}
                onPress={confirm}
            />

            {/* <Pressable onPress={confirm} style={styles.Pressable}>
                <Text style={{color:COLORS.light, fontWeight: 'bold'}}>
                    Confirm Uber
                </Text>
            </Pressable> */}

        </View>
    )
}

export default UberTypes

const styles = StyleSheet.create({
    CustomButton: {
        backgroundColor: COLORS.dark,
        color: '#fff',
        borderRadius: 10,
        height: 50,
        width:300,
        position:'absolute',
        top: 290,
        left:20

    },
    Pressable: {
        backgroundColor: COLORS.dark,
        padding: 10,
        margin: 1,
        alignItems: 'center',
    }

})
