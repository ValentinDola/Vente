/**
 *  - Event Detail Screnn
 * -> The screen can be seperated 4 sections
 *
 * TODO:
 * [] Build the header image background section
 *    [X] Rendering the image background sub section (ImageBackground)
 *    [X] Rendering the header sub section
 *    [X] Rendering the footer sub section
 * [X] Build the buttons group section
 * [X] Build the description section
 * [] Build the location section (google map in dark mode)
 * [X] Build the fixed bottom bar
 */

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Platform,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import {Region, MapStyle} from '../Constants/dummy-data';
import {theme} from '../Constants/index';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const {width, height} = Dimensions.get('window');

const Detail = ({navigation, route}: any) => {
  const [selectedEvent, setSelectedEvent]: any = useState(null);

  useEffect(() => {
    let {selectedEvent} = route.params;
    setSelectedEvent(selectedEvent);
  }, []);

  const ImageBackgroundComponent = () => {
    return (
      <ImageBackground
        source={selectedEvent?.image}
        style={{width: '100%', height: height / 2.2}}>
        {/* Image Header */}
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: Platform.OS === 'ios' ? 30 : 20,
              marginHorizontal: 15,
            }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                backgroundColor: theme.colors.grey,
                padding: 5,
                borderRadius: 10,
                opacity: 0.7,
              }}>
              <Icon
                name="ios-chevron-back-outline"
                size={24}
                color={theme.colors.black}
              />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                backgroundColor: theme.colors.grey,
                alignItems: 'center',
                paddingHorizontal: 10,
                borderRadius: 5,
                opacity: 0.7,
              }}>
              <TouchableOpacity onPress={() => console.log('You like it')}>
                <Icon
                  name="ios-heart-outline"
                  size={24}
                  color={theme.colors.black}
                />
              </TouchableOpacity>
              <View style={{width: 15}} />
              <TouchableOpacity onPress={() => console.log('Share it')}>
                <Icon
                  name="ios-share-outline"
                  size={24}
                  color={theme.colors.black}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Image footer */}
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginLeft: 15,
              marginBottom: 30,
            }}>
            <View>
              <Text
                style={{
                  textTransform: 'uppercase',
                  fontFamily: 'Nunito-SemiBold',
                  opacity: 0.6,
                  letterSpacing: 2,
                  fontSize: theme.sizes.h5,
                  color: theme.colors.white,
                }}>
                {selectedEvent?.type}
              </Text>
              <Text
                style={{
                  fontFamily: 'Nunito-SemiBold',

                  fontSize: theme.sizes.h3,
                  color: theme.colors.white,
                }}>
                {selectedEvent?.title}
              </Text>
              <Text
                style={{
                  fontFamily: 'Nunito-SemiBold',
                  opacity: 0.6,
                  letterSpacing: 1.5,
                  fontSize: theme.sizes.h5,
                  color: theme.colors.white,
                }}>
                Départ. {moment(selectedEvent?.startTime).format('HH:mm')}
              </Text>
            </View>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: theme.colors.white,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 0.5,
                marginRight: 15,
              }}>
              <Text
                style={{
                  color: theme.colors.black,
                  fontFamily: 'Nunito-SemiBold',
                }}>
                {moment(selectedEvent?.startTime).format('MMM')}
              </Text>
              <Text
                style={{
                  color: theme.colors.black,
                  fontFamily: 'Nunito-SemiBold',
                  fontSize: theme.sizes.h3,
                }}>
                {moment(selectedEvent?.startTime).format('DD')}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  };

  const DescriptionButton = () => {
    return (
      <View
        style={{
          margin: 15,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.bluetiful,
          }}>
          <Text
            style={{
              color: theme.colors.white,
              fontFamily: 'Nunito-SemiBold',
              paddingVertical: 10,
              paddingHorizontal: 15,
              fontSize: theme.sizes.h7,
            }}>
            À propos de
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 5,
            marginHorizontal: 15,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.white,
          }}>
          <Text
            style={{
              color: theme.colors.black,
              fontFamily: 'Nunito-SemiBold',
              paddingVertical: 10,
              paddingHorizontal: 15,
              fontSize: theme.sizes.h7,
            }}>
            Participants
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const DescriptionSection = () => {
    return (
      <View style={{marginHorizontal: 20}}>
        <Text
          style={{
            color: theme.colors.black,
            fontFamily: 'Nunito-SemiBold',
            fontSize: theme.sizes.h7,
          }}>
          {selectedEvent?.description}
        </Text>
      </View>
    );
  };

  const LocationSection = () => {
    return (
      <View style={{marginTop: 15, marginHorizontal: 20}}>
        <Text
          style={{
            color: theme.colors.black,
            fontFamily: 'Nunito-SemiBold',
            fontSize: theme.sizes.h4,
          }}>
          Location
        </Text>
        <View style={{height: 250}}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{height: 250, borderRadius: 30, marginTop: 20}}
            minZoomLevel={15}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}></MapView>
        </View>
        <View style={{paddingBottom: 120}} />
      </View>
    );
  };

  const ButtomBarSection = () => {
    return (
      <View
        style={{
          height: 80,
          width,
          borderRadius: 10,
          opacity: 0.9,
          position: 'absolute',
          backgroundColor: theme.colors.grey,
          bottom: 0,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <View>
            {selectedEvent?.price !== 0 && (
              <Text
                style={{
                  color: theme.colors.black,
                  fontFamily: 'Nunito-SemiBold',
                  letterSpacing: 1,
                  opacity: 0.8,
                }}>
                PRIX
              </Text>
            )}

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: theme.colors.black,
                  fontFamily: 'Nunito-SemiBold',
                  fontSize: theme.sizes.h3,
                }}>
                {selectedEvent?.price === 0 ? 'Gratuit' : selectedEvent?.price}
              </Text>
              {selectedEvent?.price !== 0 && (
                <Text
                  style={{
                    color: theme.colors.black,
                    fontFamily: 'Nunito-SemiBold',
                    fontSize: theme.sizes.h6,
                  }}>
                  {' '}
                  / personne
                </Text>
              )}
            </View>
          </View>
          {selectedEvent?.price !== 0 && (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                borderRadius: 5,
                justifyContent: 'space-around',
                alignItems: 'center',
                backgroundColor: theme.colors.bluetiful,
              }}>
              <Text
                style={{
                  color: theme.colors.white,
                  fontFamily: 'Nunito-SemiBold',
                  paddingVertical: 10,
                  paddingHorizontal: 10,
                  fontSize: theme.sizes.h6,
                }}>
                Acheter Billet
              </Text>
              <Image
                source={require('../assets/images/splash/ticket.png')}
                style={{width: 23, height: 23, marginRight: 10}}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, backgroundColor: '#F6F6F7'}}
        style={{backgroundColor: '#F6F6F7'}}>
        {/* ImageBackground */}
        <ImageBackgroundComponent />
        {/* Buttons group section */}
        <DescriptionButton />
        {/* Description section */}
        <DescriptionSection />
        {/* Location section */}
        <LocationSection />
      </ScrollView>
      {/* Buttom bar section */}
      <ButtomBarSection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F7',
  },
});

export default Detail;
