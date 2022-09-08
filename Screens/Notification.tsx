import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import {theme} from '../Constants';

const {width, height} = Dimensions.get('screen');

const Notification = () => {
  const NoNotification = () => (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: height / 1.5,
        width,
      }}>
      <Icon name={'notifications-off-outline'} color={'black'} size={100} />
      <Text
        style={{
          fontFamily: 'Nunito-Light',
          color: 'black',
          fontSize: theme.sizes.h4,
          marginTop: 20,
        }}>
        Pas encore de notification
      </Text>
    </View>
  );

  return (
    <View style={{flex: 1, backgroundColor: '#F6F6F7'}}>
      <Header value={'Notification'} />
      <NoNotification />
    </View>
  );
};

export default Notification;
