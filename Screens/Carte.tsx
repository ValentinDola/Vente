import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../Constants/index';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const Carte = () => (
  <View style={styles.screen}>
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#F6F6F7',
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Carte;
