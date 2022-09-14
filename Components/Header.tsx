import {View, Text, TouchableOpacity, useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {theme} from '../Constants/index';
import Icon from 'react-native-vector-icons/Ionicons';

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
            backgroundColor: theme.colors.grey,
            padding: 5,
            borderRadius: 5,
            opacity: 0.8,
          }}>
          <Icon
            name="ios-chevron-back-outline"
            size={24}
            color={theme.colors.black}
          />
        </TouchableOpacity>

        <View>
          <Text
            style={{
              color: isDarkMode
                ? theme.colors.antiFlashWhite
                : theme.colors.black,
              fontFamily: 'Nunito-Light',
              fontSize: 24,
            }}>
            {value}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: theme.colors.grey,
            padding: 5,
            borderRadius: 5,
            opacity: 0.8,
          }}
          onPress={() => navigation.navigate('Explorer')}>
          <Icon name={'close-outline'} size={24} color={theme.colors.black} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
