import React from 'react';
import { StyleSheet, Text, View, Animated, FlatList, Dimensions } from 'react-native';
import { theme } from '../Constants/index';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CleanTabBar } from 'react-navigation-tabbar-collection';
import Create from './New/Create';
import Report from './New/Report';
import Scan from './New/Scan';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();


const Creation = () => {

  return (
    <View style={styles.screen}>
      <Create />
    </View>
  )
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F6F6F7',
  }
});

export default Creation;
