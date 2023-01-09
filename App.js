import 'react-native-gesture-handler'
import {
  Button,
  PermissionsAndroid,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import RouteNavigator from './src/navigation/RouteNavigator'
import { withAuthenticator } from 'aws-amplify-react-native';

navigator.geolocation = require('@react-native-community/geolocation');

import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';

Amplify.configure(awsconfig);

const App = () => {
  console. disableYellowBox = true;

  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Uber is requesting to permit Location",
          message:
            "Uber wants to know your location HEHE",
          buttonPositive: "Go On",
          buttonNegative: "Nope!"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Permission Given");
      } else {
        console.log("Access Denied");
      }
    } catch (errr) {
      console.log.warn(errr);
    }
  }

  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
    } else {
      //ask for iOS
      // Geolocation.requestAuthorization();
    }
    return () => {

    };
  }, []);

  return (
    <>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
      <RouteNavigator />
    </>
  )
}

export default withAuthenticator(App)

const styles = StyleSheet.create({})