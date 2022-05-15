import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Input from '../Components/Input';
import Button from '../Components/Button';
import {theme} from '../Constants/index';
import google from '../assets/icons/icons8-google.svg';
import tiktok from '../assets/icons/icons8-tiktok.svg';

const Identification = () => {
  const Forms = () => {
    return (
      <View style={{marginVertical: 30}}>
        <Input label={'Email'} />
        <Input label={'Passe'} />
      </View>
    );
  };

  return (
    <View style={[styles.container]}>
      <Text style={[styles.introduction]}>Identification</Text>

      <Forms />
      <Text
        style={{
          position: 'relative',
          bottom: 10,
          textAlign: 'right',
          right: 20,
          marginTop: 1,
          fontSize: theme.sizes.h8,
          fontFamily: 'Nunito-SemiBold',
          color: theme.colors.black,
        }}>
        Mot de passe oublié ?
      </Text>
      <Button text={"S'identifier"} onPress={() => console.log('login')} />
      <Text
        style={{
          fontFamily: 'Nunito-SemiBold',
          fontSize: theme.sizes.h4,
          textAlign: 'center',
          color: theme.colors.black,
        }}>
        Ou
      </Text>
      <Button
        text={'Connectez-vous avec Google'}
        onPress={() => console.log('login')}
        btnStyle={{backgroundColor: theme.colors.grey}}
        btntxtStyle={{fontSize: 18, color: theme.colors.black}}
        uri={require('../assets/icons/google.png')}
      />
      <Button
        text={'Connectez-vous avec Tiktok'}
        onPress={() => console.log('login')}
        btnStyle={{backgroundColor: theme.colors.grey}}
        btntxtStyle={{fontSize: 18, color: theme.colors.black}}
        uri={require('../assets/icons/tiktok.png')}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 25,
          marginTop: 10,
        }}>
        <Text
          style={{
            color: theme.colors.black,
            fontSize: theme.sizes.h6,
            fontFamily: 'Nunito-SemiBold',
          }}>
          Vous n'avez pas de compte ?{' '}
        </Text>
        <Text
          style={{
            color: theme.colors.blue,
            fontSize: theme.sizes.h6,
            fontFamily: 'Nunito-SemiBold',
          }}
          onPress={() => console.log('Inscription')}>
          Inscrivez-vous
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  introduction: {
    fontSize: theme.sizes.h3,
    fontFamily: 'Nunito-SemiBold',
    color: theme.colors.black,
    marginTop: 88,
    marginLeft: 28,
    height: 30,
  },
});

export default Identification;
