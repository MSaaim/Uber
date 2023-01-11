import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import React from 'react'
import HomeMap from '../../components/HomeMap'
import HomeSearch from '../../components/HomeSearch'
import PreviousDestination from '../../components/PreviousDestination'
import HomeCard from '../../components/HomeCard'
const HomeScreen = () => {
    return (
        <View>
            <HomeMap />
            <HomeSearch />
            <PreviousDestination />
            <HomeCard />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})