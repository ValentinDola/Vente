// ADD TODO
// [X] Bottom Navigation

import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import { CleanTabBar } from 'react-navigation-tabbar-collection';
import Icon from 'react-native-vector-icons/Ionicons';
import Explorer from '../Screens/Explorer';
import Calendrier from '../Screens/Calendrier';
import Carte from '../Screens/Carte';
import Profile from '../Screens/Profile';
import Creation from '../Screens/Creation';
import { theme } from '../Constants';

const Tab = createBottomTabNavigator();

const Maison = () => {
  return (
    <Tab.Navigator
      initialRouteName="Explorer"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <CleanTabBar {...props} />}>
      <Tab.Screen
        name="Explorer"
        component={Explorer}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name="search-outline" size={size} color={color} />
          ),
          tabBarActiveTintColor: theme.colors.blue,
          tabBarLabel: (
            <Text style={{ fontFamily: 'Nunito-SemiBold' }}>Explorer</Text>
          ),
        }}
      />

      <Tab.Screen
        name="Calendrier"
        component={Calendrier}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name="clipboard-outline" size={size} color={color} />
          ),
          tabBarActiveTintColor: theme.colors.blue,
          tabBarLabel: (
            <Text style={{ fontFamily: 'Nunito-SemiBold' }}>Calendrier</Text>
          ),
        }}
      />

      <Tab.Screen
        name="Créer"
        component={Creation}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name="ios-brush-outline" size={size} color={color} />
          ),
          tabBarActiveTintColor: theme.colors.blue,
          tabBarLabel: (
            <Text style={{ fontFamily: 'Nunito-SemiBold' }}>Créer</Text>
          ),
        }}
      />

      <Tab.Screen
        name="Carte"
        component={Carte}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name="location-outline" size={size} color={color} />
          ),
          tabBarActiveTintColor: theme.colors.blue,
          tabBarLabel: (
            <Text style={{ fontFamily: 'Nunito-SemiBold' }}>Carte</Text>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name="male-female-outline" size={size} color={color} />
          ),
          tabBarActiveTintColor: theme.colors.blue,
          tabBarLabel: (
            <Text style={{ fontFamily: 'Nunito-SemiBold' }}>Profile</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  font: {
    fontFamily: 'Nunito-SemiBold',
  },
});

export default Maison;
