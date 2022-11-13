import {View, Text, useColorScheme, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../Constants/theme';
import Header from '../../Components/Header';
import RNBounceable from '@freakycoder/react-native-bounceable';
import Feather from 'react-native-vector-icons/Feather';

const {width, height} = Dimensions.get('screen');

const Sell = ({route, navigation}: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={{flex: 1, backgroundColor: isDarkMode ? colors.dark : '#F6F6F7'}}>
      <Header
        menu={true}
        value={'Billet'}
        onPress={() => navigation.openDrawer()}
      />
      <View>
        <RNBounceable
          style={{
            backgroundColor: 'white',
            height: height / 4.3,
            width,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomColor: '#F1F2F2',
            borderBottomWidth: 1,
          }}>
          <View>
            <Text
              style={{
                fontFamily: 'Nunito-Black',
                fontSize: 50,
                color: colors.dark,
              }}>
              0
            </Text>
            <Text
              style={{
                fontFamily: 'Nunito-SemiBold',
                fontSize: 20,
                color: colors.dark,
              }}>
              Frais
            </Text>
          </View>
        </RNBounceable>
        <View
          style={{
            backgroundColor: colors.white,
            height: 80,
            width,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <RNBounceable
            style={{
              position: 'absolute',
              width: 60,
              height: 80,
              backgroundColor: colors.white,
              justifyContent: 'center',
              alignItems: 'center',
              borderRightColor: '#F1F2F2',
              borderRightWidth: 1,
            }}
            onPress={() => console.log('New')}>
            <Feather name={'plus'} color={colors.dark} size={22} />
          </RNBounceable>

          <View style={{marginLeft: 80}}>
            <Text
              style={{
                fontFamily: 'Nunito-SemiBold',
                fontSize: 18,
                color: colors.dark,
                marginVertical: 3,
              }}>
              Coding
            </Text>
            <Text
              style={{
                fontFamily: 'Nunito-SemiBold',
                fontSize: 13,
                color: colors.dark,
              }}>
              Maximum d'un par commande.
            </Text>
          </View>

          <View style={{marginRight: 20}}>
            <Text
              style={{
                fontFamily: 'Nunito-SemiBold',
                fontSize: 13,
                color: colors.dark,
              }}>
              Gratuit
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Sell;
