// TODOS
// [X] Position
// [X] Wallet
// [X] Search
// [X] Menu
// [X] Categories
// [X] Events
// [X] News

import React, {useEffect} from 'react';
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
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import RNBounceable from '@freakycoder/react-native-bounceable';
import ContentLoader, {Rect, Circle, Path} from 'react-content-loader/native';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import {theme} from '../Constants/index';
import {selectData, setData} from '../Slices/data';
import {selectCategories, setCategories} from '../Slices/categories';
import {selectUser} from '../Slices/user';
import {selectNews} from '../Slices/news';
import {useQuery, gql} from '@apollo/client';

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

const {width, height} = Dimensions.get('window');

const Explorer: React.FC = () => {
  // Navigation hooks
  const navigation = useNavigation();

  // Apollo client
  const {data, loading, error} = useQuery(MY_DATA);

  // React redux slices
  const user = useSelector(selectUser);
  const event = useSelector(selectData);
  const categories = useSelector(selectCategories);
  const news = useSelector(selectNews);

  // React redux hook
  const dispatch = useDispatch();

  useEffect(() => {
    // Data from the database
    if (data) console.log(data.data);
  }, [data]);

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
          color: theme.colors.black,
          fontFamily: 'Nunito-SemiBold',
          marginVertical: 10,
        }}>
        {item.title}
      </Text>
    </View>
  );

  const renderEvents = ({item, index}: any) => (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Detail', {selectedEvent: item})}>
      <View
        style={{
          marginLeft: index === 0 ? 15 : 20,
          marginRight: index === event.length - 1 ? 15 : 0,
        }}>
        <ImageBackground
          source={item.image}
          style={{
            width: width / 2 + 70,
            height: width / 2 + 30,
            justifyContent: 'space-between',
          }}
          imageStyle={{borderRadius: 5}}
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
    </TouchableWithoutFeedback>
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
        marginVertical: 25,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View>
        <Text
          style={{
            color: theme.colors.black,
            fontFamily: 'Nunito-SemiBold',
            fontSize: theme.sizes.h10,
          }}>
          Autour de toi à
        </Text>
        <Text
          style={{
            color: theme.colors.black,
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
          width: 140,
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: theme.colors.antiFlashWhite,
            height: 40,
            width: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          }}
          onPress={() => navigation.navigate('Portefeuille')}>
          <Icon name="md-wallet-outline" size={22} color={theme.colors.black} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: theme.colors.antiFlashWhite,
            height: 40,
            width: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          }}
          onPress={() => navigation.navigate('Recherche')}>
          <Icon name="search-outline" size={22} color={theme.colors.black} />
        </TouchableOpacity>
        {/* <View style={{ width: 20 }} /> */}
        <TouchableOpacity
          style={{
            backgroundColor: theme.colors.antiFlashWhite,
            height: 40,
            width: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          }}
          onPress={() => navigation.navigate('Menu')}>
          <Icon name="options-outline" size={22} color={theme.colors.black} />
        </TouchableOpacity>
      </View>
    </View>
  );

  const Categories = () => (
    <View>
      <Text
        style={{
          textDecorationLine: 'line-through',
          color: theme.colors.blue,
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

  const EventNearby = () => (
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
        Événements{' '}
      </Text>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={event}
          renderItem={renderEvents}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );

  const News = () => (
    <View style={{marginBottom: 50}}>
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

  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: '#F6F6F7'}}>
        {/* Header[position wallet search menu] */}
        <Header />
        {/* Categories */}
        <Categories />
        {/* Event */}
        <EventNearby />
        {/* News */}
        <News />
      </View>
    </ScrollView>
  );
};

export default Explorer;
