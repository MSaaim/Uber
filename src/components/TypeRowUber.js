import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import COLORS from '../assets/clrs/Colors'


const TypeRowUber = (props) => {
    const { type } = props;

    const getImage = () => {
        if (type.type === 'UberX') {
            return require('../assets/images/UberX.jpeg')
        }
        if (type.type === 'Comfort') {
            return require('../assets/images/Comfort.jpeg')
        }
        return require('../assets/images/UberXL.jpeg')

    }

    return (

        <View style={styles.container}>

            <Image
                style={styles.image}
                source={getImage()} />


            <View style={styles.middleContainer}>
                <Text style={styles.carType}>
                    {type.type}{' '}
                    <Ionicons
                        name={'person'}
                        size={12} />
                    3
                </Text>

                <Text style={styles.secondTimeRow}>9:10 PM dropoff</Text>
            </View>


            <View style={styles.rightContainer}>
                <Ionicons name={'pricetag'} size={16} color={COLORS.green} />
                <Text style={styles.price}>est. Rs{type.price}</Text>
            </View>
        </View>
    )
}


export default TypeRowUber

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: COLORS.white
    },
    image: {
        height: 70,
        width: 80,
        resizeMode: 'contain'


    },
    middleContainer: {
        flex: 1,
        marginHorizontal: 10,
        justifyContent: 'space-between'
    },
    carType: {
        color: COLORS.dark,
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5

    },
    secondTimeRow: {
        color: '#5d5d5d',

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

    }
})