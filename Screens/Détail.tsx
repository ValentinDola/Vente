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

import React, { useState, useEffect } from 'react';
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
  TextInput,
} from 'react-native';
import moment from 'moment';
// import TextInput from 'react-native-text-input-interactive';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '../Constants/index';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useSelector, useDispatch } from 'react-redux';
import { selectLike, setLike } from '../Slices/app';

const { width, height } = Dimensions.get('window');

const Detail = ({ navigation, route }: any) => {
  const [selectedEvent, setSelectedEvent]: any = useState(null);
  const [ticket, setTicket]: any = useState('1');
  const [liked, setLiked] = useState(false);

  const like = useSelector(selectLike);

  const dispatch = useDispatch();

  useEffect(() => {
    let { selectedEvent } = route.params;
    setSelectedEvent(selectedEvent);
  }, []);

  const onLike = () => (
    setLiked(!liked),
    console.log(`You liked ${selectedEvent?.title}`)

  )

  const ImageBackgroundComponent = () => {
    return (
      <ImageBackground
        source={selectedEvent?.image}
        style={{ width: '100%', height: height / 2.2 }}>
        {/* Image Header */}
        <View style={{ flex: 1 }}>
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
              <TouchableOpacity
                onPress={() => onLike()}
              >
                <Icon
                  name={liked === false ? "ios-heart-outline" : "ios-heart"}
                  size={24}
                  color={liked === false ? theme.colors.black : 'red'}
                />
              </TouchableOpacity>
              <View style={{ width: 15 }} />
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
                Début. {moment(selectedEvent?.startTime).format('LT')}
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
                {moment(selectedEvent?.date).format('MMM')}
              </Text>
              <Text
                style={{
                  color: theme.colors.black,
                  fontFamily: 'Nunito-SemiBold',
                  fontSize: theme.sizes.h3,
                }}>
                {moment(selectedEvent?.date).format('DD')}
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
      <View style={{ marginHorizontal: 20 }}>
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
      <View style={{ marginTop: 15, marginHorizontal: 20, marginBottom: selectedEvent?.promotion.state === false ? 150 : 0 }}>
        <Text
          style={{
            color: theme.colors.black,
            fontFamily: 'Nunito-SemiBold',
            fontSize: theme.sizes.h4,
          }}>
          Lieux
        </Text>
        <View
          style={{
            marginVertical: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: theme.colors.black,
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h7,
            }}>
            {selectedEvent?.location}
          </Text>
          <TouchableOpacity
            onPress={() => console.log('Locate')}
            style={{
              backgroundColor: theme.colors.bluetiful,
              padding: 6,
              borderRadius: 10,
              opacity: 0.7,
            }}>
            <Icon
              style={{
                backgroundColor: theme.colors.bluetiful,
                padding: 6,
                borderRadius: 10,
                // opacity: 0.7,
              }}
              name="location-outline"
              size={24}
              color={theme.colors.black}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const PromotionSection = () => {
    return (
      <View style={{ marginTop: 5, marginHorizontal: 20 }}>
        <Text
          style={{
            color: theme.colors.black,
            fontFamily: 'Nunito-SemiBold',
            fontSize: theme.sizes.h4,
          }}>
          Promotion
        </Text>
        <View style={{ marginVertical: 5 }}>
          <Text
            style={{
              color: theme.colors.black,
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h7,
            }}>
            {selectedEvent?.promotion?.detail}
          </Text>
        </View>
        <View style={{ paddingBottom: selectedEvent?.price !== 0 ? 140 : 80 }} />
      </View>
    );
  };

  const ButtomBarSection = () => {
    return (
      <View
        style={{
          height: 140,
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
            // flexDirection: 'row',
            // justifyContent: 'space-between',
            // alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 20,
            }}>
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
                {selectedEvent?.price + 'f'}
              </Text>
              {
                <Text
                  style={{
                    color: theme.colors.black,
                    fontFamily: 'Nunito-SemiBold',
                    fontSize: theme.sizes.h6,
                  }}>
                  {' '}
                  / personne
                </Text>
              }
            </View>
            <View>
              <TextInput
                defaultValue={ticket}
                style={{
                  height: 40,

                  width: 80,
                  backgroundColor: 'transparent',
                  borderWidth: 3,
                  borderRadius: 5,
                  paddingLeft: 10,
                  fontFamily: 'Nunito-SemiBold',
                  fontSize: theme.sizes.h6,
                  color: theme.colors.black,
                  borderColor: theme.colors.bluetiful,
                }}
                onChangeText={text => setTicket(text)}
                keyboardType={'number-pad'}
              />
            </View>
          </View>
          {
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

                  fontSize: theme.sizes.h5,
                }}>
                Acheter Billet
              </Text>
            </TouchableOpacity>
          }
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, backgroundColor: '#F6F6F7' }}
        style={{ backgroundColor: '#F6F6F7' }}>
        {/* ImageBackground */}
        <ImageBackgroundComponent />
        {/* Buttons group section */}
        <DescriptionButton />
        {/* Description section */}
        <DescriptionSection />
        {/* Location section */}
        <LocationSection />
        {/* Promotion section */}
        {selectedEvent?.promotion?.state === true && <PromotionSection />}
      </ScrollView>
      {/* Buttom bar section */}
      {selectedEvent?.price !== 0 && <ButtomBarSection />}
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
