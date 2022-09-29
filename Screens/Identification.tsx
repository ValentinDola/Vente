// ADD TODO
// [X] Email registration button.
// [X] Google registration button.
// [X] Tiktok registration button.
// [X] Instagram registration button.
// [X] Navigation panel to Identification page.

import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  useColorScheme,
  TextInput,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Google from '../Components/svgs/google';
import Tiktok from '../Components/svgs/tiktok';
import Instagram from '../Components/svgs/instagram';
import {theme} from '../Constants/index';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {Controller, useForm} from 'react-hook-form';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAuth} from '../Components/authProvider';
import {StackActions, useNavigation} from '@react-navigation/native';
import {Error} from '../Components/Alert';
import {statusCodes} from '@react-native-google-signin/google-signin';

const {width, height} = Dimensions.get('screen');

const Identification = (props: {
  navigation: {navigate: (arg0: string) => void};
}): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const [loading, setLoading] = useState(false);
  const [secure, setSecure] = useState(true);
  const [error, setError] = useState('');
  const [modal, setModal] = useState(false);

  const {signin, GoogleAuth} = useAuth();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors, isDirty},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const login = async (data: any) => {
    const {email, password} = data;
    try {
      setLoading(true);
      await signin(email, password)
        .then(r => navigation.dispatch(StackActions.replace('Explorer')))
        .catch(error => {
          if (error.code === 'auth/invalid-email') {
            setError('auth/invalid-email');
          }

          if (error.code === 'auth/user-disabled') {
            setError('auth/utilisateur désactivé');
          }

          if (error.code === 'auth/user-not-found	') {
            setError('auth/utilisateur-introuvable');
          }

          if (error.code === 'auth/wrong-password') {
            setError('auth/mauvais mot de passe');
          }
        });
    } catch {
      setError('Failed to create an account');
    }

    setTimeout(() => {
      setModal(false);
    }, 1000);

    setLoading(false);
  };

  const googleAuth = async () => {
    try {
      setLoading(true);
      await GoogleAuth()
        .then(r => navigation.dispatch(StackActions.replace('Explorer')))
        .catch(error => {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            setError("l'utilisateur a annulé le flux de connexion");
          }
          if (error.code === statusCodes.IN_PROGRESS) {
            setError(
              "l'opération (par exemple, la connexion) est déjà en cours",
            );
          }

          if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            setError('services de jeu non disponibles ou obsolètes');
          }
        });
    } catch {
      setError('Failed to create an account');
    }

    setTimeout(() => {
      setModal(false);
    }, 1000);

    setLoading(false);
  };

  return (
    <View style={styles.screen}>
      <RNBounceable
        style={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          backgroundColor: theme.colors.bluetiful,
        }}
        onPress={() => navigation.navigate('Explorer')}>
        <Text
          style={{
            fontFamily: 'Nunito-SemiBold',
            color: 'white',
            paddingHorizontal: 10,
            paddingVertical: 6,
          }}>
          Sauter
        </Text>
      </RNBounceable>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 40}}>
        <Text
          style={{
            fontFamily: 'Nunito-Bold',
            color: theme.colors.dark,
            fontSize: theme.sizes.h4,
          }}>
          Identification
        </Text>
      </View>
      <View>
        <View style={{marginTop: 20}}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({
              field: {onChange, onBlur, value},
              fieldState: {error},
            }) => (
              <View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <View style={[styles.container]}>
                    <TextInput
                      style={{
                        fontSize: 15,
                        color: isDarkMode
                          ? theme.colors.antiFlashWhite
                          : 'black',
                        fontFamily: 'Nunito-SemiBold',
                        paddingHorizontal: 10,
                      }}
                      onBlur={onBlur}
                      placeholder={'Email'}
                      placeholderTextColor={theme.colors.dark}
                      onChangeText={onChange}
                      value={value}
                    />
                  </View>
                </View>
              </View>
            )}
            name="email"
          />
        </View>
        <View style={{marginVertical: 5}}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({
              field: {onChange, onBlur, value},
              fieldState: {error},
            }) => (
              <View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <View style={[styles.container]}>
                    <TextInput
                      style={{
                        fontSize: 15,
                        color: isDarkMode
                          ? theme.colors.antiFlashWhite
                          : 'black',
                        fontFamily: 'Nunito-SemiBold',
                        paddingHorizontal: 10,
                      }}
                      onBlur={onBlur}
                      placeholder={'Mot de Passe'}
                      placeholderTextColor={theme.colors.dark}
                      onChangeText={onChange}
                      value={value}
                      secureTextEntry={secure}
                    />
                  </View>
                  <RNBounceable
                    style={{position: 'absolute', right: 30}}
                    onPress={() => setSecure(!secure)}>
                    <Icon
                      name={secure === true ? 'eye-outline' : 'eye-off-outline'}
                      color={'black'}
                      size={18}
                    />
                  </RNBounceable>
                </View>
              </View>
            )}
            name="password"
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <RNBounceable
            style={{
              backgroundColor: isDirty ? theme.colors.dark : theme.colors.white,
              height: 40,
              width: width / 1.5,
              borderRadius: 3,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={handleSubmit(login)}>
            {loading === true ? (
              <ActivityIndicator
                size="small"
                color={isDarkMode ? theme.colors.dark : '#FFFFFF'}
                animating={loading}
                hidesWhenStopped={loading}
              />
            ) : (
              <Text
                style={{
                  fontFamily: 'Nunito-SemiBold',
                  color: isDirty ? theme.colors.white : theme.colors.grey,
                  fontSize: theme.sizes.h6,
                }}>
                Connexion
              </Text>
            )}
          </RNBounceable>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 5,
          }}>
          <Text
            style={{
              color: theme.colors.black,
              fontSize: theme.sizes.h9,
              fontFamily: 'Nunito-SemiBold',
            }}>
            {' '}
            Vous n'avez pas de compte?{' '}
          </Text>
          <RNBounceable
            onPress={() => props.navigation.navigate('Inscription')}>
            <Text
              style={{
                color: theme.colors.blue,
                fontSize: theme.sizes.h9,
                fontFamily: 'Nunito-SemiBold',
              }}>
              Créer un compte
            </Text>
          </RNBounceable>
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <View>
          <RNBounceable style={styles.btn} onPress={() => googleAuth()}>
            <Google />
            <View style={{width: 20}} />
            {loading === true ? (
              <ActivityIndicator
                size="small"
                color={isDarkMode ? theme.colors.dark : '#000000'}
                animating={loading}
                hidesWhenStopped={loading}
              />
            ) : (
              <Text style={styles.btntxt}>Continue avec Google</Text>
            )}
          </RNBounceable>
        </View>
        <View>
          <RNBounceable style={styles.btn}>
            <Tiktok />
            <View style={{width: 20}} />
            <Text style={styles.btntxt}>Continue avec Tiktok</Text>
          </RNBounceable>
        </View>
        <View>
          <RNBounceable style={styles.btn}>
            <Instagram />
            <View style={{width: 20}} />
            <Text style={styles.btntxt}>Continue avec Instagram</Text>
          </RNBounceable>
        </View>
      </View>
      <Error value={error} modal={modal} setModal={setModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 3,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
    paddingHorizontal: 5,
    marginVertical: 10,
  },
  btntxt: {
    fontSize: theme.sizes.h8,
    fontFamily: 'Nunito-SemiBold',
    color: theme.colors.black,
  },
  screen: {
    flex: 1,
    backgroundColor: '#F6F6F7',
  },
  container: {
    backgroundColor: 'white',
    width: '90%',
    height: 45,
    marginVertical: 10,
    borderRadius: 3,
  },
});

export default Identification;
