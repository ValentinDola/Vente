import React, {
  FC,
  SetStateAction,
  useEffect,
  useState,
  useLayoutEffect,
} from 'react';
import Navigation from './Navigation';
import RNBootSplash from 'react-native-bootsplash';
import {ApolloProvider} from '@apollo/client';
import {Provider} from 'react-redux';
import {store} from './Store/index';
import {
  SafeAreaView,
  StatusBar,
  PermissionsAndroid,
  Platform,
  Alert,
  useColorScheme,
} from 'react-native';
import moment from 'moment';
import Geolocation from 'react-native-geolocation-service';
import InternetConnectionAlert from 'react-native-internet-connection-alert';
import Geocoder from 'react-native-geocoding';

import {enableLatestRenderer} from 'react-native-maps';
import {theme} from './Constants';
import {client} from './Components/Apollo';
import {AuthProvider} from './Components/authProvider';

import {DropdownAlertType} from 'react-native-dropdownalert';

enableLatestRenderer();

moment.updateLocale('fr', {
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

const App: FC = () => {
  const [currentLongitude, setCurrentLongitude] = useState(Number);
  const [currentLatitude, setCurrentLatitude] = useState(Number);
  const [locationStatus, setLocationStatus] = useState('');
  const [location, setLocation] = useState(false);

  const isDarkMode = useColorScheme() === 'dark';

  // Function to get permission for location
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === 'granted') {
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };

  // function to check permissions and get Location
  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position.coords);
            setLocation(res);
            setCurrentLongitude(position.coords.longitude);
            setCurrentLatitude(position.coords.latitude);
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
            setLocation(false);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );

        // Geocoder.init('AIzaSyDV9YHcr43AxFrOf1_MdHmc8D6Upr7UWO4', {
        //   language: 'fr',
        // });

        // Geocoder.from(currentLatitude, currentLongitude)
        //   .then(json => {
        //     let addressComponent = json.results[0].address_components[0];
        //     console.log(addressComponent);
        //   })
        //   .catch(error => console.warn(error));
      }
    });
  };

  useEffect(() => {
    RNBootSplash.hide({fade: true})
      .then(r => console.log('Bootsplash has been hidden successfully'))
      .catch(err => console.error(err));
    getLocation();
  }, []);

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar
            backgroundColor={isDarkMode ? theme.colors.dark : 'black'}
          />

          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </SafeAreaView>
      </ApolloProvider>
    </Provider>
  );
};

export default App;
