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
} from 'react-native';
import OctIcon from 'react-native-vector-icons/Octicons';
import {theme} from '../Constants/index';
import {useSelector, useDispatch} from 'react-redux';
import {setUser, selectUser} from '../Slices/user';
import {useNavigation, StackActions} from '@react-navigation/native';
import RNBounceable from '@freakycoder/react-native-bounceable';

const {width, height} = Dimensions.get('screen');

const Menu = [
  {title: 'Centre de notification', to: 'Notification'},
  {title: 'Compte lié', to: 'Compte'},
  {title: 'Gérer les événements', to: 'Gérance'},
  {title: 'Réglages', to: 'Reglages'},
];

const Profile = () => {
  useEffect(() => {
    if (user.value === false) {
      StackActions.replace('Inscription');
    }
  });

  const navigation = useNavigation();

  const user = useSelector(selectUser);

  const List = () => (
    <View style={{marginVertical: 15, marginHorizontal: 15}}>
      {Menu.map((item, index) => (
        <View key={index} style={{paddingVertical: 5}}>
          <RNBounceable
            style={{
              // borderBottomColor: 'black',
              // borderBottomWidth: 0.5,
              // borderTopColor: 'black',
              // borderTopWidth: 0.5,
              paddingVertical: 15,
              paddingHorizontal: 15,
              justifyContent: 'center',
              alignItems: 'flex-start',
              borderRadius: 3,
            }}
            onPress={() => navigation.navigate(item?.to)}>
            <Text
              style={{
                color: theme.colors.black,
                fontFamily: 'Nunito-SemiBold',
                fontSize: theme.sizes.h6,
              }}>
              {item.title}
            </Text>
            {/* <Icon name={'caret-forward-outline'} color={'black'} size={18} /> */}
          </RNBounceable>
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.screen}>
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
            <OctIcon name={'pencil'} size={20} color={'black'} />
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
                color: theme.colors.black,
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
        {/* <View style={{ justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ color: theme.colors.blue, fontFamily: 'Nunito-Bold' }} >{user?.likes}</Text>
          <Text style={{ color: theme.colors.blue, fontFamily: 'Nunito-Bold' }} >Likes</Text>
        </View> */}
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: theme.colors.blue, fontFamily: 'Nunito-Bold'}}>
            {user?.billets}
          </Text>
          <Text style={{color: theme.colors.blue, fontFamily: 'Nunito-Bold'}}>
            Billets
          </Text>
        </View>
        {/* <View style={{ justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ color: theme.colors.blue, fontFamily: 'Nunito-Bold' }} >{user?.abonner}</Text>
          <Text style={{ color: theme.colors.blue, fontFamily: 'Nunito-Bold' }} >abonnee</Text>
        </View> */}
      </View>
      {/* Dashboard */}
      <List />
      {/* My account */}
      <View
        style={{
          backgroundColor: theme.colors.white,
          height: 60,
          width,
          marginHorizontal: 15,
          marginTop: 5,
          position: 'absolute',
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        <RNBounceable style={{marginTop: 10}}>
          <Text
            style={{
              color: 'red',
              fontFamily: 'Nunito-Bold',
              fontSize: theme.sizes.h6,
            }}>
            Se déconnecter?
          </Text>
        </RNBounceable>
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
