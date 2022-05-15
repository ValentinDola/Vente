import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {theme} from '../Constants';

const Maison = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <StatusBar backgroundColor={theme.colors.black} />
      <View>
        <Text>Maison</Text>
      </View>
    </SafeAreaView>
  );
};

export default Maison;
