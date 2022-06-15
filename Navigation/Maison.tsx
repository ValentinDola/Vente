import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View} from 'react-native';
import {CleanTabBar} from 'react-navigation-tabbar-collection';
import Icon from 'react-native-vector-icons/Ionicons';
import Explorer from '../Screens/Explorer';
import Calendrier from '../Screens/Calendrier';
import Carte from '../Screens/Carte';
import Profile from '../Screens/Profile';

const Tab = createBottomTabNavigator();

const Maison = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Maison"
        tabBar={props => (
          <CleanTabBar
            maxWidth={0}
            height={0}
            darkMode={false}
            colorPalette={{}}
            {...props}
          />
        )}>
        <Tab.Screen
          name="Explorer"
          component={Explorer}
          options={{
            icon: ({focused, color, size}) => (
              <Icon name="md-calendar" size={size} color={color} />
            ),
            color: 'primary',
          }}
        />

        <Tab.Screen
          name="Calendrier"
          component={Calendrier}
          options={{
            icon: ({focused, color, size}) => (
              <Icon name="md-calendar" size={size} color={color} />
            ),
            color: 'primary',
          }}
        />

        <Tab.Screen
          name="Carte"
          component={Carte}
          options={{
            icon: ({focused, color, size}) => (
              <Icon name="md-calendar" size={size} color={color} />
            ),
            color: 'primary',
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            icon: ({focused, color, size}) => (
              <Icon name="md-calendar" size={size} color={color} />
            ),
            color: 'primary',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Maison;
