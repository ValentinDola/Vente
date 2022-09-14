import React, {useState} from 'react';
import {Image, Text, View, Switch, useColorScheme} from 'react-native';
import {useSelector} from 'react-redux';
import Header from '../Components/Header';
import {theme} from '../Constants';
import {selectUser} from '../Slices/user';

const Comptes = [
  {name: 'Google', value: true},
  {name: 'Tiktok', value: false},
  {name: 'Instagram', value: false},
];

const Compte = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [google, setGoogle] = useState(true);
  const [tiktok, setTiktok] = useState(false);
  const [instagram, setInstagram] = useState(false);

  const toggleGoogleSwitch = () => setGoogle(previousState => !previousState);
  const toggleTiktokSwitch = () => setTiktok(previousState => !previousState);
  const toggleInstagramSwitch = () =>
    setInstagram(previousState => !previousState);
  const user = useSelector(selectUser);

  const User = () => (
    <View
      style={{
        marginTop: 55,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Image
          source={user?.image}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
      </View>
      <View style={{marginVertical: 15}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              color: isDarkMode
                ? theme.colors.antiFlashWhite
                : theme.colors.black,
              fontFamily: 'Nunito-Bold',
              fontSize: 16,
            }}>
            {user?.nom} {user?.prenom}
          </Text>
          <Text
            style={{
              color: '#D1D3D4',
              fontFamily: 'Nunito-Bold',
              fontSize: 16,
              marginTop: 10,
            }}>
            {user?.email}
          </Text>
        </View>
      </View>
    </View>
  );

  const GoogleSwitch = () => (
    <View style={{paddingVertical: 10}}>
      <View
        style={{
          backgroundColor: isDarkMode ? 'transparent' : theme.colors.white,
          paddingVertical: 15,
          paddingHorizontal: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 3,
        }}>
        <Text
          style={{
            color: isDarkMode
              ? theme.colors.antiFlashWhite
              : theme.colors.black,
            fontFamily: 'Nunito-SemiBold',
            fontSize: theme.sizes.h6,
          }}>
          Connectez-vous avec Google
        </Text>
        <Switch
          value={google}
          onValueChange={toggleGoogleSwitch}
          trackColor={{false: '#767577', true: theme.colors.bluetiful}}
          thumbColor={google ? theme.colors.blue : '#f4f3f4'}
        />
      </View>
    </View>
  );

  const TiktokSwitch = () => (
    <View style={{paddingVertical: 10}}>
      <View
        style={{
          backgroundColor: isDarkMode ? 'transparent' : theme.colors.white,
          paddingVertical: 15,
          paddingHorizontal: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 3,
        }}>
        <Text
          style={{
            color: isDarkMode
              ? theme.colors.antiFlashWhite
              : theme.colors.black,
            fontFamily: 'Nunito-SemiBold',
            fontSize: theme.sizes.h6,
          }}>
          Connectez-vous avec Tiktok
        </Text>
        <Switch
          value={tiktok}
          onValueChange={toggleTiktokSwitch}
          trackColor={{false: '#767577', true: theme.colors.bluetiful}}
          thumbColor={tiktok ? theme.colors.blue : '#f4f3f4'}
        />
      </View>
    </View>
  );

  const InstagramSwitch = () => (
    <View style={{paddingVertical: 10}}>
      <View
        style={{
          backgroundColor: isDarkMode ? 'transparent' : theme.colors.white,
          paddingVertical: 15,
          paddingHorizontal: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 3,
        }}>
        <Text
          style={{
            color: isDarkMode
              ? theme.colors.antiFlashWhite
              : theme.colors.black,
            fontFamily: 'Nunito-SemiBold',
            fontSize: theme.sizes.h6,
          }}>
          Connectez-vous avec Instagram
        </Text>
        <Switch
          value={instagram}
          onValueChange={toggleInstagramSwitch}
          trackColor={{false: '#767577', true: theme.colors.bluetiful}}
          thumbColor={instagram ? theme.colors.blue : '#f4f3f4'}
        />
      </View>
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? theme.colors.dark : '#F6F6F7',
      }}>
      <Header value={'Compte lié'} />
      <User />
      <GoogleSwitch />
      <TiktokSwitch />
      <InstagramSwitch />
    </View>
  );
};

export default Compte;
