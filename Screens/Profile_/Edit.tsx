import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import {useSelector} from 'react-redux';
import {selectUser} from '../../Slices/user';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {theme} from '../../Constants';
import {useNavigation} from '@react-navigation/native';

const Edit = () => {
  const navigation = useNavigation();
  const user = useSelector(selectUser);

  const Image_ = () => (
    <View
      style={{
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={user?.image}
        style={{width: 100, height: 100, borderRadius: 50}}
      />
      <RNBounceable style={{marginVertical: 20}}>
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
              color: 'black',
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
            {user?.nom} {user?.prenom}
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
              color: 'black',
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h6,
            }}>
            Email
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h6,
            }}>
            {user?.email}
          </Text>
        </View>
      </View>
      {/* password */}
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
              color: 'black',
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
      </View>
    </View>
  );

  return (
    <View style={styles.screen}>
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
