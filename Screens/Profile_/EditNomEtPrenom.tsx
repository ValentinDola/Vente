import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  TextInput,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../Components/Header';
import {theme} from '../../Constants';
import {Controller, useForm} from 'react-hook-form';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {useDispatch, useSelector} from 'react-redux';
import {selectUser, setNom, setPrenom} from '../../Slices/user';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

const EditNomEtPrenom = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [loading, setLoading] = useState(false);

  const user = useSelector(selectUser);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors, isDirty},
  } = useForm({
    defaultValues: {
      nom: user?.nom,
      prenom: user?.prenom,
    },
  });

  const Sauvegarde = (data: any) => {
    const {nom, prenom} = data;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (data) {
        dispatch(setNom(nom));
        dispatch(setPrenom(prenom));
        navigation.goBack();
      }
    }, 2000);
  };

  const Introduction = () => (
    <View style={{marginVertical: 20, marginHorizontal: 15}}>
      <Text
        style={{
          fontFamily: 'Nunito-Bold',
          color: isDarkMode ? theme.colors.antiFlashWhite : 'black',
          fontSize: theme.sizes.h3,
        }}>
        Editer le profil
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
          backgroundColor: isDarkMode ? theme.colors.dark : theme.colors.white,
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
                }}
                onPress={handleSubmit(Sauvegarde)}>
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
                    Sauvegarder les modifications
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
                  Nom
                </Text>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
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
                    />
                  </View>
                </View>
              </View>
            )}
            name="nom"
          />
        </View>
        {/* prenom */}
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
                  Prenom
                </Text>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
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
                    />
                  </View>
                </View>
              </View>
            )}
            name="prenom"
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
      <Header value={'Nom et Prenom'} />
      <Introduction />
      <Form />
      <ButtomBarSection />
    </View>
  );
};

export default EditNomEtPrenom;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F6F6F7',
  },
  container: {
    backgroundColor: 'transparent',
    width: '90%',
    height: 50,
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 2,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
