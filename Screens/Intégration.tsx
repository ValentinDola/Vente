import React from 'react';
import {SafeAreaView, Dimensions, StyleSheet} from "react-native";
import { theme } from "../Constants";

const {width, height} = Dimensions.get('window');

const slides = [
  {
    id: 1,
    image: require('../assets/images/onboarding/image01.png'),
    description: 'Découvrez les événements à venir et à proximité.'
  },
  {
    id: 2,
    image: require('../assets/images/onboarding/image02.gif'),
    description: 'Le web a une fonction de calendrier d\'événements moderne'
  }
];


