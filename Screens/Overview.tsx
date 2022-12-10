import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Modal,
  ScrollView,
  PermissionsAndroid,
  Platform,
  Alert,
  useColorScheme,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Header from '../Components/Header';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {captureRef} from 'react-native-view-shot';
import CameraRoll from '@react-native-community/cameraroll';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/Entypo';
import {theme} from '../Constants';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Confirmation} from '../Components/Alert';
import {
  selectEvent,
  selectCordonnee,
  selectPrice,
  selectTotal,
} from '../Slices/event';
import moment from 'moment';

const {width, height} = Dimensions.get('screen');

const Overview = ({route}: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  const [modal, setModal] = useState(false);
  const [confirmationModal, setConfirmationModal]: any = useState(false);

  const event = useSelector(selectEvent);
  const user = useSelector(selectCordonnee);
  const price = useSelector(selectPrice);
  const total = useSelector(selectTotal);

  const navigation = useNavigation();

  const viewRef = useRef();
  let dropDownAlertRef = useRef();

  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: "Autorisation de téléchargement d'images",
          message:
            'Votre autorisation est requise pour enregistrer des images sur vos appareils',
          buttonNegative: 'Annuler',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Granted');
        return true;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setModal(true);
    }, 10000);

    requestStoragePermission();
  }, []);

  // Download Image
  const downloadImage = async () => {
    try {
      // react-native-view-shot captures component
      const uri = await captureRef(viewRef, {
        fileName: event?.name,
        format: 'png',
        quality: 1,
      });

      if (Platform.OS === 'android') {
        const granted = await requestStoragePermission();
        if (!granted) {
          return;
        }
      }

      // Cameraroll saves images
      const image = CameraRoll.save(uri);
      if (await image) {
        setTimeout(() => {
          setConfirmationModal(true);
        }, 3000);

        setTimeout(() => {
          navigation.navigate('Explorer');
        }, 3000);
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const Card = () => {
    return (
      <View
        style={{
          marginHorizontal: 15,
          marginTop: 25,
          marginBottom: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <RNBounceable
          style={{
            backgroundColor: '#45D09E',
            width: width / 1.1,
            height: 250,
            borderRadius: 5,
            alignItems: 'center',
          }}
          onPress={() => setModal(!modal)}>
          <View
            style={{
              height: 70,
              width: 70,
              backgroundColor: '#45D09E',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              top: -30,
              borderWidth: 6,
              borderColor: isDarkMode ? theme.colors.dark : '#F6F6F7',
            }}>
            <Icon name={'check'} size={25} color={'white'} />
          </View>
          <View
            style={{
              marginHorizontal: 15,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: -25,
            }}>
            <Text
              style={{
                fontFamily: 'Nunito-Bold',
                color: isDarkMode ? theme.colors.antiFlashWhite : '#2F3640',
                fontSize: theme.sizes.h3,
                textAlign: 'center',
              }}>
              Nous vous remercions de votre commande!
            </Text>

            <Text
              style={{
                fontFamily: 'Nunito-Bold',
                color: isDarkMode ? theme.colors.antiFlashWhite : '#2F3640',
                fontSize: theme.sizes.h6,
                textAlign: 'center',
                marginTop: 10,
              }}>
              Votre billet sera prêt en quelques secondes.
            </Text>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text
                  style={{
                    fontFamily: 'Nunito-Bold',
                    color: isDarkMode ? theme.colors.antiFlashWhite : '#2F3640',
                    fontSize: theme.sizes.h2,
                    textAlign: 'center',
                    marginTop: 10,
                  }}>
                  {price === 'Gratuit' ? 'Gratuit' : `${total} cfa`}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Nunito-Bold',
                    color: isDarkMode ? theme.colors.antiFlashWhite : '#2F3640',
                    fontSize: theme.sizes.h6,
                  }}>
                  Total
                </Text>
              </View>
              <View style={{width: 50}} />
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text
                  style={{
                    fontFamily: 'Nunito-Bold',
                    color: isDarkMode ? theme.colors.antiFlashWhite : '#2F3640',
                    fontSize: theme.sizes.h2,
                    textAlign: 'center',
                    marginTop: 10,
                  }}>
                  {'x1'}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Nunito-Bold',
                    color: isDarkMode ? theme.colors.antiFlashWhite : '#2F3640',
                    fontSize: theme.sizes.h6,
                  }}>
                  Billet commandé
                </Text>
              </View>
            </View>
          </View>
        </RNBounceable>
      </View>
    );
  };

  const Rating = () => {
    return (
      <View style={{marginHorizontal: 15, marginTop: 30}}>
        <View style={{marginBottom: 10}}>
          <Text
            style={{
              fontFamily: 'Nunito-Bold',
              color: '#2F3640',
              fontSize: theme.sizes.h5,
              textAlign: 'center',
              marginTop: 10,
            }}>
            Comment aimez-vous notre application
          </Text>
        </View>

        <RNBounceable
          style={{
            flexDirection: 'row',
            height: 50,
            borderRadius: 5,
            backgroundColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 25,
            paddingHorizontal: 10,
            marginVertical: 10,
            borderWidth: 2,
            borderColor: theme.colors.black,
          }}>
          <Text
            style={{
              fontFamily: 'Nunito-Bold',
              color: '#2F3640',
              fontSize: theme.sizes.h6,
            }}>
            Évaluez notre application
          </Text>
        </RNBounceable>
      </View>
    );
  };

  const TModal = () => {
    return (
      <Modal
        animated
        animationType="slide"
        visible={modal}
        transparent
        onRequestClose={() => setModal(false)}>
        <View style={styles.MContainer}>
          <View style={styles.modalContainer} ref={viewRef}>
            <View style={{height: height, marginVertical: 10}}>
              <View
                style={{
                  height: 150,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 10,
                  marginTop: 20,
                }}>
                <QRCode value="21747489300373" size={100} />
              </View>

              <View>
                <View
                  style={{
                    marginHorizontal: 15,
                  }}>
                  <View style={{marginHorizontal: 10}}>
                    <Text
                      style={{
                        color: 'black',
                        fontFamily: 'Nunito-SemiBold',
                        marginVertical: 5,
                        fontSize: theme.sizes.h10,
                      }}>
                      Nom
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontFamily: 'Nunito-Bold',
                        fontSize: theme.sizes.h2,
                      }}>
                      {user?.data?.nom} {user?.data?.prenom}
                    </Text>
                  </View>
                  <View style={{marginHorizontal: 10, marginTop: 10}}>
                    <Text
                      style={{
                        color: 'black',
                        fontFamily: 'Nunito-SemiBold',
                        marginVertical: 5,
                        fontSize: theme.sizes.h10,
                      }}>
                      Billet
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontFamily: 'Nunito-Bold',
                        fontSize: theme.sizes.h8,
                      }}>
                      Coding
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{marginHorizontal: 10, marginTop: 10}}>
                      <Text
                        style={{
                          color: 'black',
                          fontFamily: 'Nunito-SemiBold',
                          marginVertical: 5,
                          fontSize: theme.sizes.h10,
                        }}>
                        Événement
                      </Text>
                      <Text
                        style={{
                          color: 'black',
                          fontFamily: 'Nunito-Bold',
                          fontSize: theme.sizes.h8,
                          width: 120,
                        }}>
                        {event?.name}
                      </Text>
                    </View>
                    <View
                      style={{
                        marginHorizontal: 10,
                        marginTop: 10,
                        width: 120,
                      }}>
                      <Text
                        style={{
                          color: 'black',
                          fontFamily: 'Nunito-SemiBold',
                          marginVertical: 5,
                          fontSize: theme.sizes.h10,
                        }}>
                        Prix
                      </Text>
                      <Text
                        style={{
                          color: 'black',
                          fontFamily: 'Nunito-Bold',
                          fontSize: theme.sizes.h8,
                        }}>
                        {price === 'Gratuit' ? 'Gratuit' : `${total} cfa`}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{marginHorizontal: 10, marginTop: 10}}>
                      <Text
                        style={{
                          color: 'black',
                          fontFamily: 'Nunito-SemiBold',
                          marginVertical: 5,
                          fontSize: theme.sizes.h10,
                        }}>
                        Date
                      </Text>
                      <Text
                        style={{
                          color: 'black',
                          fontFamily: 'Nunito-Bold',
                          width: 120,
                          fontSize: theme.sizes.h8,
                        }}>
                        Début. {moment(event?.startDate).format('D MMMM YYYY')}{' '}
                        {moment(event?.startDate).format('LT')}
                      </Text>
                    </View>
                    <View style={{marginHorizontal: 10, marginTop: 10}}>
                      <Text
                        style={{
                          color: 'black',
                          fontFamily: 'Nunito-SemiBold',
                          marginVertical: 5,
                          fontSize: theme.sizes.h10,
                        }}>
                        Lieu
                      </Text>
                      <Text
                        style={{
                          color: 'black',
                          fontFamily: 'Nunito-Bold',
                          width: 130,
                          fontSize: theme.sizes.h8,
                        }}>
                        {event?.location?.address?.addressLocality},{' '}
                        {event?.location?.name}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  marginHorizontal: 15,
                  marginVertical: 15,
                }}>
                <View style={{marginHorizontal: 10, marginTop: 10}}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: 'Nunito-SemiBold',
                      marginVertical: 5,
                      fontSize: theme.sizes.h10,
                    }}>
                    Numéro de commande
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: 'Nunito-Bold',
                      fontSize: theme.sizes.h8,
                    }}>
                    21747489300373
                  </Text>
                </View>
                <View style={{marginHorizontal: 10, marginTop: 10}}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: 'Nunito-SemiBold',
                      marginVertical: 5,
                      fontSize: theme.sizes.h10,
                    }}>
                    Description du billet
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: 'Nunito-Bold',
                      fontSize: theme.sizes.h8,
                    }}>
                    Basic coding for youth
                  </Text>
                </View>
                <View style={{marginHorizontal: 10, marginTop: 10}}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: 'Nunito-SemiBold',
                      marginVertical: 5,
                      fontSize: theme.sizes.h10,
                    }}>
                    Résumé de l'événement
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: 'Nunito-Bold',
                      fontSize: theme.sizes.h8,
                    }}>
                    {event?.description}
                  </Text>
                </View>
                <View style={{marginHorizontal: 10, marginTop: 10}}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: 'Nunito-SemiBold',
                      marginVertical: 5,
                      fontSize: theme.sizes.h10,
                    }}>
                    Organisateur
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: 'Nunito-Bold',
                      fontSize: theme.sizes.h8,
                    }}>
                    {event?.organizer?.name}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              bottom: 10,
            }}>
            <RNBounceable
              style={{
                backgroundColor: theme.colors.blue,
                borderRadius: 3,
                justifyContent: 'center',
                alignItems: 'center',

                width: width / 1.5,
                height: 40,
              }}
              onPress={downloadImage}>
              <Text
                style={{
                  fontFamily: 'Nunito-SemiBold',
                  color: 'white',
                  textTransform: 'uppercase',
                }}>
                Télécharger
              </Text>
            </RNBounceable>
          </View>
        </View>
      </Modal>
    );
  };

  const ConfirmationModal = () => {
    return (
      <Modal
        animated
        animationType="fade"
        visible={confirmationModal}
        transparent
        onRequestClose={() => setConfirmationModal(false)}>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.2)',
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: theme.colors.dark,
              width: width - 20,
              height: 50,
              borderRadius: 3,
              marginTop: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: theme.colors.white,
                fontFamily: 'Nunito-SemiBold',
                fontSize: theme.sizes.h7,
              }}>
              Votre billet a été téléchargé sous forme d'image.
            </Text>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? theme.colors.dark : '#F6F6F7',
      }}>
      <Header value={'Aperçu de la commande'} />
      <Card />

      <TModal />
      <Confirmation
        value={"Votre billet a été téléchargé sous forme d'image."}
        modal={confirmationModal}
        setModal={setConfirmationModal}
      />
    </View>
  );
};

export default Overview;

const styles = StyleSheet.create({
  MContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    height: height,
    width: width / 1.25,
  },
});
