import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
  useColorScheme,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {theme} from '../Constants';
import {useDispatch, useSelector} from 'react-redux';
import RNBounceable from '@freakycoder/react-native-bounceable';

import {transactions} from '../Constants/dummy-data';
import Header from '../Components/Header';

const {width, height} = Dimensions.get('screen');

const Portefeuille = ({navigation, route}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const TotalAmount = () => {
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

  const ActionButtons = () => {
    return (
      <View
        style={{
          marginHorizontal: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <RNBounceable
          style={{
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.grey,
            width: 150,
            height: 45,
          }}
          onPress={() => navigation.navigate('Recharge')}>
          <Text style={{fontFamily: 'Nunito-SemiBold', color: 'black'}}>
            Recharge
          </Text>
        </RNBounceable>

        <RNBounceable
          style={{
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.grey,
            width: 150,
            height: 45,
          }}
          onPress={() => navigation.navigate('Retrait')}>
          <Text style={{fontFamily: 'Nunito-SemiBold', color: 'black'}}>
            Retrait
          </Text>
        </RNBounceable>
      </View>
    );
  };

  const Transactions = () => {
    const mappedData = (item: any) =>
      item.map((ticket, index) => (
        <View style={{marginTop: 15}} key={index}>
          <RNBounceable
            style={{
              backgroundColor: 'transparent',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 10,
            }}
            onPress={() => console.log(ticket)}>
            <View
              style={{
                backgroundColor: ticket?.color,
                height: 60,
                width: 60,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name={ticket?.icon} color={'white'} size={30} />
            </View>
            <View
              style={{
                width: width - 100,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{
                    color: isDarkMode ? theme.colors.antiFlashWhite : 'black',
                    marginBottom: 10,
                    fontFamily: 'Nunito-SemiBold',
                  }}>
                  {ticket?.actionID}
                </Text>
                <Text
                  style={{
                    color: isDarkMode ? theme.colors.antiFlashWhite : 'grey',
                    fontFamily: 'Nunito-SemiBold',
                  }}>
                  {ticket?.action}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: isDarkMode ? theme.colors.antiFlashWhite : 'black',
                    marginBottom: 10,
                    fontFamily: 'Nunito-SemiBold',
                  }}>
                  {ticket?.price?.concat('f')}
                </Text>
                <Text
                  style={{
                    color: isDarkMode ? theme.colors.antiFlashWhite : 'grey',
                    fontFamily: 'Nunito-SemiBold',
                  }}>
                  {ticket?.actionTime}
                </Text>
              </View>
            </View>
          </RNBounceable>
        </View>
      ));

    return (
      <View style={{marginHorizontal: 15, marginTop: 25}}>
        <View>
          <Text
            style={{
              fontFamily: 'Nunito-Bold',
              color: isDarkMode ? theme.colors.antiFlashWhite : 'black',
              fontSize: theme.sizes.h5,
            }}>
            Transactions
          </Text>
        </View>
        <View>
          {transactions?.length > 0 ? (
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{height: height - 500, marginTop: 20, marginBottom: 20}}>
              {mappedData(transactions)}
            </ScrollView>
          ) : (
            <View
              style={{
                height: height - 500,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="ios-earth-outline" color="black" size={150} />
            </View>
          )}
        </View>
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
          backgroundColor: isDarkMode ? '#1A2026' : theme.colors.white,
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
                  backgroundColor: isDarkMode ? 'white' : theme.colors.black,
                  width: width / 1.1,
                  height: 40,
                }}
                onPress={() => navigation.navigate('Tickets')}>
                <Text
                  style={{
                    color: isDarkMode ? theme.colors.dark : theme.colors.white,
                    fontFamily: 'Nunito-Bold',

                    fontSize: theme.sizes.h6,
                  }}>
                  Effacer l'historique
                </Text>
              </RNBounceable>
            </View>
          }
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
      <Header value={'Portefeuille'} />
      <TotalAmount />
      <ActionButtons />
      <Transactions />
      <ButtomBarSection />
    </View>
  );
};

export default Portefeuille;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F6F6F7',
  },
  MContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: 'white',
    paddingTop: 12,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: height / 1.3,
  },
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    borderColor: '#e8e8e8',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
