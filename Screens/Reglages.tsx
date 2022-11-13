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
import VersionInfo from 'react-native-version-info';
import {useAuth} from '../Components/authProvider';

const {width, height} = Dimensions.get('screen');

// const Menu = [
//   {title: 'Centre de notification', to: 'Notification'},
//   {title: 'Compte lié', to: 'Compte'},
//   {title: 'Gérer les événements', to: 'Gérance'},
//   {title: 'Réglages', to: 'Reglages'},
// ];

const Menu = [
  {name: 'Évaluez nous', to: null},
  {name: 'Suggérer une amélioration', to: null},
  {name: 'Juridique', to: 'Juridique'},
  {name: "Comment utiliser l'application", to: null},
  {name: 'Remerciements', to: null},
];

const Reglages = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    if (user.value === false) {
      StackActions.replace('Inscription');
    }
  });

  const [appName, setAppName] = React.useState('Vente');
  const [appVersion, setAppVersion] = React.useState('');

  useEffect(() => {
    setAppVersion(VersionInfo.appVersion);
  });

  const navigation = useNavigation();

  const user = useSelector(selectUser);
  const {currentUser, logout} = useAuth();

  const Deconnexion = () => {
    try {
      logout();
      navigation.dispatch(StackActions.replace('Identification'));
    } catch {
      console.log('Logout error');
    }
  };

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
                color: isDarkMode
                  ? theme.colors.antiFlashWhite
                  : theme.colors.black,
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

  const AccountStatus = () => (
    <View style={{marginVertical: 5, marginHorizontal: 10, marginTop: 30}}>
      <Text
        style={{
          fontFamily: 'Nunito-Light',
          color: isDarkMode ? theme.colors.antiFlashWhite : 'black',
          marginBottom: 15,
          fontSize: theme.sizes.h7,
          marginHorizontal: 15,
        }}>
        Compte Navigateur
      </Text>
      <RNBounceable style={{marginVertical: 5, marginHorizontal: 15}}>
        <Text
          style={{
            color: isDarkMode
              ? theme.colors.antiFlashWhite
              : theme.colors.black,
            fontFamily: 'Nunito-SemiBold',
            fontSize: theme.sizes.h6,
          }}>
          Accéder à l'application de l'organisateur
        </Text>
      </RNBounceable>
    </View>
    // <View
    //   style={{
    //     marginVertical: 10,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   }}>
    //   <View style={{marginVertical: 15}}>
    //     <Text
    //       style={{
    //         color: isDarkMode ? theme.colors.antiFlashWhite : theme.colors.dark,
    //         fontFamily: 'Nunito-SemiBold',
    //         fontSize: theme.sizes.h5,
    //       }}>
    //       Compte navigateur
    //     </Text>
    //   </View>
    //   <View>
    //     <RNBounceable
    //       style={{
    //         backgroundColor: isDarkMode
    //           ? theme.colors.antiFlashWhite
    //           : theme.colors.dark,
    //         borderRadius: 5,
    //         paddingVertical: 10,
    //         paddingHorizontal: 30,
    //       }}>
    //       <Text
    //         style={{
    //           color: isDarkMode ? theme.colors.dark : theme.colors.white,
    //           fontFamily: 'Nunito-SemiBold',
    //           fontSize: theme.sizes.h6,
    //         }}>
    //         Gérance
    //       </Text>
    //     </RNBounceable>
    //   </View>
    // </View>
  );

  const ProfileButton = () => (
    <RNBounceable
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 30,
      }}
      onPress={() => navigation.navigate('Profile')}>
      {currentUser?.photoURL === null ? (
        <RNBounceable
          style={{
            backgroundColor: theme.colors.dark,
            width: 55,
            height: 55,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: theme.colors.white,
              fontFamily: 'Nunito-SemiBold',
              fontSize: 25,
            }}>
            {currentUser?.email.slice(0, 1).toUpperCase()}
          </Text>
          {/* <Image
          source={user?.data?.image}
          style={{width: 55, height: 55, borderRadius: 50}}
        /> */}
        </RNBounceable>
      ) : (
        <Image
          source={{uri: currentUser?.photoURL}}
          style={{width: 55, height: 55, borderRadius: 50}}
        />
      )}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: width - 100,
        }}>
        <View style={{marginLeft: 10}}>
          <Text
            style={{
              color: isDarkMode
                ? theme.colors.antiFlashWhite
                : theme.colors.dark,
              fontFamily: 'Nunito-Bold',
              fontSize: theme.sizes.h7,
            }}>
            {currentUser?.displayName === null
              ? currentUser.email
              : currentUser?.displayName}
          </Text>
          <Text
            style={{
              color: '#BCBEC0',
              fontFamily: 'Nunito-Bold',
              fontSize: theme.sizes.h9,
              marginTop: 5,
            }}>
            Voir le profil
          </Text>
        </View>
        <View>
          <Entypo
            name={'chevron-small-right'}
            size={22}
            color={
              isDarkMode ? theme.colors.antiFlashWhite : theme.colors.black
            }
          />
        </View>
      </View>
    </RNBounceable>
  );

  const Account = () => (
    <View style={{marginVertical: 15, marginHorizontal: 10}}>
      <Text
        style={{
          fontFamily: 'Nunito-Bold',
          color: isDarkMode ? theme.colors.antiFlashWhite : 'black',
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
          // onPress={() => navigation.navigate('NotificationSettings')}
        >
          <Text
            style={{
              color: isDarkMode
                ? theme.colors.antiFlashWhite
                : theme.colors.black,
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
    <View style={{marginVertical: 15, marginHorizontal: 10, marginTop: 30}}>
      <Text
        style={{
          fontFamily: 'Nunito-Light',
          color: isDarkMode ? theme.colors.antiFlashWhite : 'black',
          marginBottom: 15,
          fontSize: theme.sizes.h7,
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
                color: isDarkMode
                  ? theme.colors.antiFlashWhite
                  : theme.colors.black,
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
    <View style={{marginVertical: 5, marginHorizontal: 10, marginTop: 30}}>
      <Text
        style={{
          fontFamily: 'Nunito-Light',
          color: isDarkMode ? theme.colors.antiFlashWhite : 'black',
          marginBottom: 15,
          fontSize: theme.sizes.h7,
          marginHorizontal: 15,
        }}>
        Compte
      </Text>
      <View style={{marginVertical: 5, marginHorizontal: 15}}>
        <Text
          style={{
            color: isDarkMode
              ? theme.colors.antiFlashWhite
              : theme.colors.black,
            fontFamily: 'Nunito-SemiBold',
            fontSize: theme.sizes.h6,
          }}>
          {currentUser?.email}
        </Text>
      </View>
    </View>
  );

  const Version = () => (
    <View style={{marginVertical: 15, marginHorizontal: 10, marginBottom: 100}}>
      <Text
        style={{
          fontFamily: 'Nunito-Light',
          color: isDarkMode ? theme.colors.antiFlashWhite : 'black',
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
              color: isDarkMode
                ? theme.colors.antiFlashWhite
                : theme.colors.black,
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
    <View
      style={[
        styles.screen,
        {backgroundColor: isDarkMode ? theme.colors.dark : '#F6F6F7'},
      ]}>
      <Header value={'Réglages'} />
      <ScrollView>
        <AccountStatus />
        <ProfileButton />
        <Profile />

        <About />
        <Version />
      </ScrollView>

      <View
        style={{
          backgroundColor: isDarkMode ? theme.colors.white : theme.colors.white,
          height: 60,
          width,

          marginTop: 5,
          position: 'absolute',
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        <RNBounceable
          style={{marginHorizontal: 15}}
          onPress={() => Deconnexion()}>
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

export default Reglages;
