import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Google from '../Components/svgs/google';
import Tiktok from '../Components/svgs/tiktok';
import Instagram from '../Components/svgs/instagram';
import {theme} from '../Constants/index';

const Identification = (props: {
  navigation: {navigate: (arg0: string) => void};
}): JSX.Element => {
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.greyblack}}>
      <View style={{flex: 0.3}}>
        <Text style={[styles.introduction]}>Identification</Text>
        <Text style={[styles.int]}>
          Gérez votre compte, aimez les événements, suivez les organisateurs.
        </Text>
      </View>

      <View style={{flex: 0.6, justifyContent: 'flex-start'}}>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntxt}>Continue avec Email</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.btn}>
            <Google />
            <View style={{width: 20}} />
            <Text style={styles.btntxt}>Continue avec Google</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.btn}>
            <Tiktok />
            <View style={{width: 20}} />
            <Text style={styles.btntxt}>Continue avec Tiktok</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.btn}>
            <Instagram />
            <View style={{width: 20}} />
            <Text style={styles.btntxt}>Continue avec Instagram</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flex: 0.1,
          justifyContent: 'flex-end',
          backgroundColor: theme.colors.grey,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 20,
          }}>
          <Text
            style={{
              color: theme.colors.black,
              fontSize: theme.sizes.h7,
              fontFamily: 'Nunito-SemiBold',
            }}>
            {' '}
            Vous n'avez pas de compte?{' '}
          </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Inscription')}>
            <Text
              style={{
                color: theme.colors.blue,
                fontSize: theme.sizes.h6,
                fontFamily: 'Nunito-SemiBold',
              }}>
              Inscrivez-vous
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  introduction: {
    fontSize: theme.sizes.h3,
    fontFamily: 'Nunito-SemiBold',
    color: theme.colors.black,
    position: 'relative',
    marginTop: 50,
    marginLeft: 28,
  },
  int: {
    fontSize: theme.sizes.h6,
    fontFamily: 'Nunito-SemiBold',
    color: theme.colors.black,
    marginTop: 20,
    marginLeft: 35,
  },
  btn: {
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
  },
  btntxt: {
    fontSize: theme.sizes.h6,
    fontFamily: 'Nunito-SemiBold',
    color: theme.colors.black,
  },
});

export default Identification;
