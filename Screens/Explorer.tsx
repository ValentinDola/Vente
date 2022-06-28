import React from 'react';
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
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import {events} from '../Constants/dummy-data';
import {theme} from '../Constants/index';
import {selectUser, setUser} from '../Slices/user';

const {width, height} = Dimensions.get('window');

const categories = [
  {
    id: 1,
    title: 'Musique',
    image: require('../assets/images/categories/icons8-earbud-headphones-40.png'),
  },
  {
    id: 2,
    title: 'Sortie',
    image: require('../assets/images/categories/icons8-partly-cloudy-day-40.png'),
  },
  {
    id: 3,
    title: 'Bouffe',
    image: require('../assets/images/categories/icons8-ice-cream-sundae-40.png'),
  },
  {
    id: 4,
    title: 'Party',
    image: require('../assets/images/categories/icons8-the-toast-40.png'),
  },
  {
    id: 5,
    title: 'Sport',
    image: require('../assets/images/categories/icons8-soccer-ball-40.png'),
  },
];

const Explorer = ({navigation}: any) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const renderCat = ({item}: any) => (
    <View
      style={{
        marginHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: theme.colors.white,
          borderRadius: 50,
          height: 50,
          width: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => console.log(`You select ${item.title}`)}>
        <Image source={item.image} style={{width: 25, height: 25}} />
      </TouchableOpacity>
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

  const renderEv = ({item, index}: any) => (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Detail', {selectedEvent: item})}>
      <View
        style={{
          marginLeft: index === 0 ? 15 : 20,
          marginRight: index === events.length - 1 ? 15 : 0,
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
          {/* <View
            style={{
              width: width / 2 + 70,
              height: width / 2 + 30,
              borderRadius: 5,
              backgroundColor: theme.colors.black,
              opacity: 0,
            }}> */}
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
                {moment(item.startTime).format('MMM')}
              </Text>
              <Text
                style={{
                  color: theme.colors.black,
                  fontFamily: 'Nunito-SemiBold',
                  fontSize: theme.sizes.h3,
                }}>
                {moment(item.startTime).format('DD')}
              </Text>
            </View>
          </View>
          <View style={{marginLeft: 10, marginBottom: 15}}>
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
              {' '}
              {item.title}{' '}
            </Text>
          </View>
          {/* </View> */}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );

  const Header = (props: {
    user:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
  }) => (
    <View
      style={{
        flexDirection: 'row',
        flex: 0.15,
        marginHorizontal: 15,

        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: theme.colors.black,
          fontFamily: 'Nunito-SemiBold',
          fontSize: theme.sizes.h2,
        }}>
        {props.user}
      </Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => console.log('search')}>
          <Icon name="search-outline" size={20} color={theme.colors.black} />
        </TouchableOpacity>
        <View style={{width: 20}} />
        <TouchableOpacity onPress={() => console.log('Menu')}>
          <Icon name="options-outline" size={20} color={theme.colors.black} />
        </TouchableOpacity>
      </View>
    </View>
  );

  const Categories = () => (
    <View style={{flex: 0.28}}>
      <Text
        style={{
          color: theme.colors.black,
          fontSize: theme.sizes.h5,
          fontFamily: 'Nunito-SemiBold',
          marginHorizontal: 15,
        }}>
        Categories
      </Text>
      <View style={{marginVertical: 20}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={renderCat}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );

  const EventNearby = () => (
    <View style={{flex: 0.52}}>
      <Text
        style={{
          color: theme.colors.black,
          fontSize: theme.sizes.h5,
          fontFamily: 'Nunito-SemiBold',
          marginHorizontal: 15,
          marginBottom: 25,
        }}>
        Prochains événements.
      </Text>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={events}
          renderItem={renderEv}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );

  const Promotion = () => (
    <View>
      <Text
        style={{
          color: theme.colors.black,
          fontSize: theme.sizes.h5,
          fontFamily: 'Nunito-SemiBold',
          marginHorizontal: 15,
          marginBottom: 25,
        }}>
        Pour toi.
      </Text>
    </View>
  );

  return (
    <View style={{flex: 1, backgroundColor: '#F6F6F7'}}>
      <Header user={user} />
      <Categories />
      <EventNearby />
      <Promotion />
    </View>
  );
};

export default Explorer;
