import {View, Text, TouchableOpacity, useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {colors, sizes} from '../Constants/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import RNBounceable from '@freakycoder/react-native-bounceable';
import Feather from 'react-native-vector-icons/Feather';
import {theme} from '../Constants';

interface HeaderProps {
  value: string;
  name: string;
  second: boolean;
  menu: boolean;
  back: boolean;
  onPress: () => void;
  backPress: () => void;
}

const GHeader = (props: HeaderProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const {value, name, onPress, second, menu, back, backPress} = props;

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: theme.colors.bluetiful,
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
      }}>
      {menu && (
        <RNBounceable
          style={{
            backgroundColor: 'transparent',
            padding: 8,
            borderRadius: 5,
            opacity: 0.8,
            width: 50,
          }}
          onPress={onPress}>
          <Feather
            name={'bar-chart-2'}
            size={25}
            color={colors.antiFlashWhite}
            style={{marginTop: 8, transform: [{rotate: '90deg'}]}}
          />
        </RNBounceable>
      )}

      {back && (
        <RNBounceable
          style={{
            backgroundColor: 'transparent',
            padding: 8,
            borderRadius: 5,
            opacity: 0.8,
            width: 50,
          }}
          onPress={backPress}>
          <Feather
            name={'chevron-left'}
            size={25}
            color={colors.antiFlashWhite}
          />
        </RNBounceable>
      )}

      <Text
        style={{
          color: colors.antiFlashWhite,
          fontFamily: 'Nunito-Bold',
          fontSize: sizes.h2,
          marginLeft: 10,
        }}>
        {value}
      </Text>
    </View>
  );
};

export default GHeader;
