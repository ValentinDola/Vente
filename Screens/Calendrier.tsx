import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../Constants/index';

const Calendrier = () => (
  <View style={{flex: 1, backgroundColor: '#F6F6F7'}}>
    <Text style={{color: theme.colors.blue, fontFamily: 'Nunito-SemiBold'}}>
      Calendrier
    </Text>
  </View>
);

export default Calendrier;
