import {
    FlatList,
    Image,
    Dimensions,
    ImageBackground,
    StyleSheet,
    Text,
    View
} from 'react-native'
import React from 'react'
import COLORS from '../assets/clrs/Colors'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import cars from '../assets/data/cars'
import MapViewDirections from 'react-native-maps-directions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const RouteMap = ({ origin, destination }) => {
    console.log(origin.details.geometry.location)
    const originLoc = {
        latitude: origin?.details?.geometry?.location?.lat ? origin?.details?.geometry?.location?.lat : origin?.details?.geometry?.location?.latitude,
        longitude: origin?.details?.geometry?.location?.lng ? origin?.details?.geometry?.location?.lng : origin?.details?.geometry?.location?.longitude
    }
    console.log(originLoc)

    const destinationLoc = {
        latitude: destination?.details?.geometry?.location?.lat ? destination?.details?.geometry?.location?.lat : destination?.details?.geometry?.location?.latitude,
        longitude: destination?.details?.geometry?.location?.lng ? destination?.details?.geometry?.location?.lng : destination?.details?.geometry?.location?.longitude
    }
    console.log(destinationLoc)

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                showsUserLocation={true}
                region={{
                    latitude: 33.6844,
                    longitude: 73.0479,
                    latitudeDelta: 0.10,
                    longitudeDelta: 0.120,
                }}
            >

                <MapViewDirections
                    origin={originLoc}
                    destination={destinationLoc}
                    apikey={'AIzaSyA0JE8wt9-CGmaQjdALcrz61dtGybuStV4'}
                    strokeWidth={3}
                    strokeColor='#d36705'

                />
                <Marker
                    coordinate={originLoc}
                    title={"Origin"}
                >
                    <View><MaterialIcons name={"circle"} size={15} color={"black"} /></View>
                </Marker>
                <Marker
                    coordinate={destinationLoc}
                    title={"Destination"}

                >
                    <View><MaterialIcons name={"location-on"} size={25} color={"black"} /></View>
                </Marker>
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
    },
    
})