import {View, Text, useColorScheme, Dimensions} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {theme} from '../Constants';

const {width, height} = Dimensions.get('screen');

const NoInternet = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const Content = () => (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: height / 1.2,
      }}>
      <View>
        <Feather
          name={'info'}
          color={isDarkMode ? 'white' : 'black'}
          size={100}
        />
      </View>
      <View style={{marginVertical: 20}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: 'Nunito-Light',
              color: isDarkMode ? 'white' : 'black',
              fontSize: theme.sizes.h6,
              marginVertical: 5,
            }}>
            Désolé, quelque chose s'est mal passé.
          </Text>
          <Text
            style={{
              fontFamily: 'Nunito-Light',
              color: isDarkMode ? 'white' : 'black',
              fontSize: theme.sizes.h9,
            }}>
            Cela n'a pas fonctionné, veuillez réessayer.
          </Text>
        </View>
      </View>
    </View>
  );

  const Banner = () => (
    <View
      style={{
        backgroundColor: theme.colors.black,
        width,
        height: 35,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontFamily: 'Nunito-Light', color: 'white'}}>
        Aucune connexion Internet disponible.
      </Text>
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? '#212529' : '#F6F6F7',
      }}>
      <Content />
      <Banner />
    </View>
  );
};

export default NoInternet;
