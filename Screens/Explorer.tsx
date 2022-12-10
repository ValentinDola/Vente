import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Text,
  View,
  FlatList,
  Image,
  ImageBackground,
  Animated,
  useColorScheme,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {useSelector} from 'react-redux';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import {theme} from '../Constants/index';
import {selectData} from '../Slices/data';
import {gql} from '@apollo/client';
import {
  Directions,
  FlingGestureHandler,
  gestureHandlerRootHOC,
  State,
} from 'react-native-gesture-handler';
import _ from 'lodash';
import {useAuth} from '../Components/authProvider';

const MY_DATA = gql`
  query Event {
    data {
      _id
      eventAttendanceMode
      type
      name
      startDate
      location {
        type
        address {
          addressLocality
        }
      }
      offers {
        availability
        type
        price
      }
      endDate
      eventStatus
      description
      performer {
        type
        name
      }
      organizer {
        type
        name
      }
    }
  }
`;

const {width} = Dimensions.get('screen');

const SPACING = 10;
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.6;
const VISIBLE_ITEMS = 3;

const Explorer: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const navigation = useNavigation();

  const scrollXIndex = React.useRef(new Animated.Value(0)).current;
  const scrollXAnimated = React.useRef(new Animated.Value(0)).current;
  const [index_, setIndex] = React.useState(0);

  const setActiveIndex = React.useCallback(activeIndex => {
    setIndex(activeIndex);
    scrollXIndex.setValue(activeIndex);
  }, []);

  React.useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();
  });

  const event = useSelector(selectData);

  const {currentUser} = useAuth();

  const Header = () => (
    <View
      style={{
        flexDirection: 'row',
        marginHorizontal: 15,
        marginTop: 25,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View>
        <Text
          style={{
            color: isDarkMode ? theme.colors.white : theme.colors.black,
            fontFamily: 'Nunito-SemiBold',
            fontSize: theme.sizes.h10,
          }}>
          Autour de toi à
        </Text>
        <Text
          style={{
            color: isDarkMode
              ? theme.colors.antiFlashWhite
              : theme.colors.black,
            fontFamily: 'Nunito-SemiBold',
            fontSize: theme.sizes.h1,
          }}>
          Baguida
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 150,
          marginTop: 20,
        }}>
        <RNBounceable
          style={{
            backgroundColor: isDarkMode
              ? 'transparent'
              : theme.colors.antiFlashWhite,
            height: 40,
            width: 40,

            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
          }}
          onPress={() => navigation.navigate('Recherche')}>
          <Icon
            name="search-outline"
            size={22}
            color={
              isDarkMode ? theme.colors.antiFlashWhite : theme.colors.black
            }
          />
        </RNBounceable>

        <RNBounceable
          style={{
            backgroundColor: isDarkMode
              ? 'transparent'
              : theme.colors.antiFlashWhite,
            height: 40,
            width: 40,

            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
            marginHorizontal: 10,
          }}
          disabled={currentUser === null}
          onPress={() => navigation.navigate('Portefeuille')}>
          <Icon
            name="wallet-outline"
            size={22}
            color={
              isDarkMode
                ? currentUser === null
                  ? theme.colors.black
                  : theme.colors.white
                : currentUser === null
                ? theme.colors.white
                : theme.colors.black
            }
          />
        </RNBounceable>
        {currentUser === null ? (
          <RNBounceable
            style={{
              backgroundColor: isDarkMode
                ? '#2F3538'
                : theme.colors.antiFlashWhite,
              height: 40,
              width: 40,

              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
              marginHorizontal: 10,
            }}
            onPress={() => navigation.navigate('Identification')}>
            <Icon
              name="log-in-outline"
              size={22}
              color={
                isDarkMode ? theme.colors.antiFlashWhite : theme.colors.black
              }
            />
          </RNBounceable>
        ) : (
          <View>
            {currentUser?.photoURL === null ? (
              <RNBounceable
                onPress={() => navigation.navigate('Reglages')}
                style={{
                  backgroundColor: theme.colors.dark,
                  width: 55,
                  height: 55,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: theme.colors.white,
                    fontFamily: 'Nunito-SemiBold',
                    fontSize: 25,
                  }}>
                  {currentUser?.email.slice(0, 1).toUpperCase()}
                </Text>
              </RNBounceable>
            ) : (
              <RNBounceable onPress={() => navigation.navigate('Reglages')}>
                <Image
                  source={{uri: currentUser?.photoURL}}
                  style={{width: 50, height: 50, borderRadius: 50}}
                />
              </RNBounceable>
            )}
          </View>
        )}
      </View>
    </View>
  );

  const Events = gestureHandlerRootHOC(() => (
    <FlingGestureHandler
      key="left"
      direction={Directions.LEFT}
      onHandlerStateChange={ev => {
        if (ev.nativeEvent.state === State.END) {
          if (index_ === event.length - 1) {
            return;
          }
          setActiveIndex(index_ + 1);
        }
      }}>
      <FlingGestureHandler
        key="right"
        direction={Directions.RIGHT}
        onHandlerStateChange={ev => {
          if (ev.nativeEvent.state === State.END) {
            if (index_ === 0) {
              return;
            }
            setActiveIndex(index_ - 1);
          }
        }}>
        <FlatList
          data={event}
          keyExtractor={(_, index) => String(index)}
          horizontal
          inverted
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
            padding: SPACING * 2,
            marginTop: 50,
          }}
          scrollEnabled={false}
          removeClippedSubviews={false}
          CellRendererComponent={({item, index, children, style, ...props}) => {
            const newStyle = [style, {zIndex: event.length - index}];
            return (
              <View style={newStyle} index={index} {...props}>
                {children}
              </View>
            );
          }}
          renderItem={({item, index: i}) => {
            const inputRange = [i - 1, i, i + 1];
            const translateX = scrollXAnimated.interpolate({
              inputRange,
              outputRange: [50, 0, -100],
            });
            const scale = scrollXAnimated.interpolate({
              inputRange,
              outputRange: [0.8, 1, 1.3],
            });

            const opacity = scrollXAnimated.interpolate({
              inputRange,
              outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
            });
            return (
              <Animated.View
                style={{
                  position: 'absolute',
                  left: -ITEM_WIDTH / 2,
                  opacity,
                  transform: [{translateX}, {scale}],
                }}>
                <Pressable
                  onPress={() => {
                    navigation.navigate('Detail', {
                      selectedEvent: event[index_],
                    });
                  }}>
                  <ImageBackground
                    source={item.image}
                    style={{
                      width: ITEM_WIDTH,
                      height: ITEM_HEIGHT,
                      justifyContent: 'space-between',
                    }}
                    imageStyle={{borderRadius: 10}}
                    resizeMode="cover">
                    <View
                      style={{
                        alignItems: 'flex-end',
                        marginHorizontal: 15,
                        marginVertical: 15,
                      }}>
                      <View
                        style={{
                          width: 50,
                          height: 50,
                          backgroundColor: theme.colors.white,
                          borderRadius: 5,
                          justifyContent: 'center',
                          alignItems: 'center',
                          opacity: 0.6,
                        }}>
                        <Text
                          style={{
                            color: theme.colors.black,
                            fontFamily: 'Nunito-SemiBold',
                          }}>
                          {moment(item.startDate).format('MMM')}
                        </Text>
                        <Text
                          style={{
                            color: theme.colors.black,
                            fontFamily: 'Nunito-SemiBold',
                            fontSize: theme.sizes.h3,
                          }}>
                          {moment(item.startDate).format('DD')}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        padding: 10,
                        backgroundColor: theme.colors.white,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        opacity: 0.9,
                      }}>
                      <Text
                        style={{
                          textTransform: 'uppercase',
                          fontFamily: 'Nunito-SemiBold',
                          opacity: 0.8,
                          marginVertical: 10,
                          fontSize: theme.sizes.h5,
                          color: theme.colors.black,
                        }}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'Nunito-SemiBold',
                          fontSize: theme.sizes.h6,
                          opacity: 0.6,
                          color: theme.colors.black,
                        }}>
                        {item.location.address.addressLocality}
                      </Text>
                    </View>
                  </ImageBackground>
                </Pressable>
              </Animated.View>
            );
          }}
        />
      </FlingGestureHandler>
    </FlingGestureHandler>
  ));

  return (
    <View
      style={{flex: 1, backgroundColor: isDarkMode ? '#212529' : '#F6F6F7'}}>
      <Header />
      <Events />
    </View>
  );
};

export default Explorer;
