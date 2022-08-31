import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {theme} from '../Constants';
import RNBounceable from '@freakycoder/react-native-bounceable';
import Header from '../Components/Header';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

interface CheckoutProps {
  route: any;
}

const Checkout = (props: CheckoutProps) => {
  const navigation = useNavigation();

  const [selectedEvent, setSelectedEvent]: any = useState({});
  const [newData, setNewData]: any = useState({});
  const [loading, setLoading]: any = useState(false);
  const [totalAmount, setTotalAmount]: any = useState('');

  useEffect(() => {
    const {route} = props;
    let {selectedEvent} = route.params;
    setSelectedEvent(selectedEvent);
  }, []);

  useEffect(() => {
    const {route} = props;
    let {finalData} = route.params;
    setTimeout(() => {
      setNewData(finalData);
    }, 2000);
  });

  const getTotal = () => {
    const price = parseInt(newData?.price) + parseInt(newData?.price) * 0.3;
    if (price) setTotalAmount(price);
    return price;
  };

  const proccessing = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Overview', {totalAmount});
    }, 10000);
  };

  const TotalSection = () => {
    return (
      <View style={{marginHorizontal: 15, marginVertical: 5}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <View
            style={{
              backgroundColor: theme.colors.white,
              height: 200,
              width: width / 1.1,
            }}>
            <Text
              style={{
                fontFamily: 'Nunito-Bold',
                color: 'black',
                fontSize: theme.sizes.h4,
                marginHorizontal: 15,
                marginVertical: 15,
              }}>
              {selectedEvent?.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#B5FBDD',
                  height: 25,
                  width: 85,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 10,
                  borderRadius: 3,
                }}>
                <Text
                  style={{
                    color: theme.colors.black,
                    fontFamily: 'Nunito-SemiBold',
                    textTransform: 'uppercase',
                    fontSize: 12,
                    letterSpacing: 2,
                  }}>
                  {selectedEvent?.eventStatus
                    ? selectedEvent?.eventStatus
                    : 'loading'}
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: '#F7F272',
                  height: 25,
                  width: 75,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 3,
                }}>
                <Text
                  style={{
                    color: theme.colors.black,
                    fontFamily: 'Nunito-SemiBold',
                    textTransform: 'uppercase',
                    fontSize: 12,
                  }}>
                  {newData ? `${newData?.price} cfa` : 'loading'}
                </Text>
              </View>
            </View>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Nunito-Bold',
                marginHorizontal: 15,
                fontSize: theme.sizes.h6,
              }}>
              - Ticket : {newData?.price}
            </Text>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Nunito-Bold',
                marginHorizontal: 15,
                fontSize: theme.sizes.h6,
              }}>
              - Frais de système : {parseInt(newData?.price) * 0.15}
            </Text>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Nunito-Bold',
                marginHorizontal: 15,
                fontSize: theme.sizes.h6,
              }}>
              - Frais de transaction : {parseInt(newData?.price) * 0.15}
            </Text>
          </View>
        </View>

        <View style={{marginVertical: 15}}>
          <Text
            style={{
              fontFamily: 'Nunito-Bold',
              color: 'black',
              fontSize: theme.sizes.h3,
            }}>
            Sommaire
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 15,
            }}>
            <Text
              style={{
                fontFamily: 'Nunito-Bold',
                color: 'grey',
                fontSize: theme.sizes.h6,
              }}>
              Sous Total
            </Text>
            <Text
              style={{
                fontFamily: 'Nunito-Bold',
                color: 'black',
                fontSize: theme.sizes.h6,
                letterSpacing: 0.5,
              }}>
              {newData?.price}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Nunito-Bold',
                color: 'grey',
                fontSize: theme.sizes.h6,
              }}>
              Frais
            </Text>
            <Text
              style={{
                fontFamily: 'Nunito-Bold',
                color: 'black',
                fontSize: theme.sizes.h6,
                letterSpacing: 0.5,
              }}>
              {parseInt(newData?.price) * 0.3}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 15,
            }}>
            <Text
              style={{
                fontFamily: 'Nunito-Bold',
                color: 'black',
                fontSize: theme.sizes.h2,
              }}>
              Total
            </Text>
            <Text
              style={{
                fontFamily: 'Nunito-Bold',
                color: 'black',
                fontSize: theme.sizes.h2,
                letterSpacing: 0.5,
              }}>
              {getTotal()} {selectedEvent?.offers?.priceCurrency}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const Wallet = () => {
    return (
      <View style={{marginHorizontal: 15}}>
        <RNBounceable
          style={{
            backgroundColor: theme.colors.white,
            height: 60,
            width: width / 1.1,
            borderRadius: 3,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Icon name={'wallet'} size={18} color={'#45D09E'} />

          <Text
            style={{
              color: 'black',
              fontFamily: 'Nunito-Bold',
              fontSize: theme.sizes.h4,
            }}>
            Portefeuille
          </Text>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Nunito-Bold',
              fontSize: theme.sizes.h6,
            }}>
            18000cfa
          </Text>
        </RNBounceable>
      </View>
    );
  };

  const ButtomBarSection = () => {
    return (
      <View
        style={{
          height: 60,
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
                  backgroundColor: theme.colors.blue,
                  width: width / 1.1,
                  height: 40,
                  marginBottom: 20,
                  flexDirection: 'row',
                }}
                onPress={() => proccessing()}>
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
                    Continuer avec portefeuille
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
    <View style={styles.screen}>
      <Header value={'Vérification'} />
      <TotalSection />
      <Wallet />
      <ButtomBarSection />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#F6F6F7',
    flex: 1,
  },
});

export default Checkout;
