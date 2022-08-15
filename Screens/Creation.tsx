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
} from 'react-native';
import { theme } from '../Constants/index';
import CustomInput from '../Components/Input';
import DatePicker from 'react-native-modern-datepicker';
import { useForm, Controller } from 'react-hook-form';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CleanTabBar } from 'react-navigation-tabbar-collection';
import Create from './New/Create';
import Report from './New/Report';
import Scan from './New/Scan';
import Icon from 'react-native-vector-icons/Ionicons';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import DateTimePicker from '../Components/DateTimePicker';
import { ScrollView } from 'react-native-gesture-handler';

const Creation = () => {
  // const [dateIsVisible, setDateIsVisible] = useState(false);
  // const [timeIsVisible, setTimeIsVisible] = useState(false);
  // const [selectedDate, setSelectedDate] = useState('2022-02-14');
  // const [selectedTime, setSelectedTime] = useState('19:00');

  // const onTimeChange = (selectedTime: any) => (
  //   console.log(selectedTime), setTimeIsVisible(false)
  // );

  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {
  //     nom: '',
  //     organisateur: ''
  //   }
  // });

  // const onSubmit = (data: any) => {
  //   console.log(data);

  // };

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
    },
  });
  const onSubmit = data => console.log(data);

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

          {/* <View>
            <CustomInput
              name="Organisateur"
              placeholder="Organisateur"
              control={control}
              rules={{ required: "L'organisateur est requis" }}

              style={{ paddingRight: 40, color: 'black', fontFamily: 'Nunito-SemiBold' }}
            />
            <View style={{ position: 'absolute', right: 35, top: 28 }} >
              <Icon name={'person-outline'} color={'black'} size={18} />
            </View>
          </View> */}

          <View>
            <Text
              style={{
                color: theme.colors.black,
                fontFamily: 'Nunito-SemiBold',
                width: 300,
                marginHorizontal: 50,
                marginTop: 10
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
                  <Icon name={'person-outline'} color={'black'} size={18} />
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
                  <Icon name={'person-outline'} color={'black'} size={18} />
                </View>
              </View>
            </View>
          </View>


          <View>
            <Text
              style={{
                color: theme.colors.black,
                fontFamily: 'Nunito-SemiBold',
                width: 300,
                marginHorizontal: 50,
                marginTop: 10
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
                  <Icon name={'person-outline'} color={'black'} size={18} />
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
                  <Icon name={'person-outline'} color={'black'} size={18} />
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text
              style={{
                color: theme.colors.black,
                fontFamily: 'Nunito-SemiBold',
                width: 300,
                marginHorizontal: 50,
                marginTop: 10
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
                  <Icon name={'person-outline'} color={'black'} size={18} />
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
                  <Icon name={'person-outline'} color={'black'} size={18} />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* <View style={{ marginTop: 20 }} >

          <Text
            style={{
              color: theme.colors.black,
              fontFamily: 'Nunito-Bold',
              fontSize: 15,
              textTransform: 'uppercase',
              letterSpacing: 1.2,
              marginHorizontal: 25
            }}>
            Emplacement
          </Text>

          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                color: theme.colors.black,
                fontFamily: 'Nunito-SemiBold',
                width: 300,
                marginHorizontal: 50,

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

              <CustomInput
                name="quartier"
                placeholder="Adamavo"
                control={control}
                rules={{ required: 'Le quartier est requis' }}
                style={{ width: 150, backgroundColor: 'white', marginRight: 10, paddingRight: 40, color: 'black', fontFamily: 'Nunito-SemiBold' }}
              />
              <View style={{ position: 'absolute', left: 140 }} >
                <Icon name={'locate-outline'} color={'black'} size={18} />
              </View>

              <CustomInput
                name="place"
                placeholder="Hotel Adesko"
                control={control}
                rules={{ required: "La place est requis" }}
                style={{ width: 150, backgroundColor: 'white', marginRight: 10, paddingRight: 40, color: 'black', fontFamily: 'Nunito-SemiBold' }}
              />
              <View style={{ position: 'absolute', right: 25 }} >
                <Icon name={'pin-outline'} color={'black'} size={18} />
              </View>



            </View>
          </View>
        </View> */}

        {/* <View style={{ marginTop: 20 }} >

          <Text
            style={{
              color: theme.colors.black,
              fontFamily: 'Nunito-Bold',
              fontSize: 15,
              textTransform: 'uppercase',
              letterSpacing: 1.2,
              marginHorizontal: 25
            }}>
            Date et l'heure
          </Text>

          <View style={{ marginTop: 10 }}>

            <View>
              <Text
                style={{
                  color: theme.colors.black,
                  fontFamily: 'Nunito-SemiBold',
                  width: 300,
                  marginHorizontal: 50,

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

                <CustomInput
                  name="dateDebut"
                  placeholder="30 Avril 2022"
                  control={control}
                  rules={{ required: 'La date est requis' }}
                  style={{ width: 150, backgroundColor: 'white', marginRight: 10, paddingRight: 40, color: 'black', fontFamily: 'Nunito-SemiBold' }}
                />
                <View style={{ position: 'absolute', left: 140 }} >
                  <Icon name={'calendar-outline'} color={'black'} size={18} />
                </View>

                <CustomInput
                  name="heureDebut"
                  placeholder="19:00"
                  control={control}
                  rules={{ required: "L'heure est requis" }}
                  style={{ width: 150, backgroundColor: 'white', marginRight: 10, paddingRight: 40, color: 'black', fontFamily: 'Nunito-SemiBold' }}
                />
                <View style={{ position: 'absolute', right: 25 }} >
                  <Icon name={'timer-outline'} color={'black'} size={18} />
                </View>



              </View>
            </View>
          </View>

          <View>

            <View>
              <Text
                style={{
                  color: theme.colors.black,
                  fontFamily: 'Nunito-SemiBold',
                  width: 300,
                  marginHorizontal: 50,

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

                <CustomInput
                  name="dateFin"
                  placeholder="30 Avril 2022"
                  control={control}
                  rules={{ required: 'La date est requis' }}
                  style={{ width: 150, backgroundColor: 'white', marginRight: 10, paddingRight: 40, color: 'black', fontFamily: 'Nunito-SemiBold' }}
                />
                <View style={{ position: 'absolute', left: 140 }} >
                  <Icon name={'calendar-outline'} color={'black'} size={18} />
                </View>

                <CustomInput
                  name="heureFin"
                  placeholder="19:00"
                  control={control}
                  rules={{ required: "L'heure est requis" }}
                  style={{ width: 150, backgroundColor: 'white', marginRight: 10, paddingRight: 40, color: 'black', fontFamily: 'Nunito-SemiBold' }}
                />
                <View style={{ position: 'absolute', right: 25 }} >
                  <Icon name={'timer-outline'} color={'black'} size={18} />
                </View>



              </View>
            </View>
          </View>
        </View> */}

        {/* <View >
          <Text
            style={{
              color: theme.colors.black,
              fontFamily: 'Nunito-SemiBold',
              width: 300,
              marginHorizontal: 50,

            }}>
            Type et Organisateur
            
          </Text>
          <Text
            style={{
              color: theme.colors.black,
              fontFamily: 'Nunito-SemiBold',
              width: 300,
              marginHorizontal: 55,
              fontSize: 12

            }}>

            ? (Si l'événement est gratuit le prix est de 0)
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginHorizontal: 20,
              alignItems: 'center',
            }}>

            <CustomInput
              name="dateFin"
              placeholder="Sport"
              control={control}
              rules={{ required: 'La date est requis' }}
              style={{ width: 150, backgroundColor: 'white', marginRight: 10, paddingRight: 40, color: 'black', fontFamily: 'Nunito-SemiBold' }}
            />
            <View style={{ position: 'absolute', left: 140 }} >
              <Icon name={'crop-outline'} color={'black'} size={18} />
            </View>

            <CustomInput
              name="heureFin"
              placeholder="12000"
              control={control}
              rules={{ required: "L'heure est requis" }}
              style={{ width: 150, backgroundColor: 'white', marginRight: 10, paddingRight: 40, color: 'black', fontFamily: 'Nunito-SemiBold' }}
            />
            <View style={{ position: 'absolute', right: 25 }} >
              <Icon name={'cash-outline'} color={'black'} size={18} />
            </View>



          </View>
        </View> */}
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <ScrollView>
        <Header />

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
