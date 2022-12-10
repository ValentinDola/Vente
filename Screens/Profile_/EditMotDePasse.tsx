import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  TextInput,
  useColorScheme,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../Components/Header';
import {theme} from '../../Constants';
import {Controller, useForm} from 'react-hook-form';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {useDispatch, useSelector} from 'react-redux';
import {selectUser, setNom, setPrenom} from '../../Slices/user';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {getDefaultValues} from '@apollo/client/utilities';

const {width, height} = Dimensions.get('screen');

const EditMotDePasse = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [loading, setLoading] = useState(false);
  const [actualSecure, setActualSecure] = useState(true);
  const [newSecure, setNewSecure] = useState(true);
  const [confirmationSecure, setConfirmationSecure] = useState(true);

  const user = useSelector(selectUser);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors, isDirty},
  } = useForm({
    defaultValues: {
      actual: '',
      new: '',
      confirmation: '',
    },
  });

  const Introduction = () => (
    <View style={{marginVertical: 20, marginHorizontal: 15}}>
      <Text
        style={{
          fontFamily: 'Nunito-Bold',
          color: isDarkMode ? theme.colors.antiFlashWhite : 'black',
          fontSize: theme.sizes.h3,
        }}>
        Changer le mot de passe
      </Text>
    </View>
  );

  const ButtomBarSection = () => {
    return (
      <View
        style={{
          height: 60,
          width,
          borderRadius: 10,
          opacity: 0.9,
          position: 'absolute',
          backgroundColor: isDarkMode ? '#2F3538' : theme.colors.white,
          bottom: 0,
          justifyContent: 'center',
        }}>
        <View
          style={{
            marginHorizontal: 20,
          }}>
          {
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <RNBounceable
                style={{
                  borderRadius: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: isDirty
                    ? theme.colors.blue
                    : theme.colors.antiFlashWhite,
                  width: width / 1.1,
                  height: 40,
                }}>
                {loading == true ? (
                  <ActivityIndicator
                    size="small"
                    color="#FFFFFF"
                    animating={loading}
                    hidesWhenStopped={loading}
                  />
                ) : (
                  <Text
                    style={{
                      color: isDirty ? theme.colors.white : theme.colors.black,
                      fontFamily: 'Nunito-Bold',

                      fontSize: theme.sizes.h6,
                    }}>
                    Mettre à jour le mot de passe
                  </Text>
                )}
              </RNBounceable>
            </View>
          }
        </View>
      </View>
    );
  };

  const Form = () => {
    return (
      <View>
        <View style={{marginVertical: 20}}>
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
                <Text
                  style={{
                    fontFamily: 'Nunito-SemiBold',
                    color: isDarkMode ? theme.colors.antiFlashWhite : 'black',
                    marginHorizontal: 25,
                  }}>
                  Mot de passe
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={[styles.container]}>
                    <TextInput
                      style={{
                        fontSize: 17,
                        color: isDarkMode
                          ? theme.colors.antiFlashWhite
                          : 'black',
                        fontFamily: 'Nunito-SemiBold',
                        paddingRight: 100,
                      }}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      secureTextEntry={actualSecure}
                    />
                  </View>

                  <RNBounceable
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: isDarkMode
                        ? '#2F3538'
                        : theme.colors.antiFlashWhite,
                      height: 40,
                      width: 40,
                      marginLeft: 20,
                      borderRadius: 3,
                    }}
                    onPress={() => setActualSecure(!actualSecure)}>
                    <Icon
                      name={
                        actualSecure === true
                          ? 'ios-eye-outline'
                          : 'ios-eye-off-outline'
                      }
                      size={20}
                      color={isDarkMode ? theme.colors.antiFlashWhite : 'black'}
                    />
                  </RNBounceable>
                </View>
              </View>
            )}
            name="actual"
          />
        </View>
        {/* new password */}
        <View style={{marginVertical: 20}}>
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
                <Text
                  style={{
                    fontFamily: 'Nunito-SemiBold',
                    color: isDarkMode ? theme.colors.antiFlashWhite : 'black',
                    marginHorizontal: 25,
                  }}>
                  Nouveau mot de passe
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={[styles.container]}>
                    <TextInput
                      style={{
                        fontSize: 17,
                        color: isDarkMode
                          ? theme.colors.antiFlashWhite
                          : 'black',
                        fontFamily: 'Nunito-SemiBold',
                      }}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      secureTextEntry={newSecure}
                    />
                  </View>
                  <RNBounceable
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: isDarkMode
                        ? '#2F3538'
                        : theme.colors.antiFlashWhite,
                      height: 40,
                      width: 40,
                      marginLeft: 20,
                    }}
                    onPress={() => setNewSecure(!newSecure)}>
                    <Icon
                      name={
                        newSecure === true
                          ? 'ios-eye-outline'
                          : 'ios-eye-off-outline'
                      }
                      size={20}
                      color={isDarkMode ? theme.colors.antiFlashWhite : 'black'}
                    />
                  </RNBounceable>
                </View>
              </View>
            )}
            name="new"
          />
        </View>
        {/* confirm password */}
        <View style={{marginVertical: 20}}>
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
                <Text
                  style={{
                    fontFamily: 'Nunito-SemiBold',
                    color: isDarkMode ? theme.colors.antiFlashWhite : 'black',
                    marginHorizontal: 25,
                  }}>
                  Confirmer le nouveau mot de passe
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={[styles.container]}>
                    <TextInput
                      style={{
                        fontSize: 17,
                        color: 'black',
                        fontFamily: 'Nunito-SemiBold',
                      }}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      secureTextEntry={confirmationSecure}
                    />
                  </View>
                  <RNBounceable
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: isDarkMode
                        ? '#2F3538'
                        : theme.colors.antiFlashWhite,
                      height: 40,
                      width: 40,
                      marginLeft: 20,
                    }}
                    onPress={() => setConfirmationSecure(!confirmationSecure)}>
                    <Icon
                      name={
                        confirmationSecure === true
                          ? 'ios-eye-outline'
                          : 'ios-eye-off-outline'
                      }
                      size={20}
                      color={isDarkMode ? theme.colors.antiFlashWhite : 'black'}
                    />
                  </RNBounceable>
                </View>
              </View>
            )}
            name="confirmation"
          />
        </View>
      </View>
    );
  };

  return (
    <View
      style={[
        styles.screen,
        {backgroundColor: isDarkMode ? theme.colors.dark : '#F6F6F7'},
      ]}>
      <Header value={'Mot de passe'} />
      {/* <KeyboardAvoidingView> */}
      <Introduction />
      <Form />
      <ButtomBarSection />
      {/* </KeyboardAvoidingView> */}
    </View>
  );
};

export default EditMotDePasse;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F6F6F7',
  },
  container: {
    backgroundColor: 'transparent',
    width: '75%',
    height: 50,
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 2,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
