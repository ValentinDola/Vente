import {View, Text, TouchableOpacity, useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {theme} from '../Constants/index';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

interface HeaderProps {
  value: string;
}

const Header = (props: HeaderProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  const {value} = props;
  const navigation = useNavigation();

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 20,
          marginHorizontal: 15,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: 'transparent',
            padding: 5,
            borderRadius: 5,
            opacity: 0.8,
          }}>
          <Entypo
            name="chevron-small-left"
            size={24}
            color={isDarkMode ? theme.colors.antiFlashWhite : theme.colors.dark}
          />
        </TouchableOpacity>

        <View>
          <Text
            style={{
              color: isDarkMode
                ? theme.colors.antiFlashWhite
                : theme.colors.black,
              fontFamily: 'Nunito-Light',
              fontSize: 20,
            }}>
            {value}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: 'transparent',
            padding: 5,
            borderRadius: 5,
            opacity: 0.8,
          }}
          onPress={() => navigation.navigate('Explorer')}>
          <Icon
            name={'close-outline'}
            size={24}
            color={isDarkMode ? theme.colors.antiFlashWhite : theme.colors.dark}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
