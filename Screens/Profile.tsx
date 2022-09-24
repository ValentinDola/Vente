// PROFILE TODO
// [X] Build the Header component
// [X] Build the User detail component
// [] Build the Posts component
// [X] Build the account component

import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  ScrollView,
  useColorScheme,
} from 'react-native';
import OctIcon from 'react-native-vector-icons/Octicons';
import {theme} from '../Constants/index';
import {useSelector, useDispatch} from 'react-redux';
import {setUser, selectUser} from '../Slices/user';
import {useNavigation, StackActions} from '@react-navigation/native';
import RNBounceable from '@freakycoder/react-native-bounceable';
import Header from '../Components/Header';
import Entypo from 'react-native-vector-icons/Entypo';

const {width, height} = Dimensions.get('screen');

const Profile = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    if (user.value === false) {
      StackActions.replace('Inscription');
    }
  });

  const navigation = useNavigation();

  const user = useSelector(selectUser);

  return (
    <View
      style={[
        styles.screen,
        {backgroundColor: isDarkMode ? theme.colors.dark : '#F6F6F7'},
      ]}>
      <Header />

      {/* User detail */}
      <View
        style={{
          marginTop: 55,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={user?.image}
            style={{width: 100, height: 100, borderRadius: 50}}
          />
          <View style={{width: 20}} />
          <RNBounceable
            style={{
              height: 40,
              width: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.navigate('Edit')}>
            <OctIcon
              name={'pencil'}
              size={20}
              color={isDarkMode ? theme.colors.antiFlashWhite : 'black'}
            />
          </RNBounceable>
        </View>
        <View
          style={{
            marginVertical: 15,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 30,
            }}>
            <Text
              style={{
                color: isDarkMode
                  ? theme.colors.antiFlashWhite
                  : theme.colors.black,
                fontFamily: 'Nunito-Black',
                fontSize: 30,
              }}>
              {user?.nom} {user?.prenom}
            </Text>
            <Text
              style={{
                color: '#D1D3D4',
                fontFamily: 'Nunito-Bold',
                fontSize: 18,
              }}>
              {user?.email}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: theme.colors.blue, fontFamily: 'Nunito-Bold'}}>
            {user?.billets}
          </Text>
          <Text style={{color: theme.colors.blue, fontFamily: 'Nunito-Bold'}}>
            Billets
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#F6F6F7',

    flex: 1,
  },
});

export default Profile;
