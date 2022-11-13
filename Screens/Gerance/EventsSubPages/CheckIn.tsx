import {View, Text, useColorScheme, TextInput, Dimensions} from 'react-native';
import React from 'react';
import {colors} from '../../Constants/theme';
import Header from '../../Components/Header';
import RNBounceable from '@freakycoder/react-native-bounceable';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('screen');

const CheckIns = [
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

const CheckIn = ({navigation}: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={{flex: 1, backgroundColor: isDarkMode ? colors.dark : '#F6F6F7'}}>
      <Header
        menu={true}
        value={'Enregistrement'}
        onPress={() => navigation.openDrawer()}
      />
      <View
        style={{
          height: 30,
          width,
          backgroundColor: '#F1F2F2',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: colors.dark,
            fontFamily: 'Nunito-SemiBold',
            fontSize: 13,
          }}>
          Enregistrements sur cet appareil: #1
        </Text>
      </View>
      <View>
        {CheckIns.map((item, index) => (
          <RNBounceable
            style={{
              width,
              height: 80,
              borderBottomColor: '#F1F2F2',
              borderBottomWidth: 1,
              justifyContent: 'center',
            }}
            key={index}
            onPress={() => navigation.navigate('Details', {item: item})}>
            <View style={{marginHorizontal: 15}}>
              <Text
                style={{
                  color: colors.dark,
                  fontFamily: 'Nunito-SemiBold',
                  fontSize: 18,
                }}>
                {item?.name}
              </Text>
              <Text
                style={{
                  color: colors.dark,
                  fontFamily: 'Nunito-SemiBold',
                  fontSize: 16,
                }}>
                {item?.ticket}
              </Text>
            </View>
          </RNBounceable>
        ))}
      </View>
      <View style={{position: 'absolute', bottom: 30, right: 30}}>
        <RNBounceable
          style={{
            backgroundColor: colors.dark,
            height: 60,
            width: 60,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
          }}>
          <Icon name={'ios-qr-code'} size={25} color={colors.white} />
        </RNBounceable>
      </View>
    </View>
  );
};

export default CheckIn;
