import RNBounceable from '@freakycoder/react-native-bounceable';
import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import VersionInfo from 'react-native-version-info';
import GetAppName from 'react-native-get-app-name';
import {useSelector} from 'react-redux';
import Header from '../Components/Header';
import {theme} from '../Constants';
import {selectUser} from '../Slices/user';
import {useNavigation} from '@react-navigation/native';

const Menu = [
  {name: 'Évaluez nous', to: null},
  {name: 'Suggérer une amélioration', to: null},
  {name: 'Juridique', to: 'Juridique'},
  {name: "Comment utiliser l'application", to: null},
  {name: 'Remerciements', to: null},
];

const Reglages = () => {
  const [appName, setAppName] = useState('');
  const [appVersion, setAppVersion] = useState('');

  const navigation = useNavigation();

  const user = useSelector(selectUser);

  useEffect(() => {
    setAppVersion(VersionInfo.appVersion);
    GetAppName.getAppName(appName => {
      setAppName(appName);
    });
  });

  const Account = () => (
    <View style={{marginVertical: 15, marginHorizontal: 10}}>
      <Text
        style={{
          fontFamily: 'Nunito-Light',
          color: 'black',
          marginBottom: 15,
          fontSize: theme.sizes.h7,
          marginHorizontal: 15,
        }}>
        Compte
      </Text>
      <View>
        <RNBounceable
          style={{
            paddingVertical: 15,
            paddingHorizontal: 15,

            justifyContent: 'center',
            alignItems: 'flex-start',
            borderRadius: 3,
          }}
          onPress={() => navigation.navigate('NotificationSettings')}>
          <Text
            style={{
              color: theme.colors.black,
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h6,
            }}>
            {'Notification Push'}
          </Text>
        </RNBounceable>
      </View>
    </View>
  );

  const About = () => (
    <View style={{marginVertical: 15, marginHorizontal: 10}}>
      <Text
        style={{
          fontFamily: 'Nunito-Light',
          color: 'black',
          marginBottom: 15,
          fontSize: theme.sizes.h5,
          marginHorizontal: 15,
        }}>
        À propos de
      </Text>
      {Menu.map((item, index) => (
        <View key={index}>
          <RNBounceable
            style={{
              paddingVertical: index === 0 ? 10 : 15,
              paddingHorizontal: 15,
              justifyContent: 'center',
              alignItems: 'flex-start',
              borderRadius: 3,
            }}
            // onPress={() => navigation.navigate('Push')}
          >
            <Text
              style={{
                color: theme.colors.black,
                fontFamily: 'Nunito-SemiBold',
                fontSize: theme.sizes.h6,
              }}>
              {item.name}
            </Text>
          </RNBounceable>
        </View>
      ))}
    </View>
  );

  const Profile = () => (
    <View style={{marginVertical: 15, marginHorizontal: 10}}>
      <Text
        style={{
          fontFamily: 'Nunito-Light',
          color: 'black',
          marginBottom: 15,
          fontSize: theme.sizes.h7,
          marginHorizontal: 15,
        }}>
        Compte
      </Text>
      <View>
        <RNBounceable
          style={{
            paddingVertical: 15,
            paddingHorizontal: 15,

            justifyContent: 'center',
            alignItems: 'flex-start',
            borderRadius: 3,
          }}
          // onPress={() => navigation.navigate('Push')}
        >
          <Text
            style={{
              color: theme.colors.black,
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h6,
            }}>
            {user?.email}
          </Text>
        </RNBounceable>
      </View>
    </View>
  );

  const Version = () => (
    <View style={{marginVertical: 15, marginHorizontal: 10}}>
      <Text
        style={{
          fontFamily: 'Nunito-Light',
          color: 'black',
          marginBottom: 5,
          fontSize: theme.sizes.h7,
          marginHorizontal: 15,
        }}>
        {appName}
      </Text>
      <View>
        <RNBounceable
          style={{
            paddingHorizontal: 15,

            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
          <Text
            style={{
              color: theme.colors.black,
              fontFamily: 'Nunito-Light',
              fontSize: theme.sizes.h7,
            }}>
            {appVersion}
          </Text>
        </RNBounceable>
      </View>
    </View>
  );

  return (
    <View style={{flex: 1, backgroundColor: '#F6F6F7'}}>
      <Header value={'Reglages'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Account />
        <About />
        <Profile />
        <Version />
      </ScrollView>
    </View>
  );
};

export default Reglages;
