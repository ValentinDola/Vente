import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Modal,
  ScrollView,
  useColorScheme,
} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {theme} from '../Constants';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {useNavigation} from '@react-navigation/native';
import {selectEvent, selectPrice, setTotal} from '../Slices/event';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../Components/Header';

const {width, height} = Dimensions.get('screen');

interface CartProps {
  route: any;
}

const Cart: FC = () => {
  const navigation = useNavigation();

  const isDarkMode = useColorScheme() === 'dark';

  const [selectedEvent, setSelectedEvent]: any = useState({});
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [ticket] = useState('1');

  const event = useSelector(selectEvent);
  const price = useSelector(selectPrice);

  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedEvent(event);
  }, []);

  const inscription = () => {
    const total = parseInt(price) + parseInt(price) * 0.15;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(setTotal(total));
      navigation.navigate('Commande');
    }, 3000);
  };

  const Intro = () => {
    return (
      <View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              color: isDarkMode
                ? theme.colors.antiFlashWhite
                : theme.colors.black,
              fontFamily: 'Nunito-Light',
              fontSize: 16,
              marginBottom: 10,
            }}>
            {selectedEvent?.name}
          </Text>
          <Text
            style={{
              color: isDarkMode
                ? theme.colors.antiFlashWhite
                : theme.colors.black,
              fontFamily: 'Nunito-Light',
            }}>
            {moment(selectedEvent?.startDate).format('LLL')}
          </Text>
        </View>
      </View>
    );
  };

  const Information = () => {
    return (
      <View style={{marginHorizontal: 15, marginTop: 50}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={{
                color: isDarkMode
                  ? theme.colors.antiFlashWhite
                  : theme.colors.black,
                fontFamily: 'Nunito-Bold',
                fontSize: theme.sizes.h3,
                marginBottom: 5,
              }}>
              Nom du ticket
            </Text>
            <Text
              style={{
                color: isDarkMode
                  ? theme.colors.antiFlashWhite
                  : theme.colors.black,
                fontFamily: 'Nunito-Bold',
                fontSize: theme.sizes.h6,
              }}>
              {price === '0' ? 'Gratuit' : `${price} cfa`}
            </Text>
          </View>

          <RNBounceable
            style={{
              backgroundColor: theme.colors.greyblack,
              height: 30,
              width: 50,
              justifyContent: 'center',
              alignItems: 'flex-start',
              paddingLeft: 10,
              borderRadius: 5,
              borderWidth: 3,
              borderColor: isDarkMode ? '#1A2026' : theme.colors.blue,
            }}>
            <Text
              style={{
                color: theme.colors.black,
                fontFamily: 'Nunito-SemiBold',
                fontSize: theme.sizes.h6,
              }}>
              {ticket}
            </Text>
          </RNBounceable>
        </View>
        <View style={{marginTop: 10}}>
          <Text
            style={{
              color: isDarkMode
                ? theme.colors.antiFlashWhite
                : theme.colors.black,
              fontFamily: 'Nunito-Light',
              fontSize: theme.sizes.h8,
            }}>
            Les ventes se terminent dans 10 heures.
          </Text>
        </View>
      </View>
    );
  };

  const Outro = () => (
    <View style={{margin: 15, marginTop: 30}}>
      <Text
        style={{
          color: isDarkMode ? theme.colors.antiFlashWhite : theme.colors.black,
          fontFamily: 'Nunito-Light',
        }}>
        Alimenté par {<Text style={{fontFamily: 'Nunito-Bold'}}>Vente</Text>}{' '}
      </Text>
    </View>
  );

  const ButtomBarSection = () => {
    return (
      <View
        style={{
          height: 130,
          width,
          borderRadius: 10,
          opacity: 0.9,
          position: 'absolute',
          backgroundColor: isDarkMode ? '#1A2026' : theme.colors.white,
          bottom: 0,
          justifyContent: 'center',
        }}>
        <RNBounceable
          style={{
            margin: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          onPress={() => setModal(!modal)}
          disabled={price === '0'}>
          <View>
            <Icon
              name={'cart-outline'}
              color={
                isDarkMode ? theme.colors.antiFlashWhite : theme.colors.black
              }
              size={20}
            />
          </View>
          <View
            style={{
              backgroundColor: isDarkMode
                ? theme.colors.antiFlashWhite
                : theme.colors.blue,
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
                color: isDarkMode ? theme.colors.dark : theme.colors.white,
                fontFamily: 'Nunito-SemiBold',
                fontSize: theme.sizes.h10,
              }}>
              {ticket}
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: isDarkMode
                  ? theme.colors.antiFlashWhite
                  : theme.colors.black,
                fontFamily: 'Nunito-Bold',
                fontSize: theme.sizes.h4,
              }}>
              {price === '0'
                ? 'Gratuit'
                : `${parseInt(price) + parseInt(price) * 0.15} cfa`}
            </Text>
          </View>
        </RNBounceable>
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
                  backgroundColor: isDarkMode
                    ? theme.colors.antiFlashWhite
                    : theme.colors.bluetiful,
                  width: width / 1.1,
                  height: 40,
                  marginBottom: 20,
                }}
                onPress={() => inscription()}>
                {loading == true ? (
                  <ActivityIndicator
                    size="small"
                    color={isDarkMode ? theme.colors.dark : '#FFFFFF'}
                    animating={loading}
                    hidesWhenStopped={loading}
                  />
                ) : (
                  <Text
                    style={{
                      color: isDarkMode
                        ? theme.colors.dark
                        : theme.colors.white,
                      fontFamily: 'Nunito-Bold',

                      fontSize: theme.sizes.h6,
                    }}>
                    S'inscrire
                  </Text>
                )}
              </RNBounceable>
            </View>
          }
        </View>
      </View>
    );
  };

  const OrderSummary = () => (
    <View style={{marginHorizontal: 15, marginVertical: 15}}>
      <Text
        style={{
          color: isDarkMode ? theme.colors.antiFlashWhite : theme.colors.black,
          fontFamily: 'Nunito-SemiBold',
          fontSize: theme.sizes.h5,
        }}>
        {' '}
        Récapitulatif de la commande{' '}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 15,
          marginTop: 20,
          marginBottom: 15,
        }}>
        <Text
          style={{
            color: isDarkMode
              ? theme.colors.antiFlashWhite
              : theme.colors.black,
            fontFamily: 'Nunito-SemiBold',
          }}>
          {`${ticket} x Nom`}
        </Text>
        <Text
          style={{
            color: isDarkMode
              ? theme.colors.antiFlashWhite
              : theme.colors.black,
            fontFamily: 'Nunito-SemiBold',
          }}>
          {`${price} cfa`}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 15,
          marginTop: 20,
          marginBottom: 15,
        }}>
        <Text
          style={{
            color: isDarkMode
              ? theme.colors.antiFlashWhite
              : theme.colors.black,
            fontFamily: 'Nunito-SemiBold',
          }}>
          {`Frais`}
        </Text>
        <Text
          style={{
            color: isDarkMode
              ? theme.colors.antiFlashWhite
              : theme.colors.black,
            fontFamily: 'Nunito-SemiBold',
          }}>
          {`${parseInt(price) * 0.15} cfa`}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 15,
          marginVertical: 15,
        }}>
        <Text
          style={{
            color: isDarkMode
              ? theme.colors.antiFlashWhite
              : theme.colors.black,
            fontFamily: 'Nunito-SemiBold',
            fontSize: theme.sizes.h4,
          }}>
          {`Total`}
        </Text>
        <Text
          style={{
            color: isDarkMode
              ? theme.colors.antiFlashWhite
              : theme.colors.black,
            fontFamily: 'Nunito-Bold',
            fontSize: theme.sizes.h4,
          }}>
          {`${parseInt(price) + parseInt(price) * 0.15} cfa`}
        </Text>
      </View>
    </View>
  );

  const ModalBottomSection = () => (
    <View
      style={{
        height: 100,
        width,
        borderRadius: 10,
        opacity: 0.9,
        position: 'absolute',
        backgroundColor: isDarkMode ? '#1A2026' : theme.colors.white,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <RNBounceable
        style={{
          borderRadius: 3,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: isDarkMode
            ? theme.colors.antiFlashWhite
            : theme.colors.bluetiful,
          width: width / 1.1,
          height: 40,
          marginBottom: 10,
        }}
        onPress={() => setModal(!modal)}>
        {/* <Icon
          name={'finger-print-outline'}
          color={isDarkMode ? theme.colors.antiFlashWhite : theme.colors.black}
          size={60}
        /> */}
        <Text
          style={{
            color: isDarkMode ? theme.colors.dark : theme.colors.white,
            fontFamily: 'Nunito-Bold',

            fontSize: theme.sizes.h6,
          }}>
          Continuer
        </Text>
      </RNBounceable>
    </View>
  );

  const Wallt = () => {
    return (
      <View style={{marginHorizontal: 15, marginVertical: 15}}>
        <View
          style={{
            backgroundColor: '#fff0c5',
            height: 140,
            width: width / 1.1,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
          <View style={{marginHorizontal: 25}}>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Nunito-SemiBold',
                letterSpacing: 1.2,
              }}>
              Portefeuille (FCFA)
            </Text>
            <View style={{marginTop: 15}}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Nunito-SemiBold',
                  fontSize: 30,
                  letterSpacing: 1.4,
                }}>
                <Text style={{fontSize: 18}}>Total</Text> 18000 CFA
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const SummaryModal = () => (
    <Modal
      animated
      animationType="slide"
      visible={modal}
      transparent
      onRequestClose={() => setModal(false)}>
      <View
        style={{
          flex: 1,
          backgroundColor: isDarkMode ? theme.colors.dark : '#F6F6F7',
        }}>
        {/* <Header /> */}
        <View style={{marginVertical: 20}}>
          <Wallt />
          <OrderSummary />
        </View>

        <ModalBottomSection />
      </View>
    </Modal>
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? theme.colors.dark : '#F6F6F7',
      }}>
      <Header value={'Panier'} />
      <Intro />
      <Information />
      <Outro />

      <SummaryModal />
      <ButtomBarSection />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F6F6F7',
  },
});

export default Cart;
