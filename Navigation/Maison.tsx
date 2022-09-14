// ADD TODO
// [X] Bottom Navigation

import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, useColorScheme, Dimensions} from 'react-native';
import {CleanTabBar} from 'react-navigation-tabbar-collection';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Explorer from '../Screens/Explorer';
import Calendrier from '../Screens/Calendrier';
import Carte from '../Screens/Carte';
import Profile from '../Screens/Profile';
import Creation from '../Screens/Creation';
import {theme} from '../Constants';
import Tickets from '../Screens/Tickets';

const Tab = createBottomTabNavigator();

const {width, height} = Dimensions.get('screen');

const Maison = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Tab.Navigator
      initialRouteName="Explorer"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => (
        <CleanTabBar
          // maxWidth={width}
          // height={50}
          darkMode={isDarkMode ? true : false}
          colorPalette={{
            light: '#ffffff',
            dark: '#212529',
          }}
          {...props}
        />
      )}>
      <Tab.Screen
        name="Explorer"
        component={Explorer}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon name="search-outline" size={size} color={color} />
          ),
          tabBarActiveTintColor: isDarkMode ? '#FF0000' : theme.colors.blue,
          tabBarLabel: (
            <Text
              style={{
                fontFamily: 'Nunito-SemiBold',
                color: isDarkMode
                  ? theme.colors.antiFlashWhite
                  : theme.colors.blue,
              }}>
              Explorer
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="Calendrier"
        component={Calendrier}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon name="clipboard-outline" size={size} color={color} />
          ),
          tabBarActiveTintColor: isDarkMode ? '#FF0000' : theme.colors.blue,
          tabBarLabel: (
            <Text
              style={{
                fontFamily: 'Nunito-SemiBold',
                color: isDarkMode
                  ? theme.colors.antiFlashWhite
                  : theme.colors.blue,
              }}>
              Calendrier
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="Tickets"
        component={Tickets}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons
              name="ticket-outline"
              size={size}
              color={color}
            />
          ),
          tabBarActiveTintColor: isDarkMode ? '#FF0000' : theme.colors.blue,
          tabBarLabel: (
            <Text
              style={{
                fontFamily: 'Nunito-SemiBold',
                color: isDarkMode
                  ? theme.colors.antiFlashWhite
                  : theme.colors.blue,
              }}>
              Billets
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="Carte"
        component={Carte}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon name="location-outline" size={size} color={color} />
          ),
          tabBarActiveTintColor: isDarkMode ? '#FF0000' : theme.colors.blue,
          tabBarLabel: (
            <Text
              style={{
                fontFamily: 'Nunito-SemiBold',
                color: isDarkMode
                  ? theme.colors.antiFlashWhite
                  : theme.colors.blue,
              }}>
              Carte
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon name="male-female-outline" size={size} color={color} />
          ),
          tabBarActiveTintColor: isDarkMode ? '#FF0000' : theme.colors.blue,
          tabBarLabel: (
            <Text
              style={{
                fontFamily: 'Nunito-SemiBold',
                color: isDarkMode
                  ? theme.colors.antiFlashWhite
                  : theme.colors.blue,
              }}>
              Profile
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Maison;
