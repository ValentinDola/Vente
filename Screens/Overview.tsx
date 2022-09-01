import {View, Text, Dimensions, StyleSheet, Modal} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../Components/Header';
import RNBounceable from '@freakycoder/react-native-bounceable';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/Entypo';
import {theme} from '../Constants';

const {width, height} = Dimensions.get('screen');

const Overview = ({route}: any) => {
  const [amount, setAmount] = useState('');
  const [modal, setModal] = useState(true);

  useEffect(() => {
    const {amount} = route.params;
    setAmount(amount);
    setTimeout(() => {
      setModal(true);
    }, 10000);
  }, []);

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
          }}>
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
              borderColor: '#F6F6F7',
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
                color: '#2F3640',
                fontSize: theme.sizes.h3,
                textAlign: 'center',
              }}>
              Nous vous remercions de votre commande!
            </Text>

            <Text
              style={{
                fontFamily: 'Nunito-Bold',
                color: '#2F3640',
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
                    color: '#2F3640',
                    fontSize: theme.sizes.h2,
                    textAlign: 'center',
                    marginTop: 10,
                  }}>
                  {amount}cfa
                </Text>
                <Text
                  style={{
                    fontFamily: 'Nunito-Bold',
                    color: '#2F3640',
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
                    color: '#2F3640',
                    fontSize: theme.sizes.h2,
                    textAlign: 'center',
                    marginTop: 10,
                  }}>
                  {'x1'}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Nunito-Bold',
                    color: '#2F3640',
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
      <Modal animated animationType="slide" visible={modal} transparent>
        <View style={styles.MContainer}>
          <View style={styles.modalContainer}>
            <View
              style={{
                height: 150,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <QRCode value="21747489300373" size={90} />
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
                    DOLA Valentin
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
                    }}>
                    Basic Coding
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
                      Date
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontFamily: 'Nunito-Bold',
                        width: 100,
                        fontSize: theme.sizes.h8,
                      }}>
                      jeu, dec 1 Commence a : 19:00
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
                        width: 120,
                        fontSize: theme.sizes.h8,
                      }}>
                      Lome, Maritime Region
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
                  Code at any age folks
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
                  Valentino DOLA
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <RNBounceable
                style={{
                  backgroundColor: theme.colors.blue,
                  borderRadius: 3,
                  justifyContent: 'center',
                  alignItems: 'center',

                  width: width / 1.5,
                  height: 40,
                }}>
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
        </View>
      </Modal>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#F6F6F7'}}>
      <Header value={'Order Overview'} />
      <Card />
      <TModal />
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
    height: height / 1.1,
    width: width / 1.2,
  },
});
