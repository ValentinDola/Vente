import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../Constants/index';

const Creation = () => (
  <View style={styles.screen}>
    <Text style={{color: theme.colors.blue, fontFamily: 'Nunito-SemiBold'}}>
      Post
    </Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#F6F6F7',
    width: '100%',
    height: '100%',
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Creation;
