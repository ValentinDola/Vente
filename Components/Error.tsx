import {View, Text, Modal, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../Constants';

const {width, height} = Dimensions.get('screen');

export const Error = ({isError, value, modal, setModal}: any) => {
  // const [modal, setModal] = useState(false);
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
            backgroundColor: isError && theme.colors.red,
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
              color: isError && theme.colors.white,
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
