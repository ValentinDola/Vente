import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  FlatList,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import { theme } from '../Constants/index';

import { useForm, Controller } from 'react-hook-form';

import Icon from 'react-native-vector-icons/Ionicons';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Creation = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nom: '',
      organisateur: '',
      type: '',
      categorie: '',
      quartier: '',
      place: '',
      dateDebut: '',
      heureDebut: '',
      dateFin: '',
      heureFin: '',
    },
  });
  const onSubmit = async (data: any) => (
    await AsyncStorage.setItem('DataPageOne', JSON.stringify(data))
      .then(r => console.log(r))
      .catch(e => console.error(e)),
    console.log(JSON.stringify(data))
  );

  const Header = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginVertical: 15,
        }}>
        <View>
          <Text
            style={{
              color: theme.colors.black,
              fontFamily: 'Nunito-SemiBold',
              fontSize: 18,
              textTransform: 'uppercase',
              letterSpacing: 1.2,
            }}>
            Création
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.2}
          onPress={handleSubmit(onSubmit)}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.black,
            height: 35,
            width: 105,
            borderRadius: 3,
            opacity: 1,
          }}>
          <Text
            style={{
              color: theme.colors.white,
              fontFamily: 'Nunito-SemiBold',
              textTransform: 'uppercase',
              letterSpacing: 1.2,
            }}>
            Suivant
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const Counter = () => {
    return (
      <View style={{ marginVertical: 15 }} >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }} >
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 3, width: 30, height: 30, backgroundColor: '#FFF' }} >
            <Text style={{ color: theme.colors.blue, fontFamily: 'Nunito-SemiBold' }}>1</Text>
          </TouchableOpacity>
          {/* <View style={{}} /> */}
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 3, width: 30, height: 30, backgroundColor: '#FFF' }} >
            <Text style={{ color: theme.colors.blue, fontFamily: 'Nunito-SemiBold' }}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 3, width: 30, height: 30, backgroundColor: '#FFF' }} >
            <Text style={{ color: theme.colors.blue, fontFamily: 'Nunito-SemiBold' }}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 3, width: 30, height: 30, backgroundColor: '#FFF' }} >
            <Text style={{ color: theme.colors.blue, fontFamily: 'Nunito-SemiBold' }}>4</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const Form = () => {
    return (
      <View style={{ marginVertical: 15 }}>
        <View>
          <Text
            style={{
              color: theme.colors.black,
              fontFamily: 'Nunito-Bold',
              fontSize: 15,
              textTransform: 'uppercase',
              letterSpacing: 1.2,
              marginHorizontal: 25,
            }}>
            Informations de base
          </Text>

          <View>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <View
                    style={[
                      styles.container,
                      { borderColor: error ? 'red' : '#e8e8e8' },
                    ]}>
                    <TextInput
                      style={{
                        paddingRight: 40,
                        color: 'black',
                        fontFamily: 'Nunito-SemiBold',
                      }}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholder={'Nom'}
                      placeholderTextColor={'#D1D3D4'}
                    />
                  </View>
                </View>
              )}
              name="nom"
            />
            <View style={{ position: 'absolute', right: 35, top: 28 }}>
              <Icon name={'happy-outline'} color={'black'} size={18} />
            </View>
          </View>
          <View>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <View
                    style={[
                      styles.container,
                      { borderColor: error ? 'red' : '#e8e8e8' },
                    ]}>
                    <TextInput
                      style={{
                        paddingRight: 40,
                        color: 'black',
                        fontFamily: 'Nunito-SemiBold',
                      }}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholder={'Organisateur'}
                      placeholderTextColor={'#D1D3D4'}
                    />
                  </View>
                </View>
              )}
              name="organisateur"
            />
            <View style={{ position: 'absolute', right: 35, top: 28 }}>
              <Icon name={'person-outline'} color={'black'} size={18} />
            </View>
          </View>

          <View>
            <Text
              style={{
                color: theme.colors.black,
                fontFamily: 'Nunito-SemiBold',
                width: 300,
                marginHorizontal: 50,
                marginTop: 10,
              }}>
              Type et Categorie
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginHorizontal: 20,
                alignItems: 'center',
              }}>
              {/* Type */}
              <View>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({
                    field: { onChange, onBlur, value },
                    fieldState: { error },
                  }) => (
                    <View
                      style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <View
                        style={[
                          styles.container,
                          { borderColor: error ? 'red' : '#e8e8e8', width: 150 },
                        ]}>
                        <TextInput
                          style={{
                            paddingRight: 40,
                            color: 'black',
                            fontFamily: 'Nunito-SemiBold',
                          }}
                          onBlur={onBlur}
                          onChangeText={onChange}
                          value={value}
                          placeholder={'Type'}
                          placeholderTextColor={'#D1D3D4'}
                        />
                      </View>
                    </View>
                  )}
                  name="type"
                />
                <View style={{ position: 'absolute', right: 15, top: 28 }}>
                  <Icon name={'documents-outline'} color={'black'} size={18} />
                </View>
              </View>
              {/* Categorie */}
              <View>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({
                    field: { onChange, onBlur, value },
                    fieldState: { error },
                  }) => (
                    <View
                      style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <View
                        style={[
                          styles.container,
                          { borderColor: error ? 'red' : '#e8e8e8', width: 150 },
                        ]}>
                        <TextInput
                          style={{
                            paddingRight: 40,
                            color: 'black',
                            fontFamily: 'Nunito-SemiBold',
                          }}
                          onBlur={onBlur}
                          onChangeText={onChange}
                          value={value}
                          placeholder={'Categorie'}
                          placeholderTextColor={'#D1D3D4'}
                        />
                      </View>
                    </View>
                  )}
                  name="categorie"
                />
                <View style={{ position: 'absolute', right: 15, top: 28 }}>
                  <Icon
                    name={'color-palette-outline'}
                    color={'black'}
                    size={18}
                  />
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text
              style={{
                color: theme.colors.black,
                fontFamily: 'Nunito-Bold',
                fontSize: 15,
                textTransform: 'uppercase',
                letterSpacing: 1.2,
                marginHorizontal: 25,
                marginTop: 10,
              }}>
              Emplacement
            </Text>
            <Text
              style={{
                color: theme.colors.black,
                fontFamily: 'Nunito-SemiBold',
                width: 300,
                marginHorizontal: 50,
                marginTop: 10,
              }}>
              Quartier et Place
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginHorizontal: 20,
                alignItems: 'center',
              }}>
              {/* Quartier */}
              <View>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({
                    field: { onChange, onBlur, value },
                    fieldState: { error },
                  }) => (
                    <View
                      style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <View
                        style={[
                          styles.container,
                          { borderColor: error ? 'red' : '#e8e8e8', width: 150 },
                        ]}>
                        <TextInput
                          style={{
                            paddingRight: 40,
                            color: 'black',
                            fontFamily: 'Nunito-SemiBold',
                          }}
                          onBlur={onBlur}
                          onChangeText={onChange}
                          value={value}
                          placeholder={'Quartier'}
                          placeholderTextColor={'#D1D3D4'}
                        />
                      </View>
                    </View>
                  )}
                  name="quartier"
                />
                <View style={{ position: 'absolute', right: 15, top: 28 }}>
                  <Icon name={'locate-outline'} color={'black'} size={18} />
                </View>
              </View>
              {/* place */}
              <View>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({
                    field: { onChange, onBlur, value },
                    fieldState: { error },
                  }) => (
                    <View
                      style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <View
                        style={[
                          styles.container,
                          { borderColor: error ? 'red' : '#e8e8e8', width: 150 },
                        ]}>
                        <TextInput
                          style={{
                            paddingRight: 40,
                            color: 'black',
                            fontFamily: 'Nunito-SemiBold',
                          }}
                          onBlur={onBlur}
                          onChangeText={onChange}
                          value={value}
                          placeholder={'Place'}
                          placeholderTextColor={'#D1D3D4'}
                        />
                      </View>
                    </View>
                  )}
                  name="place"
                />
                <View style={{ position: 'absolute', right: 15, top: 28 }}>
                  <Icon name={'pin-outline'} color={'black'} size={18} />
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text
              style={{
                color: theme.colors.black,
                fontFamily: 'Nunito-Bold',
                fontSize: 15,
                textTransform: 'uppercase',
                letterSpacing: 1.2,
                marginHorizontal: 25,
                marginTop: 10,
              }}>
              Date et Heure
            </Text>
            <View>
              <Text
                style={{
                  color: theme.colors.black,
                  fontFamily: 'Nunito-SemiBold',
                  width: 300,
                  marginHorizontal: 50,
                  marginTop: 10,
                }}>
                Date de début
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginHorizontal: 20,
                  alignItems: 'center',
                }}>
                {/* Date de début */}
                <View>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({
                      field: { onChange, onBlur, value },
                      fieldState: { error },
                    }) => (
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <View
                          style={[
                            styles.container,
                            {
                              borderColor: error ? 'red' : '#e8e8e8',
                              width: 150,
                            },
                          ]}>
                          <TextInput
                            style={{
                              paddingRight: 40,
                              color: 'black',
                              fontFamily: 'Nunito-SemiBold',
                            }}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder={'Date'}
                            placeholderTextColor={'#D1D3D4'}
                          />
                        </View>
                      </View>
                    )}
                    name="dateDebut"
                  />
                  <View style={{ position: 'absolute', right: 15, top: 28 }}>
                    <Icon name={'calendar-outline'} color={'black'} size={18} />
                  </View>
                </View>
                {/* Heure de début */}
                <View>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({
                      field: { onChange, onBlur, value },
                      fieldState: { error },
                    }) => (
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <View
                          style={[
                            styles.container,
                            {
                              borderColor: error ? 'red' : '#e8e8e8',
                              width: 150,
                            },
                          ]}>
                          <TextInput
                            style={{
                              paddingRight: 40,
                              color: 'black',
                              fontFamily: 'Nunito-SemiBold',
                            }}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder={'Heure'}
                            placeholderTextColor={'#D1D3D4'}
                          />
                        </View>
                      </View>
                    )}
                    name="heureDebut"
                  />
                  <View style={{ position: 'absolute', right: 15, top: 28 }}>
                    <Icon name={'timer-outline'} color={'black'} size={18} />
                  </View>
                </View>
              </View>
            </View>

            {/* Date de fin */}

            <View>
              <Text
                style={{
                  color: theme.colors.black,
                  fontFamily: 'Nunito-SemiBold',
                  width: 300,
                  marginHorizontal: 50,
                  marginTop: 10,
                }}>
                Date de fin
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginHorizontal: 20,
                  alignItems: 'center',
                }}>
                {/* Date de fin */}
                <View>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({
                      field: { onChange, onBlur, value },
                      fieldState: { error },
                    }) => (
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <View
                          style={[
                            styles.container,
                            {
                              borderColor: error ? 'red' : '#e8e8e8',
                              width: 150,
                            },
                          ]}>
                          <TextInput
                            style={{
                              paddingRight: 40,
                              color: 'black',
                              fontFamily: 'Nunito-SemiBold',
                            }}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder={'Date'}
                            placeholderTextColor={'#D1D3D4'}
                          />
                        </View>
                      </View>
                    )}
                    name="dateFin"
                  />
                  <View style={{ position: 'absolute', right: 15, top: 28 }}>
                    <Icon name={'calendar-outline'} color={'black'} size={18} />
                  </View>
                </View>
                {/* Heure de fin */}
                <View>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({
                      field: { onChange, onBlur, value },
                      fieldState: { error },
                    }) => (
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <View
                          style={[
                            styles.container,
                            {
                              borderColor: error ? 'red' : '#e8e8e8',
                              width: 150,
                            },
                          ]}>
                          <TextInput
                            style={{
                              paddingRight: 40,
                              color: 'black',
                              fontFamily: 'Nunito-SemiBold',
                            }}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder={'Heure'}
                            placeholderTextColor={'#D1D3D4'}
                          />
                        </View>
                      </View>
                    )}
                    name="heureFin"
                  />
                  <View style={{ position: 'absolute', right: 15, top: 28 }}>
                    <Icon name={'timer-outline'} color={'black'} size={18} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <ScrollView>
        <Header />
        <Counter />
        <Form />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F6F6F7',
  },
  container: {
    backgroundColor: 'white',
    width: '90%',

    borderColor: '#e8e8e8',
    borderWidth: 2,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 10,
  },
});

export default Creation;
