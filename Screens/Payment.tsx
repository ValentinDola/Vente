import {View, Text, useColorScheme, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import {theme} from '../Constants';
import Header from '../Components/Header';
import RNBounceable from '@freakycoder/react-native-bounceable';
import Google from '../Components/svgs/google';
import PayPal from '../Components/svgs/paypal';
import Debit from '../Components/svgs/debit';

const {width, height} = Dimensions.get('screen');

const Payment = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const Banner = () => (
    <View
      style={{
        width,

        backgroundColor: '#F5E027',
        marginTop: 20,
      }}>
      <Text
        style={{
          paddingVertical: 15,
          paddingHorizontal: 15,
          color: 'black',
          fontSize: theme.sizes.h7,
          fontFamily: 'Nunito-SemiBold',
        }}>
        Vous devez accepter les conditions d'utilisation de{' '}
        <Text style={{fontFamily: 'Nunito-Black'}}>Vente</Text> pour finaliser
        cet achat.
      </Text>
    </View>
  );

  const PayWithGooglePay = () => {

    const googlePay = () => {
      return (
        
      )
    }

    return (
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 5,
        }}>
        <View>
          <RNBounceable
            style={[styles.btn, {borderColor: isDarkMode ? 'white' : 'black'}]} onPress={googlePay} >
            <Google />
            <View style={{width: 20}} />

            <Text
              style={[styles.btntxt, {color: isDarkMode ? 'white' : 'black'}]}>
              Google Pay
            </Text>
          </RNBounceable>
        </View>
      </View>
    );
  };

  const PayWithPayPal = () => {
    return (
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 5,
        }}>
        <View>
          <RNBounceable
            style={[styles.btn, {borderColor: isDarkMode ? 'white' : 'black'}]}>
            <PayPal />
            <View style={{width: 20}} />

            <Text
              style={[styles.btntxt, {color: isDarkMode ? 'white' : 'black'}]}>
              PayPal
            </Text>
          </RNBounceable>
        </View>
      </View>
    );
  };

  const PayWithDebitOrCredit = () => {
    return (
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 5,
        }}>
        <View>
          <RNBounceable
            style={[styles.btn, {borderColor: isDarkMode ? 'white' : 'black'}]}>
            <Debit />
            <View style={{width: 20}} />

            <Text
              style={[styles.btntxt, {color: isDarkMode ? 'white' : 'black'}]}>
              Carte de débit
            </Text>
          </RNBounceable>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? theme.colors.dark : '#F6F6F7',
      }}>
      <Header value={'Vérifier'} />
      <Banner />

      <View style={{marginTop: 40}}>
        <Text
          style={{
            marginHorizontal: 15,
            marginVertical: 15,
            color: isDarkMode ? 'whitesmoke' : 'black',
            fontFamily: 'Nunito-Black',
            fontSize: theme.sizes.h3,
          }}>
          Mode de paiement
        </Text>
        <PayWithGooglePay />
        <PayWithPayPal />
        <PayWithDebitOrCredit />
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    height: 45,
    borderRadius: 3,

    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
    paddingHorizontal: 5,
    marginVertical: 10,
  },
  btntxt: {
    fontSize: theme.sizes.h6,
    fontFamily: 'Nunito-SemiBold',
  },
  screen: {
    flex: 1,
    backgroundColor: '#F6F6F7',
  },
  container: {
    backgroundColor: 'white',
    width: '90%',
    height: 45,
    marginVertical: 10,
    borderRadius: 3,
  },
});
