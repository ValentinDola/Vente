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
  TextInput,
  ActivityIndicator,
  useColorScheme,
  Alert,
} from 'react-native';
import moment from 'moment';
// import TextInput from 'react-native-text-input-interactive';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {theme} from '../Constants/index';
import {useSelector, useDispatch} from 'react-redux';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {setEvent, selectPrice, setPrice} from '../Slices/event';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import {useAuth} from '../Components/authProvider';

const {width, height} = Dimensions.get('screen');

const Detail = ({navigation, route}: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  const [selectedEvent, setSelectedEvent]: any = useState({});
  const [loading, setLoading] = useState(false);
  const [clickedId, setClickedId] = useState(-1);
  const [pageLoading, setPageLoading] = useState(true);

  const price = useSelector(selectPrice);

  const dispatch = useDispatch();
  const {currentUser} = useAuth();

  const dataTimeOut = () => {
    setTimeout(() => {
      setPageLoading(false);
      let {selectedEvent} = route.params;
      setSelectedEvent(selectedEvent);
    }, 3000);
  };

  useEffect(() => {
    dataTimeOut();
  }, []);

  const handlePrice = (
    item: boolean | React.ReactFragment | React.ReactPortal | null | undefined,
    index: any,
  ) => {
    setClickedId(index);
    dispatch(setPrice(item));
  };

  const billet = () => {
    if (currentUser !== null) {
      setLoading(true);
      selectedEvent?.offers?.type === false && dispatch(setPrice('0'));
      setTimeout(() => {
        setLoading(false);
        dispatch(setEvent(selectedEvent));
        navigation.navigate('Cart');
      }, 3000);
    } else {
      navigation.navigate('Identification');
    }
  };

  const utcDateToString = (momentInUTC: moment.MomentInput) => {
    let s = moment.utc(momentInUTC).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
    return s;
  };

  const addToCalendar = (
    title: string,
    startDateUTC: moment.MomentInput,
    endDateUTC: moment.MomentInput,
    location: string,
    description: string,
  ) => {
    const eventConfig = {
      title,
      startDate: utcDateToString(startDateUTC),
      endDate: utcDateToString(endDateUTC),
      allowsEditing: false,
      allowsCalendarPreview: true,
      location,
      notes: description,
    };

    if (currentUser !== null) {
      AddCalendarEvent.presentEventCreatingDialog(eventConfig)
        .then(eventInfo => {
          // handle success - receives an object with `calendarItemIdentifier` and `eventIdentifier` keys, both of type string.
          // These are two different identifiers on iOS.
          // On Android, where they are both equal and represent the event id, also strings.
          // when { action: 'CANCELED' } is returned, the dialog was dismissed

          if (eventInfo.action === 'SAVED') {
            console.log(JSON.stringify(eventInfo));
          }
        })
        .catch((error: string) => {
          // handle error such as when user rejected permissions
          Alert.prompt(error);
        });
    } else {
      navigation.navigate('Identification');
    }
  };

  const ImageBackgroundComponent = () => {
    return (
      <ImageBackground
        source={selectedEvent?.image}
        style={{width, height: height / 2}}>
        {/* Image Header */}
        <View style={{flex: 1}}>
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
            <RNBounceable
              style={{
                backgroundColor: theme.colors.grey,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 8,
                borderRadius: 5,
                opacity: 0.7,
              }}
              onPress={() =>
                addToCalendar(
                  selectedEvent?.name,
                  selectedEvent?.startDate,
                  selectedEvent?.endDate,
                  selectedEvent?.location?.address?.addressLocality,
                  selectedEvent?.description,
                )
              }>
              <Feather name="calendar" size={24} color={theme.colors.black} />
            </RNBounceable>
          </View>
        </View>

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

                  letterSpacing: 1.5,
                  fontSize: theme.sizes.h5,
                  color: theme.colors.white,
                }}>
                Début. {moment(selectedEvent?.startDate).format('LT')}
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginVertical: 10,
        }}>
        <View style={{marginVertical: 20, width: width / 2}}>
          <Text
            style={{
              color: isDarkMode
                ? theme.colors.antiFlashWhite
                : theme.colors.black,
              fontFamily: 'Nunito-Bold',
              fontSize: theme.sizes.h5,
            }}>
            {selectedEvent?.name}
          </Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: '#B5FBDD',
              height: 25,
              width: 75,
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
              {selectedEvent?.eventStatus}
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#F7F272',
              height: 25,
              width: 70,
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
              {selectedEvent?.eventAttendanceMode}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const DescriptionSection = () => {
    return (
      <View style={{marginHorizontal: 20}}>
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
                color: isDarkMode ? '#EEEDEA' : theme.colors.blue,
                fontFamily: 'Nunito-Bold',
                fontSize: theme.sizes.h6,
                width: width / 2,
              }}>
              {selectedEvent?.organizer?.name}
            </Text>
          </View>
        </View>
        <View style={{marginBottom: 25}}>
          <Text
            style={{
              color: isDarkMode
                ? theme.colors.antiFlashWhite
                : theme.colors.black,
              fontFamily: 'Nunito-Bold',
              fontSize: theme.sizes.h5,
            }}>
            Date et l'heure
          </Text>
          <Text
            style={{
              color: isDarkMode
                ? theme.colors.antiFlashWhite
                : theme.colors.black,
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h8,
              marginTop: 5,
            }}>
            {moment(selectedEvent?.startDate).format('D MMMM YYYY')} -{' '}
            {moment(selectedEvent?.endDate).format('D MMMM YYYY')}
          </Text>
          <Text
            style={{
              color: isDarkMode
                ? theme.colors.antiFlashWhite
                : theme.colors.black,
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h8,
              marginTop: 3,
            }}>
            Début. {moment(selectedEvent?.startDate).format('LT')} -{' '}
            {moment(selectedEvent?.endDate).format('LT')}
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: isDarkMode
                ? theme.colors.antiFlashWhite
                : theme.colors.black,
              fontFamily: 'Nunito-Bold',
              fontSize: theme.sizes.h5,
              marginBottom: 5,
            }}>
            Description
          </Text>
          <Text
            style={{
              color: isDarkMode
                ? theme.colors.antiFlashWhite
                : theme.colors.black,
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
            color: isDarkMode
              ? theme.colors.antiFlashWhite
              : theme.colors.black,
            fontFamily: 'Nunito-Bold',
            fontSize: theme.sizes.h5,
          }}>
          Lieux
        </Text>
        <View
          style={{
            marginVertical: 5,

            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          <Text
            style={{
              color: isDarkMode
                ? theme.colors.antiFlashWhite
                : theme.colors.black,
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h8,
            }}>
            {selectedEvent?.location?.address?.addressLocality} -{' '}
            {selectedEvent?.location?.name}
          </Text>
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
          marginBottom: 70,
        }}>
        <Text
          style={{
            color: isDarkMode
              ? theme.colors.antiFlashWhite
              : theme.colors.black,
            fontFamily: 'Nunito-Bold',
            fontSize: theme.sizes.h5,
          }}>
          Ticket
        </Text>

        {selectedEvent?.offers?.type === false ? (
          <View
            style={{
              marginVertical: 5,
              marginHorizontal: 5,
            }}>
            <View
              style={{
                marginBottom: 10,
              }}>
              <Text
                style={{
                  color: isDarkMode
                    ? theme.colors.antiFlashWhite
                    : theme.colors.black,
                  fontFamily: 'Nunito-SemiBold',
                  fontSize: theme.sizes.h8,
                }}>
                0 fcfa
              </Text>
            </View>
          </View>
        ) : (
          <View
            style={{
              marginVertical: 5,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            {selectedEvent?.offers?.price?.map(
              (
                item:
                  | boolean
                  | React.ReactChild
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined,
                index: React.Key | null | undefined,
              ) => (
                <RNBounceable
                  key={index}
                  style={{
                    backgroundColor: clickedId === index ? 'white' : '#AFCFEA',
                    marginTop: 10,
                    // height: 55,
                    // width: 90,
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginBottom: 10,
                    borderRadius: 3,
                    marginHorizontal: 12,
                  }}
                  onPress={() => handlePrice(item, index)}>
                  <Text
                    key={index}
                    style={{
                      color:
                        clickedId === index
                          ? theme.colors.black
                          : theme.colors.white,
                      fontFamily: 'Nunito-Bold',
                      fontSize: theme.sizes.h8,
                    }}>
                    {`${item} fcfa`}
                  </Text>
                </RNBounceable>
              ),
            )}
          </View>
        )}
      </View>
    );
  };

  const ButtomBarSection = () => {
    return (
      <View
        style={{
          height: 60,
          width,

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
                  backgroundColor: isDarkMode
                    ? theme.colors.antiFlashWhite
                    : theme.colors.bluetiful,
                  width: width / 1.1,
                  height: 40,
                }}
                disabled={
                  clickedId === -1 && selectedEvent?.offers?.type !== false
                }
                onPress={billet}>
                {loading === true ? (
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
                    Billets
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
    <View
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? theme.colors.dark : '#F6F6F7',
      }}>
      {pageLoading === true ? (
        <View
          style={{
            width,
            height,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator
            size="small"
            color={isDarkMode ? 'white' : 'black'}
            animating={pageLoading}
            hidesWhenStopped={pageLoading}
          />
        </View>
      ) : (
        <View style={{flex: 1}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <ImageBackgroundComponent />
            <IntroductionComponent />
            <DescriptionSection />
            <LocationSection />
            <PriceSection />
          </ScrollView>
          <ButtomBarSection />
        </View>
      )}
    </View>
  );
};

export default Detail;
