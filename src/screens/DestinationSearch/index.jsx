import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import CustomInput from '../../components/CustomInput'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'


const DestinationSearch = () => {

    const [OriginPlace, setOriginPlace] = useState(null);
    const [DestinationPlace, setDestinationPlace] = useState(null);

    useEffect(() => {
        if (OriginPlace, DestinationPlace) {
            //navigation will be applied here
            console.warn('Redirect to the Results!!');
        }

    }, [OriginPlace, DestinationPlace])

    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder='From'
                onPress={(data, details) => {
                    setOriginPlace({ data, details });
                }}
                styles={{
                    textInput: styles.DestinationInput
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
            />

            <GooglePlacesAutocomplete
                placeholder='Where to?'
                onPress={(data, details) => {
                    setDestinationPlace({ data, details });
                }}
                styles={{
                    textInput: styles.DestinationInput
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
            />
        </View>
    )
}

export default DestinationSearch

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: '100%',


    },
    DestinationInput: {
        height: 50,
        backgroundColor: '#eee',
        marginVertical: 5,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#000'
    }
})