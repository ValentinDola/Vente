import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  ScrollView,
  Alert,
  Animated,
  useColorScheme,
  Pressable,
  Modal,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import RNBounceable from '@freakycoder/react-native-bounceable';
import ContentLoader, {Rect, Circle, Path} from 'react-content-loader/native';
import {useSelector, useDispatch} from 'react-redux';
import ExplorerSkeleton from '../Skeleton/Explorer';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
// import { events } from '../Constants/dummy-data';
import {theme} from '../Constants/index';
import {selectData, setData} from '../Slices/data';
import {selectCategories, setCategories} from '../Slices/categories';
import {selectUser} from '../Slices/user';
import {selectNews} from '../Slices/news';
import {useQuery, gql} from '@apollo/client';
import {
  Directions,
  FlingGestureHandler,
  gestureHandlerRootHOC,
  State,
} from 'react-native-gesture-handler';
import _ from 'lodash';

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

const DATA = [
  {
    title: 'Afro vibes',
    location: 'Mumbai, India',
    date: '2022-07-22 19:00',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/07/Afro-vibes-flyer-template.jpg',
  },
  {
    title: 'Jungle Party',
    location: 'Unknown',
    date: '2022-09-23 19:00',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2019/11/Jungle-Party-Flyer-Template-1.jpg',
  },
  {
    title: '4th Of July',
    location: 'New York, USA',
    date: '2022-08-03 19:00',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/4th-Of-July-Invitation.jpg',
  },
  {
    title: 'Summer festival',
    location: 'Bucharest, Romania',
    date: '2022-10-13 19:00',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/07/Summer-Music-Festival-Poster.jpg',
  },
  {
    title: 'BBQ with friends',
    location: 'Prague, Czech Republic',
    date: '2022-07-23 19:00',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/BBQ-Flyer-Psd-Template.jpg',
  },
  {
    title: 'Festival music',
    location: 'Berlin, Germany',
    date: '2022-04-23 19:00',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/Festival-Music-PSD-Template.jpg',
  },
  {
    title: 'Beach House',
    location: 'Liboa, Portugal',
    date: '2022-01-23 19:00',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/Summer-Beach-House-Flyer.jpg',
  },
];

const {width, height} = Dimensions.get('screen');

const OVERFLOW_HEIGHT = 70;
const SPACING = 10;
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.6;
const VISIBLE_ITEMS = 3;

const Explorer: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const navigation = useNavigation();

  const [data, setData] = useState(DATA);
  const scrollXIndex = React.useRef(new Animated.Value(0)).current;
  const scrollXAnimated = React.useRef(new Animated.Value(0)).current;
  const [index_, setIndex] = React.useState(0);
  const [modal, setModal] = React.useState(false);

  const setActiveIndex = React.useCallback(activeIndex => {
    setIndex(activeIndex);
    scrollXIndex.setValue(activeIndex);
  });

  // const {data, loading, error} = useQuery(MY_DATA);

  // useEffect(() => {
  //   if (data) console.log(data.data);
  // }, [data]);

  React.useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();

    // setInterval(() => {
    //   scrollXIndex.setValue(Math.floor(Math.random() * data.length));
    // }, 3000);
  });

  const user = useSelector(selectUser);
  const event = useSelector(selectData);
  const categories = useSelector(selectCategories);
  const news = useSelector(selectNews);
  const dispatch = useDispatch();

  const renderCategories = ({item}: any) => (
    <View
      style={{
        marginHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <RNBounceable
        style={{
          backgroundColor: theme.colors.antiFlashWhite,
          borderRadius: 50,
          height: 50,
          width: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => console.log(`You select ${item.title}`)}>
        <Image source={item.image} style={{width: 25, height: 25}} />
      </RNBounceable>
      <Text
        style={{
          color: isDarkMode ? theme.colors.antiFlashWhite : theme.colors.black,
          fontFamily: 'Nunito-SemiBold',
          marginVertical: 10,
        }}>
        {item.title}
      </Text>
    </View>
  );

  const renderEvents = ({item, index}: any) => (
    <RNBounceable
      onPress={() => navigation.navigate('Detail', {selectedEvent: item})}>
      <View
        style={{
          marginTop: index === 0 ? 15 : 0,
          marginBottom: index === event.length - 1 ? width : 0,
        }}>
        <ImageBackground
          source={item.image}
          style={{
            width: width,
            height: width / 2,
            justifyContent: 'space-between',
          }}
          imageStyle={{borderRadius: 2}}
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
          <View style={{marginHorizontal: 10, marginBottom: 15}}>
            <Text
              style={{
                textTransform: 'uppercase',
                fontFamily: 'Nunito-SemiBold',
                opacity: 0.6,
                marginVertical: 10,
                fontSize: theme.sizes.h5,
                color: theme.colors.white,
              }}>
              {' '}
              {item.type}{' '}
            </Text>
            <Text
              style={{
                fontFamily: 'Nunito-SemiBold',
                fontSize: theme.sizes.h4,
                color: theme.colors.white,
              }}>
              {item.name}
            </Text>
          </View>
          {/* </View> */}
        </ImageBackground>
      </View>
    </RNBounceable>
  );

  const renderItem = ({item, index}: any) => (
    <View
      style={{
        marginHorizontal: 15,
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: theme.colors.white,
          width: width / 1.1,
          height: 70,
          marginTop: 5,
          borderRadius: 3,
          borderLeftColor: item?.color,
          borderLeftWidth: 10,
        }}>
        <Text
          style={{
            color: theme.colors.black,
            fontFamily: 'Nunito-SemiBold',
            marginHorizontal: 15,
            marginTop: 5,
          }}>
          {item?.title}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const Header = (props: any) => (
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
          width: 100,
          marginTop: 20,
        }}>
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

        <RNBounceable onPress={() => navigation.navigate('Reglages')}>
          <Image
            source={user?.image}
            style={{width: 50, height: 50, borderRadius: 50}}
          />
        </RNBounceable>
      </View>
    </View>
  );

  const HeaderSkeleton = () => (
    <View
      style={{
        marginHorizontal: 15,
        marginVertical: 25,
      }}>
      <ContentLoader
        speed={3}
        width={width}
        height={124}
        viewBox="0 0 476 124"
        // backgroundColor="#F6F6F7"
        foregroundColor="#ecebeb"
        {...props}>
        <Rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
        <Rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
        <Rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
        <Rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
        <Rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
        <Circle cx="20" cy="20" r="20" />
      </ContentLoader>
    </View>
  );

  const Categories = () => (
    <View>
      <Text
        style={{
          textDecorationLine: 'line-through',
          color: isDarkMode ? theme.colors.antiFlashWhite : theme.colors.blue,
          // color: theme.colors.black,
          fontFamily: 'Nunito-SemiBold',
          fontSize: theme.sizes.h5,
          marginHorizontal: 10,
        }}>
        {' '}
        Catégories{' '}
      </Text>
      <View style={{marginTop: 10}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={renderCategories}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );

  const CategoriesSkeleton = () => (
    <View
      style={{
        margin: 15,
      }}>
      <ContentLoader
        width={width}
        height={100}
        viewBox="0 0 500 100"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}>
        <Circle cx="46" cy="38" r="38" />
        <Rect x="34" y="83" rx="5" ry="5" width="25" height="10" />
        <Rect x="547" y="222" rx="5" ry="5" width="220" height="10" />
        <Rect x="82" y="150" rx="5" ry="5" width="220" height="10" />
        <Circle cx="137" cy="38" r="38" />
        <Rect x="124" y="83" rx="5" ry="5" width="25" height="10" />
        <Circle cx="228" cy="38" r="38" />
        <Rect x="215" y="83" rx="5" ry="5" width="25" height="10" />
        <Circle cx="320" cy="38" r="38" />
        <Rect x="307" y="83" rx="5" ry="5" width="25" height="10" />
        <Circle cx="410" cy="38" r="38" />
        <Rect x="398" y="83" rx="5" ry="5" width="25" height="10" />
      </ContentLoader>
    </View>
  );

  const EventNearby = () => (
    <View>
      <Text
        style={{
          textDecorationLine: 'line-through',
          color: isDarkMode ? theme.colors.antiFlashWhite : theme.colors.blue,
          fontFamily: 'Nunito-SemiBold',
          fontSize: theme.sizes.h5,
          marginHorizontal: 10,
          marginVertical: 15,
        }}>
        {' '}
        Événements{' '}
      </Text>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={event}
          renderItem={renderEvents}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );

  const News = () => (
    <View>
      <Text
        style={{
          textDecorationLine: 'line-through',
          color: theme.colors.blue,
          fontFamily: 'Nunito-SemiBold',
          fontSize: theme.sizes.h5,
          marginHorizontal: 10,
          marginVertical: 15,
        }}>
        {' '}
        Nouvelles{' '}
      </Text>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={news}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );

  const Information = ({data, scrollXAnimated}) => {
    return (
      <View>
        <Animated.View>
          {data.map(
            (
              item: {
                title:
                  | boolean
                  | React.ReactChild
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined;
              },
              index: React.Key | null | undefined,
            ) => {
              return (
                <View key={index}>
                  <Text>{item.title}</Text>
                </View>
              );
            },
          )}
        </Animated.View>
      </View>
    );
  };

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
            const newStyle = [style, {zIndex: data.length - index}];
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
                  // bottom: SPACING * 2,
                  // top: SPACING / 2.5,
                  opacity,
                  transform: [{translateX}, {scale}],
                }}>
                <Pressable
                  onPress={() => {
                    // console.log(event[index_]);
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
                        paddingHorizontal: 10,
                        paddingBottom: 15,
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
                        {' '}
                        {item.name}{' '}
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

  const MenuModal = () => {
    return (
      <Modal
        animated
        animationType="slide"
        visible={modal}
        transparent
        onRequestClose={() => setModal(false)}>
        <View style={styles.MContainer}>
          <View>
            <View style={{position: 'absolute', bottom: 200, right: 10}}>
              <RNBounceable
                style={{
                  backgroundColor: isDarkMode ? '#2F3538' : theme.colors.dark,
                  height: 50,
                  width: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                }}>
                <Icon
                  name="clipboard-outline"
                  size={22}
                  color={
                    isDarkMode
                      ? theme.colors.antiFlashWhite
                      : theme.colors.antiFlashWhite
                  }
                />
              </RNBounceable>
            </View>
            <View style={{position: 'absolute', bottom: 140, right: 10}}>
              <RNBounceable
                style={{
                  backgroundColor: isDarkMode ? '#2F3538' : theme.colors.dark,
                  height: 50,
                  width: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                }}
                onPress={() => setModal(!modal)}>
                <Icon
                  name="close-outline"
                  size={22}
                  color={
                    isDarkMode
                      ? theme.colors.antiFlashWhite
                      : theme.colors.antiFlashWhite
                  }
                />
              </RNBounceable>
            </View>
            <View style={{position: 'absolute', bottom: 80, right: 10}}>
              <RNBounceable
                style={{
                  backgroundColor: isDarkMode ? '#2F3538' : theme.colors.dark,
                  height: 50,
                  width: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                }}
                onPress={() => setModal(!modal)}>
                <Icon
                  name="close-outline"
                  size={22}
                  color={
                    isDarkMode
                      ? theme.colors.antiFlashWhite
                      : theme.colors.antiFlashWhite
                  }
                />
              </RNBounceable>
            </View>
            <View style={{position: 'absolute', bottom: 10, right: 10}}>
              <RNBounceable
                style={{
                  backgroundColor: isDarkMode ? '#2F3538' : theme.colors.dark,
                  height: 55,
                  width: 55,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                }}
                onPress={() => setModal(!modal)}>
                <Icon
                  name="close-outline"
                  size={22}
                  color={
                    isDarkMode
                      ? theme.colors.antiFlashWhite
                      : theme.colors.antiFlashWhite
                  }
                />
              </RNBounceable>
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  return (
    <View
      style={{flex: 1, backgroundColor: isDarkMode ? '#212529' : '#F6F6F7'}}>
      <Header />
      {/* <Categories />
      <EventNearby /> */}
      {/* <Information /> */}
      <Events />
      {/* <View style={{position: 'absolute', bottom: 10, right: 10}}>
        <RNBounceable
          style={{
            backgroundColor: isDarkMode ? '#2F3538' : theme.colors.dark,
            height: 45,
            width: 45,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
          }}
          onPress={() => setModal(!modal)}>
          <Icon
            name="settings-outline"
            size={22}
            color={
              isDarkMode
                ? theme.colors.antiFlashWhite
                : theme.colors.antiFlashWhite
            }
          />
        </RNBounceable>
      </View> */}
      {/* <MenuModal /> */}
    </View>
  );
};

export default Explorer;

const styles = StyleSheet.create({
  MContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  modalContainer: {
    backgroundColor: 'white',
    height: height,
    width: width / 1.25,
  },
});
