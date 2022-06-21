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
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import {events} from '../Constants/dummy-data';
import {theme} from '../Constants/index';

const {width, height} = Dimensions.get('window');

moment.locale('fr', {
  months:
    'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split(
      '_',
    ),
  monthsShort:
    'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
  monthsParseExact: true,
  weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
  weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
  weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm',
  },
  calendar: {
    sameDay: '[Aujourd’hui à] LT',
    nextDay: '[Demain à] LT',
    nextWeek: 'dddd [à] LT',
    lastDay: '[Hier à] LT',
    lastWeek: 'dddd [dernier à] LT',
    sameElse: 'L',
  },
  relativeTime: {
    future: 'dans %s',
    past: 'il y a %s',
    s: 'quelques secondes',
    m: 'une minute',
    mm: '%d minutes',
    h: 'une heure',
    hh: '%d heures',
    d: 'un jour',
    dd: '%d jours',
    M: 'un mois',
    MM: '%d mois',
    y: 'un an',
    yy: '%d ans',
  },
  dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
  ordinal: function (number) {
    return number + (number === 1 ? 'er' : 'e');
  },
  meridiemParse: /PD|MD/,
  isPM: function (input) {
    return input.charAt(0) === 'M';
  },
  // In case the meridiem units are not separated around 12, then implement
  // this function (look at locale/id.js for an example).
  // meridiemHour : function (hour, meridiem) {
  //     return /* 0-23 hour, given meridiem token and hour 1-12 */ ;
  // },
  meridiem: function (hours, minutes, isLower) {
    return hours < 12 ? 'PD' : 'MD';
  },
  week: {
    dow: 1, // Monday is the first day of the week.
    doy: 4, // Used to determine first week of the year.
  },
});

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
          <View
            style={{
              alignItems: 'flex-end',
              marginHorizontal: 15,
              marginVertical: 15,
            }}>
            <View
              style={{
                width: 60,
                height: 60,
                backgroundColor: theme.colors.white,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 0.5,
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
                  fontSize: theme.sizes.h2,
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
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );

  const Header = () => (
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
        Emplacement
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
    <View style={{flex: 0.25}}>
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
    <View style={{flex: 0.6}}>
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

  return (
    <View style={{flex: 1, backgroundColor: '#F6F6F7'}}>
      <Header />
      <Categories />
      <EventNearby />
    </View>
  );
};

export default Explorer;
