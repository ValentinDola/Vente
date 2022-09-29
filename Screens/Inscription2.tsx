import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {theme} from '../Constants';
import RNBounceable from '@freakycoder/react-native-bounceable';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('screen');

const Inscription2 = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#F6F6F7'}}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 40}}>
        <Text
          style={{
            fontFamily: 'Nunito-Bold',
            color: theme.colors.dark,
            fontSize: theme.sizes.h4,
          }}>
          Image de profil
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 100,
        }}>
        <RNBounceable
          style={{
            backgroundColor: 'transparent',
            height: 150,
            width: 150,
            borderRadius: 100,
            borderColor: theme.colors.dark,
            borderWidth: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}></RNBounceable>
        <Text
          style={{
            fontFamily: 'Nunito-SemiBold',
            color: 'black',
            marginTop: 20,
          }}>
          Choisissez votre photo de profil
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 150,
        }}>
        <RNBounceable
          style={{
            backgroundColor: theme.colors.dark,
            height: 40,
            width: width / 1.5,
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Nunito-SemiBold',
              color: 'white',
              fontSize: theme.sizes.h6,
            }}>
            Mise à jour
          </Text>
        </RNBounceable>
      </View>
    </View>
  );
};

export default Inscription2;
