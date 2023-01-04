import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import React from 'react'
import {
    useState,
    useEffect
} from 'react'
import CustomPlaceResult from '../../components/CustomPlaceResult'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import COLORS from '../../assets/clrs/Colors'


const DestinationSearch = () => {

    const [OriginPlace, setOriginPlace] = useState(null);
    const [DestinationPlace, setDestinationPlace] = useState(null);

    useEffect(() => {
        if (OriginPlace, DestinationPlace) {
            //navigation will be applied here
            console.warn('Redirect to the Results!!');
        }

    }, [OriginPlace, DestinationPlace]);

    const homePlace = {
        description: "Home",
        geometry: { location: { latitude: 33.6518, longitude: 73.1566 } }
    }
    const workPlace = {
        description: "Work",
        geometry: { location: { latitude: 33.6425, longitude: 73.9930 } }
    }

    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder='Where From?'
                onPress={(data, details) => {
                    setOriginPlace({ data, details });
                }}
                enablePoweredByContainer={false}
                suppressDefaultStyles
                currentLocation={true}
                currentLocationLabel='Current location'
                renderDescription={(data) => data.description || data.vicinity}
                styles={{
                    textInput: styles.DestinationInput,
                    container: {
                        position: 'absolute',
                        top: 10,
                        left: 10,
                        right: 10,
                    },
                    listView: {
                        position: 'absolute',
                        top: 100
                    },
                    separator: {
                        backgroundColor: COLORS.grey,
                        height: 1
                    }
                }}
                query={{
                    key: 'AIzaSyA0JE8wt9-CGmaQjdALcrz61dtGybuStV4',
                    language: 'en',
                }}
                fetchDetails
                autoFillOnNotFound={true}
                onFail={(error) => {
                    console.log(error);
                }}
                renderRow={(data) => <CustomPlaceResult data={data} />}
                predefinedPlaces={[homePlace, workPlace]}
            />

            <GooglePlacesAutocomplete
                placeholder='Where to?'
                onPress={(data, details) => {
                    setDestinationPlace({ data, details });
                }}
                enablePoweredByContainer={false}
                suppressDefaultStyles
                styles={{
                    textInput: styles.DestinationInput,
                    container: {
                        position: 'absolute',
                        top: 60,
                        left: 10,
                        right: 10,
                    },
                    separator: {
                        backgroundColor: COLORS.grey,
                        height: 1
                    }
                }}
                query={{
                    key: 'AIzaSyA0JE8wt9-CGmaQjdALcrz61dtGybuStV4',
                    language: 'en',
                }}
                fetchDetails
                autoFillOnNotFound={true}
                onFail={(error) => {
                    console.log(error);
                }}
                renderRow={(data) => <CustomPlaceResult data={data} />}
            />

            {/* Dot styles circle and a square near input fields also a line */}
            <View style={styles.circle} />
            <View style={styles.line} />
            <View style={styles.square} />

        </View>
    )
}

export default DestinationSearch

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: '100%',
        backgroundColor: COLORS.white
    },
    DestinationInput: {
        height: 40,
        backgroundColor: '#eee',
        marginVertical: 5,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.grey,
        borderRadius: 10,
        marginLeft: 25
    },
    circle: {
        width: 5,
        height: 5,
        backgroundColor: COLORS.dark,
        position: 'absolute',
        top: 35,
        left: 15,
        borderRadius: 25,
    },
    line: {
        width: 1,
        height: 45,
        backgroundColor: COLORS.green,
        position: 'absolute',
        top: 40,
        left: 16.8,
    },
    square: {
        width: 5,
        height: 5,
        backgroundColor: COLORS.dark,
        position: 'absolute',
        top: 85,
        left: 15,
    }
})