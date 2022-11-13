import {View, Text, useColorScheme} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {colors} from '../../Constants/theme';
import Header from '../../Components/Header';

const Drawer = createDrawerNavigator();

const Edit = ({navigation}: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={{flex: 1, backgroundColor: isDarkMode ? colors.dark : '#F6F6F7'}}>
      <Header
        menu={true}
        value={'Éditer'}
        onPress={() => navigation.openDrawer()}
      />
    </View>
  );
};

export default Edit;
