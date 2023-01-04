import { FlatList, Image, Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../assets/clrs/Colors'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import cars from '../assets/data/cars'

const HomeMap = () => {
    const getImage = (type) => {
        if (type === 'UberX') {
            return require('../assets/images/top-UberX.png')
        }
        if (type === 'Comfort') {
            return require('../assets/images/top-Comfort.png')
        }
        return require('../assets/images/top-UberXL.png')
    }
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: 33.6844,
                    longitude: 73.0479,
                    latitudeDelta: 0.10,
                    longitudeDelta: 0.120,
                }}
            >
                {/* {cars.map((car) => {
                    <Marker
                        key={car.id}
                        coordinate={{ latitude: car.latitude, longitude: car.longitude }}>
                        <Image
                            style={styles.car}
                            source={getImage(car.type)}
                        />
                    </Marker>

                })} */}
                <Marker
                    coordinate={{
                        latitude: 33.6677,
                        longitude: 73.0752,
                    }}>
                    <Image
                        style={styles.car}
                        source={require('../assets/images/top-UberXL.png')}
                    />
                </Marker>
                <Marker
                    coordinate={{
                        latitude: 33.6518,
                        longitude: 73.1566
                    }}>
                    <Image
                        style={styles.car}
                        source={require('../assets/images/top-Comfort.png')}
                    />
                </Marker>
                <Marker
                    coordinate={{
                        latitude: 33.6880,
                        longitude: 73.1097,
                    }}>
                    <Image
                        style={styles.car}
                        source={require('../assets/images/top-UberX.png')}
                    />
                </Marker>
            </MapView>
        </View>
    )
}

export default HomeMap

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height - 425,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    car: {
        width: 50,
        height: 50,
        resizeMode: 'contain'

    }
})