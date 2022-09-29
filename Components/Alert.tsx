import {View, Text, Modal, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../Constants';

const {width, height} = Dimensions.get('screen');

export const Error = ({value, modal, setModal}: any) => {
  return (
    <Modal
      animated
      animationType="fade"
      visible={modal}
      transparent
      onRequestClose={() => setModal(false)}>
      <View
        style={{
          backgroundColor: 'transparent',
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: theme.colors.red,
            width: width - 20,
            height: 40,
            borderRadius: 3,
            // marginTop: 15,
            position: 'absolute',
            bottom: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: theme.colors.white,
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h7,
            }}>
            {value}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export const Confirmation = ({value, modal, setModal}: any) => {
  return (
    <Modal
      animated
      animationType="fade"
      visible={modal}
      transparent
      onRequestClose={() => setModal(false)}>
      <View
        style={{
          backgroundColor: 'transparent',
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#35D073',
            width: width - 20,
            height: 40,
            borderRadius: 3,
            // marginTop: 15,
            position: 'absolute',
            bottom: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: theme.colors.white,
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h7,
            }}>
            {value}
          </Text>
        </View>
      </View>
    </Modal>
  );
};
