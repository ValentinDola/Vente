import {View, Text, useColorScheme, Dimensions} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {colors} from '../../Constants/theme';
import Header from '../../Components/Header';
import RNBounceable from '@freakycoder/react-native-bounceable';

const {width, height} = Dimensions.get('screen');

const Orders_ = [
  {
    name: 'Dao, Eric',
    ticket: 'Coding',
    email: 'daoeric@gmail.com',
    orderNumber: 8393734938,
    sale: 'enligne',
    date: new Date().toUTCString(),
    payement: 'gratuit',
    deliveryMethod: 'eTicket',
    deliveryState: 'rempli',
  },
  {
    name: 'Daochina, John',
    ticket: 'Coding',
    email: 'daochinajohn@gmail.com',
    orderNumber: 459373455,
    sale: 'enligne',
    date: new Date().toUTCString(),
    payement: 'gratuit',
    deliveryMethod: 'eTicket',
    deliveryState: 'rempli',
  },
  {
    name: 'Koleero, Apes',
    ticket: 'Coding',
    email: 'koleeroapes@gmail.com',
    orderNumber: 8393734938,
    sale: 'enligne',
    date: new Date().toUTCString(),
    payement: 'gratuit',
    deliveryMethod: 'eTicket',
    deliveryState: 'rempli',
  },
  {
    name: 'Gorilla, Nfttoyou',
    ticket: 'Coding',
    email: 'gorillanfttoyou@gmail.com',
    orderNumber: 8393734938,
    sale: 'enligne',
    date: new Date().toUTCString(),
    payement: 'gratuit',
    deliveryMethod: 'eTicket',
    deliveryState: 'rempli',
  },
];

const Orders = ({navigation}: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={{flex: 1, backgroundColor: isDarkMode ? colors.dark : '#F6F6F7'}}>
      <Header
        menu={true}
        value={'Commandes'}
        onPress={() => navigation.openDrawer()}
      />

      <View>
        {Orders_.map((item, index) => (
          <RNBounceable
            style={{
              width,
              height: 100,
              borderBottomColor: '#F1F2F2',
              borderBottomWidth: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}
            key={index}
            onPress={() => navigation.navigate('ODetails', {item: item})}>
            <View style={{marginHorizontal: 15}}>
              <Text
                style={{
                  color: colors.dark,
                  fontFamily: 'Nunito-Bold',
                  fontSize: 20,
                }}>
                {item?.name}
              </Text>
              <Text
                style={{
                  color: colors.dark,
                  fontFamily: 'Nunito-SemiBold',
                  fontSize: 15,
                  marginVertical: 8,
                }}>
                {item?.email}
              </Text>
              <Text
                style={{
                  color: colors.dark,
                  fontFamily: 'Nunito-SemiBold',
                  fontSize: 15,
                }}>
                {`#${item?.orderNumber}`}
              </Text>
            </View>
            <View style={{marginHorizontal: 15}}>
              <Text
                style={{
                  color: colors.dark,
                  fontFamily: 'Nunito-SemiBold',
                  fontSize: 15,
                  textTransform: 'capitalize',
                }}>
                {`${item?.payement}`}
              </Text>
            </View>
          </RNBounceable>
        ))}
      </View>
    </View>
  );
};

export default Orders;
