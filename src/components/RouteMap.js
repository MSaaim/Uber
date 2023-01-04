import { FlatList, Image, Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../assets/clrs/Colors'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import cars from '../assets/data/cars'
import MapViewDirections from 'react-native-maps-directions';

const RouteMap = () => {
    const origin = {
        latitude: 33.6880,
        longitude: 73.1097,
    };
    const destination = {
        latitude: 33.6677,
        longitude: 73.0752,
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
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={'AIzaSyA0JE8wt9-CGmaQjdALcrz61dtGybuStV4'}
                    strokeWidth={2.5}
                    strokeColor="blue"
                />
                <Marker
                    coordinate={origin}
                    title={"Origin"}
                />
                <Marker
                    coordinate={destination}
                    title={"Destination"}
                />

            </MapView>
        </View>
    )
}

export default RouteMap

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