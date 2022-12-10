import {
  View,
  Text,
  StyleSheet,
  Image,
  useColorScheme,
  DevSettings,
} from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import {useSelector} from 'react-redux';
import {selectUser} from '../../Slices/user';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {theme} from '../../Constants';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../Components/authProvider';
import {launchImageLibrary} from 'react-native-image-picker';

const Edit = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const navigation = useNavigation();
  const user = useSelector(selectUser);

  const {currentUser, updateProfile} = useAuth();

  const Sauvegarde = async () => {
    const options = {
      mediaType: 'photo',
    };
    await launchImageLibrary(options)
      .then(r =>
        r.assets?.map(async item => {
          console.log(item);
          try {
            const update = {
              photoURL: item.uri,
            };
            await updateProfile(update);
            DevSettings.reload();
          } catch {
            console.log('Error');
          }
        }),
      )
      .catch(error => console.log(error));
  };

  const Image_ = () => (
    <View
      style={{
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {currentUser?.photoURL === null ? (
        <RNBounceable
          style={{
            backgroundColor: theme.colors.dark,
            width: 100,
            height: 100,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: theme.colors.white,
              fontFamily: 'Nunito-SemiBold',
              fontSize: 55,
            }}>
            {currentUser?.email.slice(0, 1).toUpperCase()}
          </Text>
        </RNBounceable>
      ) : (
        <Image
          source={{uri: currentUser?.photoURL}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
      )}
      <RNBounceable style={{marginVertical: 20}} onPress={() => Sauvegarde()}>
        <Text
          style={{
            color: theme.colors.blue,
            fontFamily: 'Nunito-Bold',
            fontSize: theme.sizes.h6,
          }}>
          Mettre à jour l'image
        </Text>
      </RNBounceable>
    </View>
  );

  const UserInfromation = () => (
    <View style={{marginVertical: 20, marginHorizontal: 30}}>
      {/* nom et prenom */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}>
        <View>
          <Text
            style={{
              color: isDarkMode ? theme.colors.antiFlashWhite : 'black',
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h6,
            }}>
            Nom et Prenom
          </Text>
        </View>
        <RNBounceable onPress={() => navigation.navigate('EditNomEtPrenom')}>
          <Text
            style={{
              color: theme.colors.blue,
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h6,
            }}>
            {currentUser?.displayName === null
              ? 'Nom'
              : currentUser?.displayName}
          </Text>
        </RNBounceable>
      </View>
      {/* email */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}>
        <View>
          <Text
            style={{
              color: isDarkMode ? theme.colors.antiFlashWhite : 'black',
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h6,
            }}>
            Email
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: isDarkMode ? theme.colors.antiFlashWhite : 'black',
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h6,
            }}>
            {currentUser?.email}
          </Text>
        </View>
      </View>
      {/* password */}
      {/* <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}>
        <View>
          <Text
            style={{
              color: isDarkMode ? theme.colors.antiFlashWhite : 'black',
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h6,
            }}>
            Mot de passe
          </Text>
        </View>
        <RNBounceable onPress={() => navigation.navigate('EditMotDePasse')}>
          <Text
            style={{
              color: theme.colors.blue,
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h6,
            }}>
            Mettre à jour le MP
          </Text>
        </RNBounceable>
      </View> */}
    </View>
  );

  return (
    <View
      style={[
        styles.screen,
        {backgroundColor: isDarkMode ? theme.colors.dark : '#F6F6F7'},
      ]}>
      <Header value={'Paramètres du compte'} />
      <Image_ />
      <UserInfromation />
    </View>
  );
};

export default Edit;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F6F6F7',
  },
});
