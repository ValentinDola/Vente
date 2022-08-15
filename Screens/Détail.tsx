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
import Share from 'react-native-share';
import { theme } from '../Constants/index';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useSelector, useDispatch } from 'react-redux';
import RNBounceable from '@freakycoder/react-native-bounceable';
import Like from '../Constants/like';

const { width, height } = Dimensions.get('window');

const Detail = ({ navigation, route }: any) => {
  const [selectedEvent, setSelectedEvent]: any = useState({});
  const [ticket, setTicket]: any = useState('1');
  // const [liked, setLiked] = useState(false);
  // const [likeCount, setLikeCount] = useState([]);
  const [follow, setFollow] = useState(false);
  const [followCount, setFollowCount] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    let { selectedEvent } = route.params;
    setSelectedEvent(selectedEvent);
  }, []);


  // const onShare = (item: any) => (
  //   Share.open(item.name)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       err && console.log(err);
  //     })
  // );

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
            <RNBounceable
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
            </RNBounceable>
            <View
              style={{

                backgroundColor: theme.colors.grey,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 10,
                borderRadius: 5,
                opacity: 0.7,
              }}>
              <Like itemData={selectedEvent} />
              {/* <View style={{ width: 15 }} />
              <RNBounceable onPress={() => onShare(selectedEvent)}>
                <Icon
                  name="ios-share-outline"
                  size={24}
                  color={theme.colors.black}
                />
              </RNBounceable> */}
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
                  width: 200,
                  fontSize: theme.sizes.h3,
                  color: theme.colors.white,
                }}>
                {selectedEvent?.name}
              </Text>
              <Text
                style={{
                  fontFamily: 'Nunito-SemiBold',
                  opacity: 0.6,
                  letterSpacing: 1.5,
                  fontSize: theme.sizes.h5,
                  color: theme.colors.white,
                }}>
                Début. {moment(selectedEvent?.startDate).format('LT')}
                {/* {selectedEvent?.startTime} */}
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
                {moment(selectedEvent?.startDate).format('MMM')}
              </Text>
              <Text
                style={{
                  color: theme.colors.black,
                  fontFamily: 'Nunito-SemiBold',
                  fontSize: theme.sizes.h3,
                }}>
                {moment(selectedEvent?.startDate).format('DD')}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  };



  const IntroductionComponent = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 10 }} >
        <View style={{ marginVertical: 20, width: width / 2 }}>
          <Text
            style={{
              color: theme.colors.black,
              fontFamily: 'Nunito-Bold',
              fontSize: theme.sizes.h5,
            }}>
            {selectedEvent?.name}
          </Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
          <View style={{ backgroundColor: '#B5FBDD', height: 25, width: 75, justifyContent: 'center', alignItems: 'center', marginBottom: 10, borderRadius: 3 }} >
            <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-SemiBold', textTransform: 'uppercase', fontSize: 12, letterSpacing: 2 }}>
              {selectedEvent?.eventStatus}
            </Text>
          </View>

          <View style={{ backgroundColor: '#F7F272', height: 25, width: 70, justifyContent: 'center', alignItems: 'center', borderRadius: 3 }} >
            <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-SemiBold', textTransform: 'uppercase', fontSize: 12 }}>
              {selectedEvent?.eventAttendanceMode}
            </Text>
          </View>
        </View>
      </View>

    );
  };

  const DescriptionSection = () => {
    return (
      <View style={{ marginHorizontal: 20 }}>
        <View
          style={{
            marginBottom: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>

            <Text
              style={{
                color: theme.colors.blue,
                fontFamily: 'Nunito-Bold',
                fontSize: theme.sizes.h6,
                width: width / 2
              }}>
              {selectedEvent?.organizer?.name}
            </Text>

          </View>
          <RNBounceable
            style={{
              height: 35,
              width: 100,
              backgroundColor: 'transparent',
              borderColor: theme.colors.blue,
              borderWidth: 2,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 3,
            }} onPress={() => setFollow(!follow)} >
            <Text
              style={{ color: theme.colors.blue, fontFamily: 'Nunito-SemiBold' }}>
              {follow === false ? "S'abonner" : 'Tu es Abonne'}

            </Text>
          </RNBounceable>
        </View>
        <View style={{ marginBottom: 25 }}>
          <Text
            style={{
              color: theme.colors.black,
              fontFamily: 'Nunito-Bold',
              fontSize: theme.sizes.h5,
            }}>
            Date et l'heure
          </Text>
          <Text
            style={{
              color: theme.colors.black,
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h8,
              marginTop: 5,
            }}>
            {moment(selectedEvent?.startDate).format('D MMMM YYYY')} - {moment(selectedEvent?.endDate).format('D MMMM YYYY')}
          </Text>
          <Text
            style={{
              color: theme.colors.black,
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h8,
              marginTop: 3,
            }}>
            Début. {moment(selectedEvent?.startDate).format('LT')} - {moment(selectedEvent?.endDate).format('LT')}
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: theme.colors.black,
              fontFamily: 'Nunito-Bold',
              fontSize: theme.sizes.h5,
              marginBottom: 5
            }}>
            Description
          </Text>
          <Text
            style={{
              color: theme.colors.black,
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h8,
              letterSpacing: 0.5,
            }}>
            {selectedEvent?.description}
          </Text>
        </View>
      </View>
    );
  };

  const LocationSection = () => {
    return (
      <View
        style={{
          marginTop: 35,
          marginHorizontal: 20,
        }}>
        <Text
          style={{
            color: theme.colors.black,
            fontFamily: 'Nunito-Bold',
            fontSize: theme.sizes.h5,
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
              fontSize: theme.sizes.h8,
              width: 250

            }}>
            {selectedEvent?.location?.name} - {selectedEvent?.location?.address?.streetAddress}
          </Text>
          <TouchableOpacity
            onPress={() => console.log('Locate')}
          >
            <Icon

              name="location-outline"
              size={24}
              color={theme.colors.black}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const PriceSection = () => {
    return (
      <View
        style={{
          marginTop: 25,
          marginHorizontal: 20,
          marginBottom: 70
        }}>
        <Text
          style={{
            color: theme.colors.black,
            fontFamily: 'Nunito-Bold',
            fontSize: theme.sizes.h5,
          }}>
          Ticket
        </Text>
        <View
          style={{ marginVertical: 5, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}
        >
          <Text
            style={{
              color: theme.colors.black,
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h8,


            }}>
            {selectedEvent?.offers?.priceFirst} fcfa
          </Text>
          <Text
            style={{
              color: theme.colors.black,
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h8,


            }}>
            {selectedEvent?.offers?.priceSecond} fcfa
          </Text>
          <Text
            style={{
              color: theme.colors.black,
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h8,


            }}>
            {selectedEvent?.offers?.reservation} fcfa
          </Text>

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
          backgroundColor: theme.colors.white,
          bottom: 0,
          justifyContent: 'center',
        }}>
        <View
          style={{
            marginHorizontal: 20,
          }}>
          {
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <RNBounceable
                style={{
                  borderRadius: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: theme.colors.bluetiful,
                  width: width / 1.1,
                  height: 40,
                }} onPress={() => navigation.navigate('Cart', { selectedEvent })} >
                <Text
                  style={{
                    color: theme.colors.white,
                    fontFamily: 'Nunito-Bold',

                    fontSize: theme.sizes.h6,
                  }}>
                  Billets
                </Text>
              </RNBounceable>

            </View>
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

        <IntroductionComponent />

        {/* Description section */}
        <DescriptionSection />

        {/* Location section */}
        <LocationSection />
        {/* Promotion section */}
        <PriceSection />
        {/* {selectedEvent?.promotion?.state === true && <PromotionSection />} */}
      </ScrollView>
      {/* Buttom bar section */}
      {<ButtomBarSection />}
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
