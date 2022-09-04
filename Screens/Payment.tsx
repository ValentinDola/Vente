import RNBounceable from '@freakycoder/react-native-bounceable';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  Modal,
  Animated,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../Components/Header';
import {theme} from '../Constants/index';
import {selectEvent} from '../Slices/event';
import {setPrice} from '../Slices/price';

const {width, height} = Dimensions.get('screen');

const Payment = () => {
  // Locale state
  const [clickedId, setClickedId] = useState(0);
  const [price_, setPrice_] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({});

  // React redux selector
  const event = useSelector(selectEvent);

  // React navigation hook
  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedEvent(event);
  }, []);

  const {
    control,
    handleSubmit,
    formState: {errors},
    resetField,
  } = useForm({
    defaultValues: {
      phone: '',
    },
  });

  const handlePrice = (item, index) => {
    setClickedId(index);
    dispatch(setPrice(item));
    setPrice_(item);
  };

  const onSubmit = (data: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (price_) {
        navigation.navigate('Checkout');
      }
    }, 3000);
  };

  const CoordonneesSection = () => {
    return (
      <View style={{marginHorizontal: 15, marginVertical: 5}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          {/* <View style={{ backgroundColor: theme.colors.black, height: 80, width: 80, borderRadius: 5 }} /> */}

          <View style={{marginVertical: 5, marginHorizontal: 15}}>
            <Text
              style={{
                fontFamily: 'Nunito-SemiBold',
                color: 'black',
                fontSize: theme.sizes.h6,
                marginVertical: 5,
              }}>
              {newData?.data?.prenom} {newData?.data?.nom}
            </Text>
            <Text
              style={{
                fontFamily: 'Nunito-SemiBold',
                color: 'grey',
                fontSize: theme.sizes.h9,
              }}>
              {newData?.data?.email}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const PriceSection = () => {
    return (
      <View style={{marginHorizontal: 15, marginVertical: 15}}>
        <Text
          style={{
            fontFamily: 'Nunito-SemiBold',
            color: 'black',
            fontSize: theme.sizes.h5,
          }}>
          Choisissez votre prix
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          {selectedEvent?.offers?.price?.map(
            (
              item:
                | boolean
                | React.ReactChild
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined,
              index: React.Key | null | undefined,
            ) => (
              <RNBounceable
                key={index}
                style={[
                  index === clickedId
                    ? {
                        marginVertical: 15,
                        backgroundColor: theme.colors.bluetiful,
                        height: 40,
                        width: 90,
                        borderRadius: 3,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }
                    : {
                        marginVertical: 15,
                        backgroundColor: theme.colors.white,
                        height: 40,
                        width: 90,
                        borderRadius: 3,
                        justifyContent: 'center',
                        alignItems: 'center',
                      },
                ]}
                onPress={() => handlePrice(item, index)}>
                <Text
                  style={[
                    index === clickedId
                      ? {
                          fontFamily: 'Nunito-Bold',
                          color: 'white',
                          fontSize: theme.sizes.h6,
                        }
                      : {
                          fontFamily: 'Nunito-Bold',
                          color: 'black',
                          fontSize: theme.sizes.h7,
                        },
                  ]}>
                  {item}
                </Text>
              </RNBounceable>
            ),
          )}
        </View>
      </View>
    );
  };

  const NumberSection = () => {
    return (
      <View style={{marginHorizontal: 15, marginTop: 15, marginBottom: 10}}>
        <Text
          style={{
            fontFamily: 'Nunito-SemiBold',
            color: 'black',
            fontSize: theme.sizes.h5,
          }}>
          Telephone
        </Text>
        <Text
          style={{
            fontFamily: 'Nunito-SemiBold',
            color: 'red',
            fontSize: theme.sizes.h10,
            marginHorizontal: 15,
          }}>
          !S'il vous plaît entrer un numéro de téléphone valide.
        </Text>
        <RNBounceable>
          <Text
            style={{
              fontFamily: 'Nunito-SemiBold',
              color: 'black',
              position: 'absolute',
              top: 26,
              left: 35,
            }}>
            +228
          </Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({
              field: {onChange, onBlur, value},
              fieldState: {error},
            }) => (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginHorizontal: 5,
                    marginVertical: 10,
                    backgroundColor: 'transparent',
                    borderRadius: 3,
                    paddingLeft: 50,
                    width: '85%',
                    borderWidth: 2,
                    borderColor: error ? 'red' : theme.colors.bluetiful,
                  }}>
                  <TextInput
                    style={{
                      color: 'black',
                      fontFamily: 'Nunito-Bold',
                      fontSize: 20,
                    }}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder={'Telephone'}
                    placeholderTextColor={'#D1D3D4'}
                    underlineColorAndroid="transparent"
                    keyboardType="numeric"
                    maxLength={8}
                  />
                </View>
              </View>
            )}
            name="phone"
          />
        </RNBounceable>
      </View>
    );
  };

  const DescriptionSection = () => {
    return (
      <View style={{marginHorizontal: 15, marginVertical: 15}}>
        <View>
          <Text
            style={{
              color: theme.colors.black,
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h8,
              letterSpacing: 0.5,
            }}>
            Vous choisissez d'acheter des billets chez nous et nous vous en
            sommes reconnaissants. Nous offrons les meilleurs tarifs.
          </Text>
        </View>
      </View>
    );
  };

  const ButtomBarSection = () => {
    return (
      <View
        style={{
          height: 130,
          width,
          borderRadius: 10,
          opacity: 0.9,
          position: 'absolute',
          backgroundColor: theme.colors.white,
          bottom: 0,
          justifyContent: 'center',
        }}>
        <View
          style={{
            margin: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Icon name={'cart-outline'} color="black" size={20} />
          </View>
          <View
            style={{
              backgroundColor: theme.colors.blue,
              borderRadius: 50,
              height: 18,
              width: 18,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              bottom: 10,
              left: 10,
            }}>
            <Text
              style={{
                color: theme.colors.white,
                fontFamily: 'Nunito-SemiBold',
                fontSize: theme.sizes.h10,
              }}>
              1
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: theme.colors.black,
                fontFamily: 'Nunito-SemiBold',
              }}>
              Libre
            </Text>
          </View>
        </View>
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
                  backgroundColor: theme.colors.bluetiful,
                  width: width / 1.1,
                  height: 40,
                  marginBottom: 20,
                }}
                disabled={price == '' && true}
                onPress={handleSubmit(onSubmit)}>
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
                      color: theme.colors.white,
                      fontFamily: 'Nunito-Bold',

                      fontSize: theme.sizes.h6,
                    }}>
                    Verifier
                  </Text>
                )}
              </RNBounceable>
            </View>
          }
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      enabled={false}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header value={'Prix'} />
        {/* <CoordonneesSection /> */}
        <PriceSection />
        <DescriptionSection />
      </ScrollView>

      <ButtomBarSection />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#F6F6F7',
    flex: 1,
  },
});

export default Payment;
